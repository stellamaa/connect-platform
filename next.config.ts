import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 prerenders a static shell and lets dynamic UI stream in.
  // The preview role lives in the browser, so pages stay cacheable.
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
