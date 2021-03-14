import { useCallback, useMemo } from "react";
import { useAction } from "@/action";
import { useSavedState } from "@/hooks";

import { EposideType, CommonType } from "@/types";
import { useSelect, useListLoading } from "../Common/GlobalState";

export const useMethods = (
  initialState: CommonType.ListQuery,
  target: string,
  onModel: EposideType.OnModelType
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
      init && setState(value);
    },
    [setState, state]
  );

  const init = useCallback(async () => {
    setLoading(true);
    await actions.getEposideList({ ...state, target }).finally(() => setLoading(false));
    setSelect([]);
  }, [actions, state, setSelect, target, setLoading]);

  const create = useCallback(
    async (values: Omit<EposideType.EposideItem, "id">) => {
      await actions.createEposideItem({ ...values, target, onModel });
      init();
    },
    [actions, init, target, onModel]
  );

  const createMany = useCallback(
    async (values: EposideType.CreateListReq) => {
      await actions.createEposideList(values);
      init();
    },
    [actions]
  );

  const update = useCallback(
    async (values: EposideType.UpdateItemReq) => {
      await actions.updateEposideItem(values);
      init();
    },
    [actions]
  );

  const updateMany = useCallback(
    async (values: Partial<EposideType.UpdateListReq>) => {
      await actions.updateEposideList({ ids: select, ...values });
      init();
    },
    [actions, select, init]
  );

  const remove = useCallback(
    async (id: string) => {
      await actions.deleteEposideItem({ id });
      init();
    },
    [actions, init]
  );

  const removeMany = useCallback(async () => {
    await actions.deleteEposideList({ ids: select });
    init();
  }, [actions, select, init]);

  const reset = useCallback(() => queryCompare(initialState), [queryCompare, initialState]);

  const methods = useMemo(
    () => ({
      init,
      set: queryCompare,
      create,
      createMany,
      update,
      updateMany,
      remove,
      removeMany,
      reset,
    }),
    [init, queryCompare, create, createMany, update, updateMany, remove, removeMany, reset]
  );

  return [state, methods] as [CommonType.ListQuery, typeof methods];
};
