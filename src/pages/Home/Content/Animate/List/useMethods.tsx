import { useCallback, useMemo } from "react";
import { useAction } from "@/action";
import { useSavedState } from "@/hooks";

import { AnimateType, CommonType } from "@/types";

import { useListLoading, useSelect } from "../Common/GlobalState";

export const useMethods = (initialState: CommonType.ListQuery) => {
  const [state, setState] = useSavedState(initialState, "animate");

  const [, setLoading] = useListLoading();
  const [select, setSelect] = useSelect();

  const actions = useAction("animate");

  const queryCompare = useCallback(
    (value: Partial<CommonType.ListQuery>) => {
      const init = Object.entries(value).some(
        item => state[item[0] as keyof CommonType.ListQuery] !== item[1]
      );
      init && setState(value);
    },
    [setState, state]
  );

  const init = useCallback(async () => {
    setLoading(true);
    const res = await actions.getAnimateList(state);
    setLoading(false);
    res && setSelect([]);
  }, [actions, state, setSelect, setLoading]);

  const update = useCallback(
    async (values: AnimateType.UpdateItemReq) => await actions.updateAnimateItem({ ...values }),
    [actions]
  );

  const updateMany = useCallback(
    async (values: Partial<AnimateType.UpdateItemReq>) => {
      const res = await actions.updateAnimateList({ ids: select, ...values });
      res && init();
      return !!res;
    },
    [actions, select, init]
  );

  const remove = useCallback(async (id: string) => await actions.deleteAnimateItem({ id }), [
    actions,
  ]);

  const removeMany = useCallback(async () => {
    const res = await actions.deleteAnimateList({ ids: select });
    res && init();
  }, [actions, select, init]);

  const reset = useCallback(() => queryCompare(initialState), [queryCompare, initialState]);

  const methods = useMemo(
    () => ({ init, set: queryCompare, update, updateMany, remove, removeMany, reset }),
    [init, queryCompare, update, updateMany, remove, removeMany, reset]
  );

  return [state, methods] as [CommonType.ListQuery, typeof methods];
};
