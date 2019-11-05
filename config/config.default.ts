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
				enable: false
			}
		},
		multipart: {
			mode: 'file',
			fileSize: '20mb',
			tmpdir: path.join(os.tmpdir(), 'uploads', appInfo.name),
			cleanSchedule: {
				cron: '0 30 4 * * *'
			}
		},

		validate: {
			convert: true
			// validateRoot: false,
		},

		mongoose: {
			client: {
				url: 'mongodb://test:testmongo@demo.qinvideo.org:27017/test',
				// url: 'mongodb://localhost:27017/test',
				options: {}
			}
		},
		salt: 'qinmei',
		tokenSecret: 'qinmei'
	};

	// the return config will combines to EggAppConfig
	return {
		...config,
		...bizConfig
	};
};
