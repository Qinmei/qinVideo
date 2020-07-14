import { Service } from 'egg';
import { countSingle } from '../utils/aggregation';

class CountService extends Service {
    async init(data: any, type: string) {
        const { state } = this.ctx;
        const author = state.user.id;

        if (typeof data === 'number') return;

        this.create(author, data._id, data.onModel, type, data.rate);
    }

    async create(author: string, target: string, onModel: string, type: string, count: number = 1) {
        const data = {
            author,
            target,
            onModel,
            type,
            count,
        };

        let dataTemp = (await this.ctx.service.utils.cacheGet('countTemp')) || [];

        dataTemp.push(data);

        if (dataTemp.length > this.ctx.app.config.caculateCount) {
            await this.calculate(dataTemp);
            dataTemp = [];
        }

        await this.ctx.service.utils.cacheSet('countTemp', dataTemp, 3600 * 24 * 7);
    }

    async calculate(data: any[]) {
        const temp = {};
        data.forEach((item) => {
            const dataString = item.author + item.target + item.onModel + item.type;
            if (temp[dataString]) {
                temp[dataString].count += item.count;
            } else {
                temp[dataString] = {
                    ...item,
                };
            }
        });

        for (const key in temp) {
            const item = temp[key];
            await this.update(item.target, item.onModel, item.count, item.type);
        }
    }

    async update(target: string, onModel: string, count: number, type: string) {
        const { model } = this.ctx;

        const data = { target, onModel };
        const update:any = { $inc: { [type]: count } };
        const options = { upsert: true };
        await model.Count.update(data, update, options);
    }

    async syncAnimate() {
        const { model } = this.ctx;

        const animates = await model.Animate.find({});
        for await (const item of animates) {
            const dataArr = await model.Animate.aggregate([
                {
                    $match: {
                        _id: item._id,
                    },
                },
                ...countSingle,
            ]);

            const {
                rateCount = 0,
                rateStar = 0,
                subComment = 0,
                subPlay = 0,
                subView = 0,
                subDanmu = 0,
                countComment = 0,
                countLike = 0,
            } = dataArr?.[0] || {};

            const data = { target: item._id, onModel: 'Animate' };
            const update = {
                $set: {
                    comment: countComment,
                    subComment,
                    like: countLike,
                    rateStar,
                    rateCount,
                    play: subPlay,
                    view: subView,
                    danmu: subDanmu,
                },
            };
            const options = { upsert: true };
            await model.Count.update(data, update, options);
            console.log(item.slug);
        }

        console.log('done');
    }

    async syncComic() {
        const { model } = this.ctx;

        const comics = await model.Comic.find({});
        for await (const item of comics) {
            const dataArr = await model.Comic.aggregate([
                {
                    $match: {
                        _id: item._id,
                    },
                },
                ...countSingle,
            ]);

            const {
                rateCount = 0,
                rateStar = 0,
                subComment = 0,
                subPlay = 0,
                subView = 0,
                countComment = 0,
                countLike = 0,
            } = dataArr?.[0] || {};

            const data = { target: item._id, onModel: 'Comic' };
            const update = {
                $set: {
                    comment: countComment,
                    subComment,
                    like: countLike,
                    rateStar,
                    rateCount,
                    play: subPlay,
                    view: subView,
                },
            };
            const options = { upsert: true };
            await model.Count.update(data, update, options);
            console.log(item.slug);
        }

        console.log('done');
    }

    async syncPost() {
        const { model } = this.ctx;

        const posts = await model.Post.find({});
        for await (const item of posts) {
            const result = await model.Post.findById(item._id)
                .populate('countPlay')
                .populate('countComment')
                .populate('countLike');

            const { countPlay = 0, countComment = 0, countLike = 0 } = result || {};

            const data = { target: item._id, onModel: 'Post' };
            const update = { $set: { comment: countComment, play: countPlay, like: countLike } };
            const options = { upsert: true };
            await model.Count.update(data, update, options);
            console.log(item.slug);
        }

        console.log('done');
    }

    async syncEposide() {
        const { model } = this.ctx;

        const eposides = await model.Eposide.find({});
        for await (const item of eposides) {
            const result = await model.Eposide.findById(item._id)
                .populate('countPlay')
                .populate('countComment')
                .populate('countDanmu');

            const { countPlay = 0, countComment = 0, countDanmu = 0 } = result || {};

            const data = { target: item._id, onModel: 'Eposide' };
            const update = { $set: { comment: countComment, play: countPlay, danmu: countDanmu } };
            const options = { upsert: true };
            await model.Count.update(data, update, options);
            console.log(item._id);
        }
        console.log('done');
    }
}

export default CountService;
