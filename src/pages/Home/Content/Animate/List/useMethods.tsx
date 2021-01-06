import { useCallback, useMemo } from "react";
import { useAction } from "@/action";
import { useSavedState } from "@/hooks";

import { AnimateType, GlobalType } from "@/types";

const initState: GlobalType.ListQuery = {
  page: 1,
  size: 10,
  title: undefined,
  sortBy: undefined,
  sortOrder: undefined,
  area: undefined,
  kind: undefined,
  year: undefined,
  tag: undefined,
  isUpdate: undefined,
  updateDay: undefined,
  status: undefined,
};

export const useMethods = (select: string[], setSelect: (values: string[]) => void) => {
  const [state, setState] = useSavedState(initState);

  const actions = useAction("animate");

  const queryCompare = useCallback(
    (value: Partial<GlobalType.ListQuery>) => {
      const init = Object.entries(value).some(
        item => state[item[0] as keyof GlobalType.ListQuery] !== item[1]
      );
      init && setState(value);
    },
    [setState, state]
  );

  const init = useCallback(async () => {
    const res = await actions.getAnimateList(state);
    res && setSelect([]);
  }, [actions, state, setSelect]);

  const reset = useCallback(() => queryCompare(initState), [queryCompare]);

  const remove = useCallback(async (id: string) => await actions.deleteAnimateItem({ id }), [
    actions,
  ]);

  const removeMany = useCallback(async () => {
    const res = await actions.deleteAnimateList({ ids: select });
    res && init();
  }, [actions, select, init]);

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

  const methods = useMemo(
    () => ({ init, set: queryCompare, update, updateMany, remove, removeMany, reset }),
    [init, queryCompare, update, updateMany, remove, removeMany, reset]
  );

  return [state, methods] as [GlobalType.ListQuery, typeof methods];
};
