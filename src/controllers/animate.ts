import { Controller } from "./base";
import { AnimateType, CommonType } from "@/types";
import { actions } from "@/models";
import { equals } from "ramda";

interface StateType {
  loading: boolean;
  select: string[];
  query: CommonType.ListQuery;
}

export class AnimateController extends Controller<StateType> {
  setQuery = (value: Partial<CommonType.ListQuery>) => {
    const { state } = this;

    const difference = Object.entries(value).some(item =>
      equals(state.query[item[0] as keyof CommonType.ListQuery], item[1])
    );

    if (!difference) return;
    state.query = {
      ...state.query,
      ...value,
    };
  };

  init = async () => {
    const { state } = this;
    state.loading = true;
    await actions.animate.getAnimateList(state.query).finally(() => (state.loading = false));
    state.select = [];
  };

  update = async (values: AnimateType.UpdateItemReq) => {
    await actions.animate.updateAnimateItem({ ...values });
    this.init();
  };

  updateMany = async (values: Partial<AnimateType.UpdateItemReq>) => {
    const { select } = this.state;
    await actions.animate.updateAnimateList({ ids: select, ...values });
    this.init();
  };

  remove = async (id: string) => {
    await actions.animate.deleteAnimateItem({ id });
    this.init();
  };

  removeMany = async () => {
    const { select } = this.state;
    await actions.animate.deleteAnimateList({ ids: select });
    this.init();
  };

  reset = () => this.setQuery(this.initialState.query);
}
