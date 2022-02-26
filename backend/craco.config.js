const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const CracoLessPlugin = require('craco-less');
const lessToJs = require('less-vars-to-js');

const getAntdTheme = filePath => {
  const paletteLess = fs.readFileSync(path.join(__dirname, filePath), 'utf-8');
  const palette = lessToJs(paletteLess, {
    resolveVariables: true,
    stripPrefix: true,
  });
  return palette;
};

const namespace = process.env.NODE_ENV === 'development' ? '' : '/backend';

module.exports = {
  babel: {
    plugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: getAntdTheme('./src/themes/color.less'),
            javascriptEnabled: true,
          },
        },
        modifyLessRule(lessRule) {
          lessRule.test = /node_modules\/antd.*?\.less$/;
          return lessRule;
        },
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {},
        modifyLessRule(lessRule) {
          lessRule.exclude = /node_modules/;
          return lessRule;
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: '[local]_[hash:base64:5]',
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    plugins: {
      add: [
        new webpack.DefinePlugin({
          'process.env.namespace': JSON.stringify(namespace),
        }),
      ],
    },
    confogire: webpackConfig => {
      if (namespace) {
        webpackConfig.output.publicPath = `${namespace}/`;
      }
      return webpackConfig;
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7000',
        secure: false,
        changeOrigin: true,
      },
    },
    port: 2333,
  },
};
