import { serveVideo } from "../../../../lib/video";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

export async function GET(
  request: Request,
  context: RouteContext,
): Promise<Response> {
  const { path } = await context.params;
  return serveVideo(request, path);
}

export async function HEAD(
  request: Request,
  context: RouteContext,
): Promise<Response> {
  const { path } = await context.params;
  return serveVideo(request, path);
}
