import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables fully static build
  images: { unoptimized: true }, // Required for static export
};

export default nextConfig;