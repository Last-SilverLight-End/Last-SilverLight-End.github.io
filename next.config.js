const name = 'ShowMeTheHomepage';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: `/${name}/`,
  basePath: `/${name}`
}

module.exports = {
  basePath: 
    process.env.NODE_ENV === "production"
      ? "/ShowMeTheHomepage"
      : undefined ,

  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://last-silverlight-end.github.io/ShowMeTheHomepage/"
      : undefined,

  reactStrictMode: true,

  swcMinify: true,
  

};

 /*module.exports = nextConfig*/