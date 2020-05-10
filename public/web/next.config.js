/* eslint-disable */
const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const withLess = require("@zeit/next-less");

const nextConfig = {
  assetPrefix: "/web",
  distDir: "_next",
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals)
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader"
      });
    }
    return config;
  }
};

module.exports = withPlugins(
  [
    [withCss],
    [
      withLess,
      {
        cssModules: true,
        cssLoaderOptions: {
          localIdentName: "[local]___[hash:base64:5]"
        }
      }
    ]
  ],
  nextConfig
);
