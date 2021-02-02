import { useCallback, useMemo } from "react";
import { useAction } from "@/action";
import { useSavedState } from "@/hooks";

import { EposideType, CommonType } from "@/types";
import { useSelect, useListLoading } from "../Common/GlobalState";

export const useMethods = (
  initialState: CommonType.ListQuery,
  target: string,
  onModel: "Animate" | "Comic"
) => {
  const [state, setState] = useSavedState(initialState, "eposide");
  const [select, setSelect] = useSelect();
  const [, setLoading] = useListLoading();

  const actions = useAction("eposide");

  const queryCompare = useCallback(
    (value: Partial<CommonType.ListQuery>) => {
      const init = Object.entries(value).some(
        item => state[item[0] as keyof CommonType.ListQuery] !== item[1]
      );
      console.log("setState", value);
      init && setState(value);
    },
    [setState, state]
  );

  const init = useCallback(async () => {
    setLoading(true);
    const res = await actions.getEposideList({ ...state, target });
    setLoading(false);
    res && setSelect([]);
  }, [actions, state, setSelect, target, setLoading]);

  const create = useCallback(
    async (values: Omit<EposideType.EposideItem, "id">) => {
      const res = await actions.createEposideItem({ ...values, target, onModel });
      res && init();
      return !!res;
    },
    [actions, init, target, onModel]
  );

  const update = useCallback(
    async (values: EposideType.UpdateItemReq) => await actions.updateEposideItem({ ...values }),
    [actions]
  );

  const updateMany = useCallback(
    async (values: Partial<EposideType.UpdateListReq>) => {
      const res = await actions.updateEposideList({ ids: select, ...values });
      res && init();
      return !!res;
    },
    [actions, select, init]
  );

  const remove = useCallback(
    async (id: string) => {
      const res = await actions.deleteEposideItem({ id });
      res && init();
    },
    [actions, init]
  );

  const removeMany = useCallback(async () => {
    const res = await actions.deleteEposideList({ ids: select });
    res && init();
  }, [actions, select, init]);

  const reset = useCallback(() => queryCompare(initialState), [queryCompare, initialState]);

  const methods = useMemo(
    () => ({ init, set: queryCompare, create, update, updateMany, remove, removeMany, reset }),
    [init, queryCompare, create, update, updateMany, remove, removeMany, reset]
  );

  return [state, methods] as [CommonType.ListQuery, typeof methods];
};
