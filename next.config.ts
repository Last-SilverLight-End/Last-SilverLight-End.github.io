import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  output: "export",
  // GitHub Pages 서브디렉터리 배포 시 아래 주석 해제 후 repo 이름으로 변경:
  // basePath: "/repo-name",
  // assetPrefix: "/repo-name/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
