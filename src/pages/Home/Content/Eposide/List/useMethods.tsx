import { useCallback, useMemo } from "react";
import { useAction } from "@/action";
import { useSavedState } from "@/hooks";

import { EposideType, CommonType } from "@/types";

const initState: CommonType.ListQuery = {
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

  const actions = useAction("eposide");

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
    const res = await actions.getEposideList(state);
    res && setSelect([]);
  }, [actions, state, setSelect]);

  const reset = useCallback(() => queryCompare(initState), [queryCompare]);

  const remove = useCallback(async (id: string) => await actions.deleteEposideItem({ id }), [
    actions,
  ]);

  const removeMany = useCallback(async () => {
    const res = await actions.deleteEposideList({ ids: select });
    res && init();
  }, [actions, select, init]);

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

  const methods = useMemo(
    () => ({ init, set: queryCompare, update, updateMany, remove, removeMany, reset }),
    [init, queryCompare, update, updateMany, remove, removeMany, reset]
  );

  return [state, methods] as [CommonType.ListQuery, typeof methods];
};
