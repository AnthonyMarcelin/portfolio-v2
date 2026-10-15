import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  // FR is served at the root, EN under /en (see lib/i18n.ts).
  async rewrites() {
    return [
      { source: "/", destination: "/fr" },
      { source: "/work", destination: "/fr/work" },
      { source: "/projects", destination: "/fr/projects" },
    ];
  },
};

export default nextConfig;
