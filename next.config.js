/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withAntdLess = require("next-plugin-antd-less");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  generateBuildId: () => "f8b4_team03",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withAntdLess({
  modifyVars: {
    "@primary-color": "#6400FF",
    "@border-radius-base": "16px",
  },
  lessVarsFilePath: "./styles/variables.less",
  ...nextConfig,

  future: {
    webpack5: true,
  },
  ...nextConfig,
});
