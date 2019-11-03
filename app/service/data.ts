import { Service } from 'egg';

class DataService extends Service {
	async query({ target, kind = 'search', startTime = '2018-06-24', endTime = '2019-08-08' }) {
		if (kind === 'normal') {
			const dataQuery: any = {
				createdAt: {
					$gte: new Date(startTime),
					$lte: new Date(endTime)
				}
			};

			target && (dataQuery.target = { $regex: target, $options: '$i' });

			const data = await this.ctx.model.Data.aggregate([
				{
					$match: dataQuery
				},
				{
					$project: {
						day: { $substr: [{ $add: ['$createdAt', 28800000] }, 0, 10] },
						target: 1,
						type: 1
					}
				},
				{
					$group: {
						_id: {
							date: '$day',
							type: '$type'
						},
						count: { $sum: 1 }
					}
				},
				{
					$group: {
						_id: '$_id.date',
						data: {
							$push: {
								type: '$_id.type',
								count: '$count'
							}
						}
					}
				},
				{
					$sort: { _id: 1 }
				}
			]);

			return data;
		} else if (kind === 'search') {
			const data = await this.ctx.model.Data.aggregate([
				{
					$match: {
						type: 'search',
						createdAt: {
							$gte: new Date(startTime),
							$lte: new Date(endTime)
						}
					}
				},
				{
					$group: {
						_id: '$target',
						count: { $sum: 1 }
					}
				}
			]);

			return data;
		} else if (kind === 'today') {
			const data = await this.ctx.model.Data.aggregate([
				{
					$match: {
						createdAt: {
							$gte: new Date(startTime),
							$lte: new Date(endTime)
						}
					}
				},
				{
					$project: {
						hour: { $substr: [{ $add: ['$createdAt', 28800000] }, 0, 13] },
						type: 1
					}
				},
				{
					$group: {
						_id: {
							date: '$hour',
							type: '$type'
						},
						count: { $sum: 1 }
					}
				},
				{
					$group: {
						_id: '$_id.date',
						data: {
							$push: {
								type: '$_id.type',
								count: '$count'
							}
						}
					}
				},
				{
					$sort: { _id: 1 }
				}
			]);

			return data;
		} else if (kind === 'activeVideo') {
			const data = await this.ctx.model.Data.aggregate([
				{
					$match: {
						createdAt: {
							$gte: new Date(startTime),
							$lte: new Date(endTime)
						},
						target: {
							$ne: null
						}
					}
				},
				{
					$group: {
						_id: '$target',
						count: { $sum: 1 }
					}
				},
				{
					$sort: { count: -1 }
				},
				{ $limit: 10 }
			]);

			return data;
		} else if (kind === 'allData') {
			const animateAll = await this.ctx.model.Animate.countDocuments();
			const animateDraft = await this.ctx.model.Animate.countDocuments({
				status: 'draft'
			});

			const postAll = await this.ctx.model.Post.countDocuments();
			const postDraft = await this.ctx.model.Post.countDocuments({ status: 'draft' });

			const commentAll = await this.ctx.model.Comment.countDocuments();
			const commentDraft = await this.ctx.model.Comment.countDocuments({
				status: 'draft'
			});

			const comicAll = await this.ctx.model.Comic.countDocuments();
			const comicDraft = await this.ctx.model.Comic.countDocuments({ status: 'draft' });

			const data = {
				animateAll,
				animateDraft,
				postAll,
				postDraft,
				commentAll,
				commentDraft,
				comicAll,
				comicDraft
			};

			return data;
		}
	}

	async create(data: any) {
		const result = await this.ctx.model.Data.create(data);
		return result;
	}

	async destroy(start: string, end: string) {
		const result = await this.ctx.model.Data.deleteMany({ $gte: start, $lte: end });
		return result;
	}
}

export default DataService;
