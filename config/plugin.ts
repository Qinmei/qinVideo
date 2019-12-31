import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
    // static: true,
    validate: {
        enable: true,
        package: 'egg-validate',
    },
    mongoose: {
        enable: true,
        package: 'egg-mongoose',
    },
    redis: {
        enable: true,
        package: 'egg-redis',
    },
};

export default plugin;
