const ruleobj = {
	query: {
		page: {
			type: 'number',
			required: true
		},
		size: {
			type: 'number',
			max: 30,
			min: 1,
			required: true
		},
		sortBy: {
			type: 'string',
			default: 'updatedAt',
			required: false
		},
		sortOrder: {
			type: 'number',
			default: -1,
			required: false
		},
		name: {
			type: 'string',
			required: false
		},
		email: {
			type: 'string',
			required: false
		},
		type: {
			type: 'string',
			required: false
		},
		belong: {
			type: 'string',
			required: false
		},
		status: {
			type: 'string',
			required: false
		},
		update: {
			type: 'boolean',
			required: false
		},
		akind: {
			type: 'string',
			required: false
		},
		aarea: {
			type: 'string',
			required: false
		},
		ayear: {
			type: 'string',
			required: false
		},
		atag: {
			type: 'string',
			required: false
		},
		ckind: {
			type: 'string',
			required: false
		},
		carea: {
			type: 'string',
			required: false
		},
		cyear: {
			type: 'string',
			required: false
		},
		ctag: {
			type: 'string',
			required: false
		},
		pkind: {
			type: 'string',
			required: false
		},
		ptag: {
			type: 'string',
			required: false
		}
	},
	id: {
		id: {
			type: 'string',
			required: true
		}
	},
	ids: {
		ids: {
			type: 'array',
			required: true
		}
	},
	user: (force: boolean) => ({
		name: {
			type: 'string',
			required: force
		},
		password: { type: 'password', required: force },
		email: { type: 'email', required: force },
		level: { type: 'number', required: false },
		score: { type: 'number', required: false },
		avatar: { type: 'string', required: false },
		background: { type: 'string', required: false },
		introduce: { type: 'string', required: false },
		status: { type: 'string', required: force },
		money: { type: 'number', required: false },
		expired: { type: 'number', required: false }
	}),
	animate: (force: boolean) => ({
		title: {
			type: 'string',
			required: force
		},
		slug: {
			type: 'string',
			required: force
		},
		author: {
			type: 'string',
			required: force
		},
		status: { type: 'string', required: force },
		information: {
			introduce: { type: 'string', required: false },
			staff: { type: 'string', required: false },
			actor: { type: 'string', required: false },
			firstPlay: { type: 'string', required: false },
			isUpdate: { type: 'boolean', required: false },
			updateDay: { type: 'number', required: false },
			rateStar: { type: 'number', required: false },
			rateCount: { type: 'number', required: false },
			impression: { type: 'string', required: false },
			eposideCount: { type: 'number', required: false }
		},
		play: {
			kind: ['mp4', 'm3u8', 'php'],
			noPrefix: { type: 'boolean', required: false },
			level: { type: 'number', required: false },
			linkPrefix: { type: 'string', required: false },
			downTitle: { type: 'string', required: false },
			downLink: { type: 'string', required: false }
		},
		eposide: {
			name: { type: 'string', required: false },
			relative: { type: 'string', required: false },
			list: { type: 'array', required: false }
		},
		cover: {
			vertical: { type: 'string' },
			horizontal: { type: 'string' }
		},
		category: {
			area: { type: 'array', required: false },
			kind: { type: 'array', required: false },
			year: { type: 'array', required: false },
			tag: { type: 'array', required: false }
		}
	}),
	comic: (force: boolean) => ({
		title: {
			type: 'string',
			required: force
		},
		slug: {
			type: 'string',
			required: force
		},
		author: {
			type: 'string',
			required: force
		},
		status: { type: 'string', required: force },
		information: {
			introduce: { type: 'string', required: false },
			staff: { type: 'string', required: false },
			actor: { type: 'string', required: false },
			firstPlay: { type: 'string', required: false },
			isUpdate: { type: 'boolean', required: false },
			updateDay: { type: 'number', required: false },
			rateStar: { type: 'number', required: false },
			rateCount: { type: 'number', required: false },
			impression: { type: 'string', required: false },
			eposideCount: { type: 'number', required: false }
		},
		play: {
			kind: ['mp4', 'm3u8', 'php'],
			noPrefix: { type: 'boolean', required: false },
			level: { type: 'number', required: false },
			linkPrefix: { type: 'string', required: false },
			downTitle: { type: 'string', required: false },
			downLink: { type: 'string', required: false }
		},
		eposide: {
			name: { type: 'string', required: false },
			relative: { type: 'string', required: false },
			list: { type: 'array', required: false }
		},
		cover: {
			vertical: { type: 'string' },
			horizontal: { type: 'string' }
		},
		category: {
			area: { type: 'array', required: false },
			kind: { type: 'array', required: false },
			year: { type: 'array', required: false },
			tag: { type: 'array', required: false }
		}
	}),
	config: {
		favcion: { type: 'string', default: '', required: false },
		name: { type: 'string', default: '', required: false },
		slogan: { type: 'string', default: '', required: false },
		information: { type: 'string', default: '', required: false },
		tongji: { type: 'string', default: '', required: false },
		color: { type: 'string', default: '', required: false },
		qq: { type: 'string', default: '', required: false },
		email: { type: 'string', default: '', required: false },
		app: { type: 'string', default: '', required: false },
		logo: { type: 'string', default: '', required: false },
		headimg: { type: 'string', default: '', required: false },
		mobleimg: { type: 'string', default: '', required: false },
		loginimg: { type: 'string', default: '', required: false },
		avatar: { type: 'string', default: '', required: false },
		background: { type: 'string', default: '', required: false },
		dplayer: { type: 'string', default: '', required: false },
		newAnimate: { type: 'string', default: '', required: false },
		newComic: { type: 'string', default: '', required: false },
		newDiscuss: { type: 'string', default: '', required: false },
		newShop: { type: 'string', default: '', required: false },
		allAnimate: { type: 'string', default: '', required: false },
		allComic: { type: 'string', default: '', required: false },
		allPost: { type: 'string', default: '', required: false },
		pcMenu: { type: 'array', required: false },
		pcIndex: { type: 'array', required: false },
		h5Menu: { type: 'array', required: false },
		h5Index: { type: 'array', required: false },
		postMenu: { type: 'array', required: false },
		postTop: { type: 'array', required: false },
		message: { type: 'array', required: false },
		aboutus: { type: 'string', default: '', required: false },
		playLimit: { type: 'array', required: false },
		jiexi: { type: 'array', required: false },
		emailSetting: {
			type: 'object',
			required: false,
			rule: {
				type: { type: 'string', default: 'smtp', required: false },
				name: { type: 'string', default: '', required: false },
				sender: { type: 'string', default: '', required: false }
			}
		},
		smtp: {
			type: 'object',
			required: false,
			rule: {
				host: { type: 'string', default: '', required: false },
				port: { type: 'number', default: 465, required: false },
				secure: { type: 'string', default: '', required: false },
				user: { type: 'string', default: '', required: false },
				pass: { type: 'string', default: '', required: false }
			}
		},
		sendgrid: {
			type: 'object',
			required: false,
			rule: {
				key: { type: 'string', default: '', required: false }
			}
		}
	},
	danmu: (force: boolean) => ({
		player: {
			type: 'string',
			required: force
		},
		author: { type: 'string', required: false },
		time: { type: 'number', required: false },
		text: { type: 'string', required: force },
		color: { type: 'number', required: false },
		type: { type: 'number', required: false },
		ip: { type: 'string', required: false },
		referer: { type: 'string', required: false }
	}),
	shop: (force: boolean) => ({
		title: {
			type: 'string',
			required: force
		},
		status: {
			type: 'string',
			require: force
		},
		price: { type: 'number', required: force },
		upLevel: { type: 'number', required: false },
		addScore: { type: 'number', required: false },
		addExpired: { type: 'number', required: false },
		introduce: { type: 'string', required: false },
		cover: { type: 'string', required: false }
	}),
	report: (force: boolean) => ({
		author: {
			type: 'string',
			require: force
		},
		content: { type: 'string', required: force },
		image: { type: 'array', required: false },
		target: {
			type: 'string',
			require: force
		},
		reply: 'string',
		type: {
			type: 'string',
			require: force
		},
		status: {
			type: 'string',
			require: force
		}
	}),
	category: (force: boolean) => ({
		name: {
			type: 'string',
			required: force
		},
		type: {
			type: 'string',
			required: force
		},
		cover: {
			type: 'string',
			required: false
		},
		introduce: {
			type: 'string',
			required: false
		},
		parent: {
			type: 'string',
			required: false
		}
	})
};

const rules = (rule: string, force: boolean) => {
	if (typeof ruleobj[rule] === 'function') {
		return ruleobj[rule](force);
	} else {
		return ruleobj[rule];
	}
};

export default rules;
