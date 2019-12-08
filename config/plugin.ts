import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
	// static: true,
	validate: {
		enable: true,
		package: 'egg-validate'
	},
	mongoose: {
		enable: true,
		package: 'egg-mongoose'
	}
};

export default plugin;
