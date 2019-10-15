module.exports = {
  baseString: {
    type: "string",
    required: true
  },
  userQuery: {
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
      required: true
    },
    sort: {
      type: "string",
      required: false
    }
  },
  userCreate: {
    host: {
      type: "string",
      required: true
    },
    level: {
      required: false,
      type: "number",
      default: 1
    },
    expired: {
      required: false,
      type: "number",
      default: 0
    }
  },
  userUpdate: {
    host: {
      type: "string",
      required: false
    },
    level: {
      required: false,
      type: "number",
      default: 1
    },
    expired: {
      required: false,
      type: "number",
      default: 0
    }
  },
  animateQuery: {
    title: {
      type: "string",
      required: false
    },
    page: {
      type: "number",
      required: true
    },
    size: {
      type: "number",
      required: true
    },
    sort: {
      type: "string",
      required: false
    },
    status: {
      type: "string",
      required: false
    },
    source: {
      type: "string",
      required: false
    },
    isUpdate: {
      type: "string",
      required: false
    }
  },
  messageCreate: {
    title: {
      type: "string",
      required: true
    },
    content: {
      required: false,
      type: "string"
    },
    introduce: {
      required: false,
      type: "string"
    }
  }
};
