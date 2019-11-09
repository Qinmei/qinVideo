export const categoryLookup = ['area', 'year', 'kind', 'tag'].map((item) => {
	return {
		$lookup: {
			from: 'categories',
			localField: item,
			foreignField: '_id',
			as: item
		}
	};
});

export const authorLookup = {
	$lookup: {
		from: 'users',
		let: { value: '$author' },
		pipeline: [
			{
				$match: {
					$expr: {
						$eq: ['$_id', '$$value']
					}
				}
			},
			{
				$project: {
					_id: 0,
					name: 1,
					level: 1,
					score: 1,
					avatar: 1,
					background: 1,
					introduce: 1
				}
			}
		],
		as: 'author'
	}
};

export const seasonLookup = (type: string) => ({
	$lookup: {
		from: `${type}s`,
		let: { value: '$seasonRelate' },
		pipeline: [
			{
				$match: {
					$expr: {
						$eq: ['$seasonRelate', '$$value']
					},
					status: 'publish'
				}
			},
			{
				$project: {
					slug: 1,
					season: 1
				}
			}
		],
		as: 'seasons'
	}
});

export const listAll = {
	countPlay: {
		$lookup: {
			from: 'histories',
			localField: '_id',
			foreignField: 'target',
			as: 'listPlay'
		}
	},
	countLike: {
		$lookup: {
			from: 'relations',
			localField: '_id',
			foreignField: 'target',
			as: 'listLike'
		}
	},
	countDanmu: {
		$lookup: {
			from: 'danmus',
			localField: '_id',
			foreignField: 'target',
			as: 'listDanmu'
		}
	},
	countComment: {
		$lookup: {
			from: 'comments',
			localField: '_id',
			foreignField: 'target',
			as: 'listComment'
		}
	},
	countEposide: {
		$lookup: {
			from: 'eposides',
			localField: '_id',
			foreignField: 'target',
			as: 'listEposide'
		}
	}
};

export const countAll = {
	$addFields: {
		id: '$_id',
		countComment: {
			$size: {
				$ifNull: ['$listComment', []]
			}
		},
		countDanmu: {
			$size: {
				$ifNull: ['$listDanmu', []]
			}
		},
		countPlay: {
			$size: {
				$ifNull: ['$listPlay', []]
			}
		},
		countLike: {
			$size: {
				$ifNull: ['$listLike', []]
			}
		},
		countEposide: {
			$size: {
				$ifNull: ['$listEposide', []]
			}
		}
	}
};

export const rateLookup = [
	{
		$lookup: {
			from: 'rates',
			let: { value: '$_id' },
			pipeline: [
				{
					$match: {
						$expr: {
							$eq: ['$target', '$$value']
						}
					}
				},
				{
					$group: {
						_id: null,
						count: { $sum: 1 },
						total: { $sum: '$rate' }
					}
				},
				{
					$addFields: {
						star: {
							$divide: ['$total', '$count']
						}
					}
				}
			],
			as: 'rates'
		}
	},
	{
		$unwind: {
			path: '$rates',
			preserveNullAndEmptyArrays: true
		}
	},
	{
		$addFields: {
			countRate: {
				$add: [{ $ifNull: ['$rates.count', 0] }, '$rateCount']
			},
			countStar: {
				$divide: [
					{
						$trunc: {
							$multiply: [
								{
									$divide: [
										{
											$add: [{ $ifNull: ['$rates.total', 0] }, { $multiply: ['$rateCount', '$rateStar'] }]
										},
										{
											$ifNull: [
												{
													$add: ['$rates.count', '$rateCount']
												},
												1
											]
										}
									]
								},
								10
							]
						}
					},
					10
				]
			}
		}
	}
];

export const selectCount = (type: string) => {
	let select: Array<any> = [];
	let rest: Array<any> = [];
	const countArr = ['countPlay', 'countLike', 'countComment', 'countDanmu', 'countEposide'];
	if (countArr.includes(type)) {
		const kind = type.slice(5);
		const sortField = {
			$addFields: {
				id: '$_id',
				[`count${kind}`]: {
					$size: {
						$ifNull: [`$list${kind}`, []]
					}
				}
			}
		};
		select = [listAll[type], sortField];
		rest = countArr.filter((item) => item !== type).map((item) => listAll[item]);
		rest.push(...rateLookup);
	} else if (type === 'countStar' || type === 'countRate') {
		select = rateLookup;
		rest = countArr.map((item) => listAll[item]);
	} else {
		rest = countArr.map((item) => listAll[item]);
		rest.push(...rateLookup);
	}

	return { select, rest };
};
