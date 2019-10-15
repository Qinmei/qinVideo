import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
const code = require("./code");

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1571145237182_4234";

  // add your egg config in here
  config.middleware = ["data", "errorHandler"];

  // add your special config in here
  const bizConfig = {
    code,
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    security: {
      csrf: {
        enable: false
      }
    },

    mongoose: {
      client: {
        url: "mongodb://test:testmongo@demo.qinvideo.org:27017/test",
        options: {}
      }
    },
    proxy: true,
    ipHeaders: "X-Real-Ip, X-Forwarded-For",
    maxProxyCount: 1,
    hostHeaders: "X-Forwarded-Host"
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
