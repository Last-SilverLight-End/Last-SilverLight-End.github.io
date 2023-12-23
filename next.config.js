/** @type {import('next').NextConfig} */
const config = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://last-silverlight-end.github.io/"
      : undefined,
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = config
