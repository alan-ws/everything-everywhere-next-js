/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
