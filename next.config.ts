import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages compatibility (without static export)
  images: {
    unoptimized: true,
  },
  // Ensure environment variables are properly handled
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

export default nextConfig;
