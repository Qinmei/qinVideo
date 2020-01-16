import { Service } from 'egg';
import * as superagent from 'superagent';
import * as cheerio from 'cheerio';

const getXmlData = (value = '') => {
    let newvalue = value;
    if (/\<\!\-\-\[CDATA\[/.test(value)) {
        newvalue = newvalue.replace(/\<\!\-\-\[CDATA\[/, '');
    }
    if (/\]\]\-\-\>/.test(value)) {
        newvalue = newvalue.replace(/\]\]\-\-\>/, '');
    }
    return newvalue;
};

const getM3u8Data = (value = '') => {
    let arr: any[] = [];
    if (/\#/.test(value)) {
        arr = value.split('#');
    } else {
        arr.push(value);
    }
    return arr.map((item: string, index: number) => ({
        title: item.split('$')[0] || index,
        link: [
            {
                name: 'm3u8',
                value: item.split('$')[1],
            },
        ],
    }));
};

const getM3u8Area = (value = '') => {
    switch (value) {
        case '日语':
            return '日本';
        case '国语':
            return '大陆';
        case '英语':
            return '美国';
        default:
            return '未知';
    }
};

const fixZero = (num) => {
    if (num < 10) {
        return `00000${num}`;
    } else if (num < 100) {
        return `0000${num}`;
    } else if (num < 1000) {
        return `000${num}`;
    } else if (num < 10000) {
        return `00${num}`;
    } else if (num < 100000) {
        return `0${num}`;
    }
    return num;
};

const agent = (url: string) => {
    return new Promise((resolve, reject) => {
        superagent.get(url).end((err, sres) => {
            if (err) {
                reject();
            }
            resolve(sres);
        });
    });
};

class CMSService extends Service {
    async exist(source: string, id: string) {
        const result = await this.ctx.model.Cloud.findOne({ source, sourceId: id });
        return result;
    }

    async create(data: any) {
        const result = await this.ctx.model.Cloud.create(data);
        return result;
    }

    async update(source: string, id: string, data: any, origin: any) {
        const eposide = data.eposide;
        const originEposide = origin.eposide;

        eposide.map((item: any) => {
            originEposide.some((ele: any) => {
                if (item.title === ele.title) {
                    item._id = ele._id;
                    return true;
                }
            });
        });

        const result = await this.ctx.model.Cloud.updateOne({ source, sourceId: id }, { $set: data });
        return result;
    }

    async maccms(info, hour) {
        const { api, cat, type } = info;

        const list: any = await agent(`${api}?t=${cat}`);
        let $ = cheerio.load(list.text);
        const end = $('list').attr('pagecount');

        const result = await this.ctx.service.record.simpleCreate(info._id, 'import', info.type);

        for (let index = 1; index < end; index++) {
            const videoList: any = await agent(`${api}?ac=videolist&t=${cat}&pg=${index}&h=${hour}`);
            $ = cheerio.load(videoList.text);

            let start = 1;

            const last = await this.ctx.model.Cloud.find()
                .sort({ slug: -1 })
                .limit(1);
            if (last.length > 0) {
                start = Number(last[0].slug.slice(-6));
            }

            $('video').each(async (num, ele) => {
                const saveData = {
                    title: getXmlData(
                        $(ele)
                            .find('name')
                            .html()
                    ),
                    slug: info.slugPrefix + `${fixZero(start + num)}`,
                    status: 'draft',
                    type,
                    introduce: getXmlData(
                        $(ele)
                            .find('des')
                            .html()
                    ),
                    playType: 'm3u8',
                    level: 0,
                    noPrefix: true,
                    coverVertical: getXmlData(
                        $(ele)
                            .find('pic')
                            .html()
                    ),
                    coverHorizontal: getXmlData(
                        $(ele)
                            .find('pic')
                            .html()
                    ),
                    eposide: getM3u8Data(
                        getXmlData(
                            $(ele)
                                .find('dl dd')
                                .html()
                        )
                    ),
                    area: [
                        getM3u8Area(
                            $(ele)
                                .find('lang')
                                .text()
                        ),
                    ],
                    kind: '',
                    year: [
                        getXmlData(
                            $(ele)
                                .find('year')
                                .html()
                        ),
                    ],
                    tag: [],
                    source: info.source,
                    sourceId: getXmlData(
                        $(ele)
                            .find('id')
                            .html()
                    ),
                };

                const itemresult = await this.exist(info.source, saveData.sourceId);

                result.total++;

                try {
                    if (itemresult) {
                        delete saveData.slug;
                        await this.update(info.source, saveData.sourceId, saveData, itemresult);
                    } else {
                        await this.create(saveData);
                    }
                    result.success++;
                } catch (error) {
                    result.fail++;
                    result.content.push(saveData.title);
                }
            });

            await this.ctx.service.record.simpleUpdate(result);
            await this.ctx.helper.sleep(10000);
        }
    }
}

export default CMSService;
