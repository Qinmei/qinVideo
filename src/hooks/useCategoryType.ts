import { useCallback, useMemo } from "react";
import { useAction } from "@/action";
import { useSessionCache } from "@/hooks";

import { CategoryType } from "@/types";

export const useCategoryType = (type: CategoryType.CateType) => {
  const actions = useAction("category");

  const initData = useCallback(async () => {
    const res = await actions.getCategoryType({ type });
    return res;
  }, [actions, type]);

  const [data, init, loading] = useSessionCache<CategoryType.List[]>(
    `${type}Category`,
    [],
    initData
  );

  const source = useMemo(() => data?.map(item => ({ label: item.name, value: item.id })) || [], [
    data,
  ]);

  return [source, loading] as [{ label: string; value: string }[], boolean];
};
