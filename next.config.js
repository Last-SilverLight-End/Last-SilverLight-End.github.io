const debug = process.env.NODE_ENV !== 'production';
const name = 'ShowMeTheHomepage';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: debug ? '' : `/${name}/`
}

module.exports = nextConfig
