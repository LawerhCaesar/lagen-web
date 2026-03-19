import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Use this directory as project root (avoids multiple lockfiles / wrong node_modules)
  outputFileTracingRoot: path.resolve(process.cwd()),
  // Avoid cache corruption on OneDrive/sync folders
  webpack: (config, { dev }) => {
    if (dev) config.cache = false;
    return config;
  },
  turbopack: {},
};

export default nextConfig;
