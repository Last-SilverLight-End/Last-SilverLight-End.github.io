
const name = 'ShowMeTheHomepage';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: `/${name}/`,
  basePath: `/${name}`
}

module.exports = nextConfig