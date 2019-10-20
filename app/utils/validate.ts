export default {
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
  animate: {
    title: {
      type: "string",
      required: true
    },
    slug: {
      type: "string",
      required: true
    },
    author: {
      type: "string",
      required: true
    },
    status: ["draft", "publish", "reject"],
    information: {
      introduce: { type: "string", default: "", required: false },
      staff: { type: "string", default: "", required: false },
      actor: { type: "string", default: "", required: false },
      firstPlay: { type: "string", default: "20160606", required: false },
      isUpdate: { type: "boolean", default: false, required: false },
      updateDay: { type: "number", default: 0, required: false },
      rateStar: { type: "number", default: 8, required: false },
      rateCount: { type: "number", default: 1000, required: false },
      impression: { type: "string", default: "", required: false },
      eposideCount: { type: "number", default: 0, required: false }
    },
    play: {
      kind: ["mp4", "m3u8", "php"],
      noPrefix: { type: "boolean", default: false, required: false },
      level: { type: "number", default: 0, required: false },
      linkPrefix: { type: "string", default: "", required: false },
      downTitle: { type: "string", default: "", required: false },
      downLink: { type: "string", default: "", required: false }
    },
    eposide: {
      name: { type: "string", default: "", required: false },
      relative: { type: "string", required: false },
      list: { type: "array", required: false }
    },
    cover: {
      vertical: { type: "string", default: "" },
      horizontal: { type: "string", default: "" }
    },
    category: {
      area: { type: "array", required: false },
      kind: { type: "array", required: false },
      year: { type: "array", required: false },
      tag: { type: "array", required: false }
    }
  },
  user: {
    name: {
      type: "string",
      required: true
    },
    password: { type: "password", required: true },
    email: { type: "email", required: true },
    level: { type: "number", default: 1, required: false },
    score: { type: "number", default: 0, required: false },
    avatar: { type: "string", default: "", required: false },
    background: { type: "string", default: "", required: false },
    introduce: { type: "string", default: "", required: false },
    status: ["draft", "publish", "reject"],
    money: { type: "number", default: 0, required: false },
    expired: { type: "number", default: 0, required: false }
  },
  userUpdate: {
    name: {
      type: "string",
      required: false
    },
    password: { type: "password", required: false },
    email: { type: "email", required: false },
    level: { type: "number", default: 1, required: false },
    score: { type: "number", default: 0, required: false },
    avatar: { type: "string", default: "", required: false },
    background: { type: "string", default: "", required: false },
    introduce: { type: "string", default: "", required: false },
    money: { type: "number", default: 0, required: false },
    expired: { type: "number", default: 0, required: false }
  }
};
