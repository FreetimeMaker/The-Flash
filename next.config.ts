import type { NextConfig } from 'next';
import { resolve } from 'node:path';

const config: NextConfig = {
  turbopack: { root: resolve('.') },
  outputFileTracingRoot: resolve('.'),
  outputFileTracingExcludes: { '*': ['./public/videos/**/*'] },
};
export default config;
