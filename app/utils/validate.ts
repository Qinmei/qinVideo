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
  }
};
