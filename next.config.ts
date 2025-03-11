import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
