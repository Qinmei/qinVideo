import { useMemo } from "react";
import { useAsync, useLocalStorage } from "react-use";
import { useAction } from "@/action";

import { CategoryType } from "@/types";

export const useCategoryType = (type: CategoryType.CateType) => {
  const [data, setData] = useLocalStorage<CategoryType.List[]>(`${type}Category`, []);

  const actions = useAction("category");

  const source = useMemo(() => data?.map(item => ({ label: item.name, value: item.id })) || [], [
    data,
  ]);

  const state = useAsync(async () => {
    const res = await actions.getCategoryType({ type });
    setData(res);
  }, [actions, type]);

  return { loading: state.loading, source };
};
