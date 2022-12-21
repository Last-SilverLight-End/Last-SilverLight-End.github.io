/** @type {import('next').NextConfig} */
const config = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://changgeun.strongtrash.com"
      : undefined,
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true
    }
  }
  // 걍 무시하죠?ㄴ
}

module.exports = config
