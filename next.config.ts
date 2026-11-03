import type { NextConfig } from "next";
import { resolve } from "node:path";

const config: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/:path+/index.html", destination: "/:path+", permanent: true },
      { source: "/:path*.html", destination: "/:path*", permanent: true },
    ];
  },
  turbopack: { root: resolve(".") },
  outputFileTracingRoot: resolve("."),
  outputFileTracingExcludes: { "*": ["./public/videos/**/*"] },
};
export default config;
