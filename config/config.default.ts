import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';
import * as os from 'os';

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1571145237182_4234';

    // add your egg config in here
    config.middleware = ['errorHandler'];

    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
        proxy: true,
        ipHeaders: 'X-Real-Ip, X-Forwarded-For',
        maxProxyCount: 1,
        hostHeaders: 'X-Forwarded-Host',
        security: {
            csrf: {
                enable: false,
            },
        },
        multipart: {
            mode: 'file',
            fileSize: '20mb',
            tmpdir: path.join(os.tmpdir(), 'uploads', appInfo.name),
            cleanSchedule: {
                cron: '0 30 4 * * *',
            },
            fileExtensions: ['.ico'],
        },

        validate: {
            convert: true,
            // validateRoot: false,
        },

        redis: {
            client: {
                port: 6379,
                host: '127.0.0.1',
                password: '',
                db: 1,
            },
        },

        logger: {
            // dir: '/work/qinVideo/logs',
            appLogName: `${appInfo.name}-web.log`,
            coreLogName: 'egg-web.log',
            agentLogName: 'egg-agent.log',
            errorLogName: 'common-error.log',
        },

        mongoose: {
            client: {
                url: 'mongodb://qinwork:l&g#^k5$yW1z9ONHTUTvc71J^TAYAgdE@localhost:27017/qinwork',
                //url: 'mongodb://localhost:27017/test',
                options: {},
            },
        },
        salt: 'qinmei5365', // 密码盐值
        tokenSecret: 'qinmei5365', // 登录密钥
        expired: 7200, // redis缓存有效期
        longExpired: 3600 * 12, // 首页等长时间接口的缓存时间
        expiredCount: 100, // 接口缓存写入数据库的数量
    };

    return {
        ...config,
        ...bizConfig,
    };
};
