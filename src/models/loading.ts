import { Model } from "@/action/model";

type InitialState = {
  loadingKeys: string[];
};

export class Loading extends Model<InitialState> {
  constructor() {
    super("loading", { loadingKeys: [] });
  }

  methods = {};
}
