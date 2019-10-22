const ruleobj = {
  query: {
    name: {
      type: "string",
      required: false
    },
    page: {
      type: "number",
      required: true
    },
    size: {
      type: "number",
      max: 30,
      min: 1,
      required: true
    },
    sortBy: {
      type: "string",
      required: false
    },
    sortOrder: {
      type: "number",
      required: false
    }
  },
  id: {
    id: {
      type: "string",
      required: true
    }
  },
  ids: {
    ids: {
      type: "array",
      required: true
    }
  },
  user: (force: boolean) => ({
    name: {
      type: "string",
      required: force
    },
    password: { type: "password", required: force },
    email: { type: "email", required: force },
    level: { type: "number", required: false },
    score: { type: "number", required: false },
    avatar: { type: "string", required: false },
    background: { type: "string", required: false },
    introduce: { type: "string", required: false },
    status: { type: "string", required: false },
    money: { type: "number", required: false },
    expired: { type: "number", required: false }
  }),
  animate: (force: boolean) => ({
    title: {
      type: "string",
      required: force
    },
    slug: {
      type: "string",
      required: force
    },
    author: {
      type: "string",
      required: force
    },
    status: { type: "string", required: false },
    information: {
      introduce: { type: "string", required: false },
      staff: { type: "string", required: false },
      actor: { type: "string", required: false },
      firstPlay: { type: "string", required: false },
      isUpdate: { type: "boolean", required: false },
      updateDay: { type: "number", required: false },
      rateStar: { type: "number", required: false },
      rateCount: { type: "number", required: false },
      impression: { type: "string", required: false },
      eposideCount: { type: "number", required: false }
    },
    play: {
      kind: ["mp4", "m3u8", "php"],
      noPrefix: { type: "boolean", required: false },
      level: { type: "number", required: false },
      linkPrefix: { type: "string", required: false },
      downTitle: { type: "string", required: false },
      downLink: { type: "string", required: false }
    },
    eposide: {
      name: { type: "string", required: false },
      relative: { type: "string", required: false },
      list: { type: "array", required: false }
    },
    cover: {
      vertical: { type: "string" },
      horizontal: { type: "string" }
    },
    category: {
      area: { type: "array", required: false },
      kind: { type: "array", required: false },
      year: { type: "array", required: false },
      tag: { type: "array", required: false }
    }
  }),
  comic: (force: boolean) => ({
    title: {
      type: "string",
      required: force
    },
    slug: {
      type: "string",
      required: force
    },
    author: {
      type: "string",
      required: force
    },
    status: { type: "string", required: false },
    information: {
      introduce: { type: "string", required: false },
      staff: { type: "string", required: false },
      actor: { type: "string", required: false },
      firstPlay: { type: "string", required: false },
      isUpdate: { type: "boolean", required: false },
      updateDay: { type: "number", required: false },
      rateStar: { type: "number", required: false },
      rateCount: { type: "number", required: false },
      impression: { type: "string", required: false },
      eposideCount: { type: "number", required: false }
    },
    play: {
      kind: ["mp4", "m3u8", "php"],
      noPrefix: { type: "boolean", required: false },
      level: { type: "number", required: false },
      linkPrefix: { type: "string", required: false },
      downTitle: { type: "string", required: false },
      downLink: { type: "string", required: false }
    },
    eposide: {
      name: { type: "string", required: false },
      relative: { type: "string", required: false },
      list: { type: "array", required: false }
    },
    cover: {
      vertical: { type: "string" },
      horizontal: { type: "string" }
    },
    category: {
      area: { type: "array", required: false },
      kind: { type: "array", required: false },
      year: { type: "array", required: false },
      tag: { type: "array", required: false }
    }
  }),
  config: {
    favcion: { type: "string", default: "", required: false },
    name: { type: "string", default: "", required: false },
    slogan: { type: "string", default: "", required: false },
    information: { type: "string", default: "", required: false },
    tongji: { type: "string", default: "", required: false },
    color: { type: "string", default: "", required: false },
    qq: { type: "string", default: "", required: false },
    email: { type: "string", default: "", required: false },
    app: { type: "string", default: "", required: false },
    logo: { type: "string", default: "", required: false },
    headimg: { type: "string", default: "", required: false },
    mobleimg: { type: "string", default: "", required: false },
    loginimg: { type: "string", default: "", required: false },
    avatar: { type: "string", default: "", required: false },
    background: { type: "string", default: "", required: false },
    dplayer: { type: "string", default: "", required: false },
    newAnimate: { type: "string", default: "", required: false },
    newComic: { type: "string", default: "", required: false },
    newDiscuss: { type: "string", default: "", required: false },
    newShop: { type: "string", default: "", required: false },
    allAnimate: { type: "string", default: "", required: false },
    allComic: { type: "string", default: "", required: false },
    allPost: { type: "string", default: "", required: false },
    pcMenu: { type: "array", required: false },
    pcIndex: { type: "array", required: false },
    h5Menu: { type: "array", required: false },
    h5Index: { type: "array", required: false },
    postMenu: { type: "array", required: false },
    postTop: { type: "array", required: false },
    message: { type: "array", required: false },
    aboutus: { type: "string", default: "", required: false },
    playLimit: { type: "array", required: false },
    jiexi: { type: "array", required: false },
    emailSetting: {
      type: "object",
      required: false,
      rule: {
        type: { type: "string", default: "smtp", required: false },
        name: { type: "string", default: "", required: false },
        sender: { type: "string", default: "", required: false }
      }
    },
    smtp: {
      type: "object",
      required: false,
      rule: {
        host: { type: "string", default: "", required: false },
        port: { type: "number", default: 465, required: false },
        secure: { type: "string", default: "", required: false },
        user: { type: "string", default: "", required: false },
        pass: { type: "string", default: "", required: false }
      }
    },
    sendgrid: {
      type: "object",
      required: false,
      rule: {
        key: { type: "string", default: "", required: false }
      }
    }
  }
};

const rules = (rule: string, force: boolean) => {
  if (typeof ruleobj[rule] === "function") {
    return ruleobj[rule](force);
  } else {
    return ruleobj[rule];
  }
};

export default rules;
