const { test } = require('node:test');
const assert = require('node:assert/strict');
const { mkdtemp, writeFile, readFile, rm } = require('node:fs/promises');
const { tmpdir } = require('node:os');
const { join } = require('node:path');
const { createHash } = require('node:crypto');

test('hydrates LFS pointers, verifies data and preserves pointers on failure', async () => {
  const { hydrateVideo } = await import('../scripts/lfs-download.mjs');
  const directory = await mkdtemp(join(tmpdir(), 'flash-lfs-test-'));
  const file = join(directory, 'video.mp4');
  const media = Buffer.from('test video payload');
  const oid = createHash('sha256').update(media).digest('hex');
  const pointer = `version https://git-lfs.github.com/spec/v1\noid sha256:${oid}\nsize ${media.length}\n`;
  try {
    await writeFile(file, pointer);
    let calls = 0;
    const fetchImpl = async (url, options) => {
      calls++;
      if (calls % 2 === 1) {
        assert.match(url, /github.com\/FreetimeMaker\/The-Flash.git\/info\/lfs\/objects\/batch$/);
        assert.equal(JSON.parse(options.body).objects[0].oid, oid);
        return Response.json({ objects: [{ oid, actions: { download: { href: 'https://storage.example/video', header: { 'X-Test': 'action' } } } }] });
      }
      assert.equal(options.headers.Authorization, undefined);
      return new Response(media);
    };
    assert.equal(await hydrateVideo(file, { fetchImpl, token: 'test-token' }), true);
    assert.deepEqual(await readFile(file), media);
    assert.equal(await hydrateVideo(file, { fetchImpl }), false);
    assert.equal(calls, 2);
    await writeFile(file, pointer);
    await assert.rejects(hydrateVideo(file, { fetchImpl: async () => new Response('', { status: 403 }) }), /HTTP 403/);
    assert.equal(await readFile(file, 'utf8'), pointer);
    let request = 0;
    await assert.rejects(hydrateVideo(file, { fetchImpl: async () => ++request === 1
      ? Response.json({ objects: [{ oid, actions: { download: { href: 'https://storage.example/video' } } }] })
      : new Response(Buffer.alloc(media.length)) }), /SHA-256/);
    assert.equal(await readFile(file, 'utf8'), pointer);
  } finally { await rm(directory, { recursive: true, force: true }); }
});
