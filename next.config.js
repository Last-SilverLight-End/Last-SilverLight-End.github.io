const name = 'ShowMeTheHomepage';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: `/${name}/`,
  basePath: `/${name}`
}

module.exports = {
  basePath: `/${name}`,
  assetPrefix:
  process.env.NODE_ENV === "production"
    ? "https://last-silverlight-end.github.io/ShowMeTheHomepage/"
    : "/ShowMeTheHomepage/",
    reactStrictMode: true,
    swcMinify: true,
  

};

 /*module.exports = nextConfig*/