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
	let arr: Array<any> = [];
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
				value: item.split('$')[1]
			}
		]
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
		return `0000${num}`;
	} else if (num < 100) {
		return `000${num}`;
	} else if (num < 1000) {
		return `00${num}`;
	} else if (num < 10000) {
		return `0${num}`;
	}
	return num;
};

const agent = (url: string) => {
	return new Promise(function(resolve, reject) {
		superagent.get(url).end((err, sres) => {
			if (err) {
				reject();
			}
			resolve(sres);
		});
	});
};

class CMSService extends Service {
	async exist(source: String, id: String) {
		const result = await this.ctx.model.Cloud.findOne({ source, sourceId: id });
		return result;
	}

	async create(data: any) {
		const result = await this.ctx.model.Cloud.create(data);
		return result;
	}

	async update(source: String, id: String, data: any) {
		const result = await this.ctx.model.Cloud.updateOne({ source, sourceId: id }, { $set: data });
		return result;
	}

	async list({ source, hour }) {
		const sourceList = await this.service.cloud.settingInfo();
		const select = sourceList.source.filter((item: any) => item.source === source)[0];

		const { api, cat } = select;

		const list: any = await agent(`${api}?t=${cat}`);
		let $ = cheerio.load(list.text);
		const end = $('list').attr('pagecount');

		const result = {
			total: 0,
			success: 0,
			fail: 0,
			time: new Date()
		};

		for (let index = 1; index < end; index++) {
			const videoList: any = await agent(`${api}?ac=videolist&t=${cat}&pg=${index}&h=${hour}`);
			$ = cheerio.load(videoList.text);

			const total = await this.ctx.model.Cloud.countDocuments();
			$('video').each(async (num, ele) => {
				const saveData = {
					title: getXmlData(
						$(ele)
							.find('name')
							.html()
					),
					slug: `${fixZero(total + num)}`,
					status: 'draft',
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
						)
					],
					kind: '',
					year: [
						getXmlData(
							$(ele)
								.find('year')
								.html()
						)
					],
					tag: [],
					source,
					id: getXmlData(
						$(ele)
							.find('id')
							.html()
					)
				};

				const itemresult = await this.exist(source, saveData.id);

				result.total++;

				try {
					if (itemresult) {
						delete saveData.slug;
						await this.update(source, saveData.id, saveData);
					} else {
						await this.create(saveData);
					}
					result.success++;
				} catch (error) {
					result.fail++;
				}
			});

			await this.ctx.helper.sleep(3000);

			await this.ctx.service.cloud.settingCreate({ process: JSON.stringify(result) });
		}

		return true;
	}
}

export default CMSService;
