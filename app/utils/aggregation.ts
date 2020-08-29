export const categoryLookup = ['area', 'year', 'kind', 'tag'].map((item) => {
    return {
        $lookup: {
            from: 'categories',
            let: { value: `$${item}` },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $in: ['$_id', '$$value'],
                        },
                    },
                },
                {
                    $project: {
                        type: 1,
                        name: 1,
                    },
                },
            ],
            as: item,
        },
    };
});

export const postCategoryLookup = ['kind', 'tag'].map((item) => {
    return {
        $lookup: {
            from: 'categories',
            let: { value: `$${item}` },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $in: ['$_id', '$$value'],
                        },
                    },
                },
                {
                    $project: {
                        type: 1,
                        name: 1,
                    },
                },
            ],
            as: item,
        },
    };
});

export const authorLookup = [
    {
        $lookup: {
            from: 'users',
            localField: 'author',
            foreignField: '_id',
            as: 'authors',
        },
    },
    {
        $unwind: {
            path: '$authors',
            preserveNullAndEmptyArrays: true,
        },
    },
    {
        $addFields: {
            author: {
                id: '$authors._id',
                _id: '$authors._id',
                level: '$authors.level',
                score: '$authors.score',
                avatar: '$authors.avatar',
                background: '$authors.background',
                introduce: '$authors.introduce',
                name: '$authors.name',
            },
        },
    },
];

export const seasonLookup = (type: string) => ({
    $lookup: {
        from: `${type}s`,
        let: { value: '$seasonRelate' },
        pipeline: [
            {
                $match: {
                    $expr: {
                        $eq: ['$seasonRelate', '$$value'],
                    },
                    status: 'publish',
                    $and: [{ seasonRelate: { $ne: '' } }, { seasonRelate: { $ne: null } }],
                },
            },
            {
                $project: {
                    slug: 1,
                    season: 1,
                },
            },
        ],
        as: 'seasons',
    },
});

export const eposideLookup = [
    {
        $lookup: {
            from: 'eposides',
            as: 'listEposide',
            let: { id: '$_id' },
            pipeline: [
                {
                    $match: {
                        $expr: { $eq: ['$$id', '$target'] },
                    },
                },
                {
                    $lookup: {
                        from: 'counts',
                        localField: '_id',
                        foreignField: 'target',
                        as: 'count',
                    },
                },
                {
                    $unwind: {
                        path: '$count',
                        preserveNullAndEmptyArrays: true,
                    },
                },
                { $sort: { sort: -1, _id: -1 } },
                {
                    $project: {
                        title: 1,
                        sort: 1,
                        cover: 1,
                        count: 1,
                    },
                },
            ],
        },
    },
    {
        $addFields: {
            countEposide: {
                $size: {
                    $ifNull: ['$listEposide', []],
                },
            },
        },
    },
    {
        $addFields: {
            lastEposide: { $arrayElemAt: ['$listEposide', 0] },
        },
    },
    {
        $project: {
            listEposide: 0,
        },
    },
];

export const slugEposideLookup = [
    {
        $lookup: {
            from: 'eposides',
            let: { value: '$_id' },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $eq: ['$target', '$$value'],
                        },
                    },
                },
                {
                    $project: {
                        title: 1,
                        sort: 1,
                        cover: 1,
                    },
                },
            ],
            as: 'eposides',
        },
    },
    {
        $addFields: {
            countEposide: {
                $size: {
                    $ifNull: ['$eposides', []],
                },
            },
        },
    },
];

