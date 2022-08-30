
/** @type {import('next').NextConfig} */


module.exports = {
  basePath: 
    process.env.NODE_ENV === "production"
      ? "/ShowMeTheHomepage"
      : undefined,
    
    
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://last-silverlight-end.github.io/ShowMeTheHomepage/"
      : undefined,

  reactStrictMode: false,

  swcMinify: true,

  experimental: {
    images: {
        unoptimized: true
    }
}

}