/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  // webpack: (config) => {
  //   Object.assign(config, {devtool: "hidden-source-map"})
  //   // config.devtool = "hidden-source-map";
  //   return config;
  // },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
