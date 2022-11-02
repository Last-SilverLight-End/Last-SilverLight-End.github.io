
/** @type {import('next').NextConfig} */

/*module.exports = {
  basePath:
    process.env.NODE_ENV === "production"
      ? "/ShowMeTheHomepage"
      : undefined,*/
module.exports = {
  basePath:
    process.env.NODE_ENV === "production"
      ? ""
      : undefined,


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

}