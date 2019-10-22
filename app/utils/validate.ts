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
  })
};

const rules = (rule: string, force: boolean) => {
  if (typeof ruleobj[rule] === "function") {
    return ruleobj[rule](force);
  } else {
    return ruleobj[rule];
  }
};

export default rules;
