import Model from "@/action/model";

type InitialState = {
  loadingKeys: string[];
};

class Loading extends Model<InitialState> {
  constructor() {
    super("loading", { loadingKeys: [] });
  }

  methods: { [key: string]: any } = {};
}

export default Loading;