export const countLookup = [
    {
        $lookup: {
            from: 'counts',
            localField: '_id',
            foreignField: 'target',
            as: 'count',
        },
    },
    {
        $unwind: {
            path: '$count',
            preserveNullAndEmptyArrays: true,
        },
    },
    {
        $addFields: {
            id: '$_id',
            countPlay: {
                $add: [{ $ifNull: ['$count.play', 0] }, { $ifNull: ['$count.view', 0] }],
            },
            countComment: {
                $add: [{ $ifNull: ['$count.comment', 0] }, { $ifNull: ['$count.subComment', 0] }],
            },
            countDanmu: { $add: [{ $ifNull: ['$count.danmu', 0] }] },
            countRate: {
                $add: [{ $ifNull: ['$count.rateCount', 0] }, '$rateCount'],
            },
            countStar: {
                $divide: [
                    {
                        $trunc: {
                            $multiply: [
                                {
                                    $divide: [
                                        {
                                            $add: [
                                                {
                                                    $multiply: [
                                                        { $ifNull: ['$count.rateCount', 0] },
                                                        { $ifNull: ['$count.rateStar', 0] },
                                                    ],
                                                },
                                                { $multiply: ['$rateCount', '$rateStar'] },
                                            ],
                                        },
                                        {
                                            $cond: [
                                                {
                                                    $eq: [
                                                        {
                                                            $add: [{ $ifNull: ['$count.rateCount', 0] }, '$rateCount'],
                                                        },
                                                        0,
                                                    ],
                                                },
                                                1,
                                                {
                                                    $add: [{ $ifNull: ['$count.rateCount', 0] }, '$rateCount'],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                10,
                            ],
                        },
                    },
                    10,
                ],
            },
            countLike: { $ifNull: ['$count.like', 0] },
        },
    },
];

export const filterProject = [
    {
        $project: {
            count: 0,
            rateStar: 0,
            rateCount: 0,
            playType: 0,
            noPrefix: 0,
            linkPrefix: 0,
            content: 0,
            lastEposide: {
                count: 0,
            },
            authors: 0,
        },
    },
];

export const countSingle = [
    {
        $lookup: {
            from: 'relations',
            localField: '_id',
            foreignField: 'target',
            as: 'listLike',
        },
    },
    {
        $lookup: {
            from: 'comments',
            let: { value: '$_id' },
            pipeline: [
                {
                    $match: {
                        status: 'publish',
                        $expr: {
                            $eq: ['$target', '$$value'],
                        },
                    },
                },
            ],
            as: 'listComment',
        },
    },
    {
        $lookup: {
            from: 'eposides',
            as: 'listEposide',
            let: { id: '$_id' },
            pipeline: [
                {
                    $match: {
                        $expr: { $eq: ['$$id', '$target'] },
                    },
                },
                {
                    $lookup: {
                        from: 'counts',
                        localField: '_id',
                        foreignField: 'target',
                        as: 'count',
                    },
                },
                {
                    $unwind: {
                        path: '$count',
                        preserveNullAndEmptyArrays: true,
                    },
                },
                { $sort: { sort: -1, _id: -1 } },
                {
                    $project: {
                        title: 1,
                        sort: 1,
                        cover: 1,
                        count: 1,
                    },
                },
            ],
        },
    },
    {
        $lookup: {
            from: 'rates',
            let: { value: '$_id' },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $eq: ['$target', '$$value'],
                        },
                    },
                },
                {
                    $group: {
                        _id: null,
                        count: { $sum: 1 },
                        total: { $sum: '$rate' },
                    },
                },
                {
                    $addFields: {
                        star: {
                            $divide: ['$total', '$count'],
                        },
                    },
                },
            ],
            as: 'rates',
        },
    },
    {
        $unwind: {
            path: '$rates',
            preserveNullAndEmptyArrays: true,
        },
    },
    {
        $addFields: {
            id: '$_id',
            subComment: { $sum: { $ifNull: ['$listEposide.count.comment', 0] } },
            subPlay: { $sum: { $ifNull: ['$listEposide.count.play', 0] } },
            subView: { $sum: { $ifNull: ['$listEposide.count.view', 0] } },
            subDanmu: { $sum: { $ifNull: ['$listEposide.count.danmu', 0] } },
            countComment: {
                $size: {
                    $ifNull: ['$listComment', []],
                },
            },
            countPlay: {
                $size: {
                    $ifNull: ['$listPlay', []],
                },
            },
            countLike: {
                $size: {
                    $ifNull: ['$listLike', []],
                },
            },
        },
    },
    {
        $project: {
            subComment: 1,
            subPlay: 1,
            subView: 1,
            subDanmu: 1,
            countComment: 1,
            countLike: 1,
            rateCount: '$rates.count',
            rateStar: '$rates.star',
        },
    },
];
