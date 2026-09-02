import type { NextConfig } from "next";

const repoBasePath = "/Nestly-Houses";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
