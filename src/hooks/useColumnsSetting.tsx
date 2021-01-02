import React, { useMemo } from "react";
import { useLocalStorage } from "react-use";
import { ColumnsSetting } from "@/components";

import { AntdType, ComponentsType } from "@/types";

export const useColumnsSetting = <T,>(
  columns: ComponentsType.ColumnType<T>[],
  uniqueKey: string
) => {
  const { allKeys, presetKeys, source } = useMemo(() => {
    const allKeys = columns.map(item => item.key) as string[];
    const presetKeys = columns.filter(item => item.preset).map(item => item.key) as string[];
    const source = columns.map(item => ({ key: item.key as string, title: item.title as string }));
    return { allKeys, presetKeys, source };
  }, [columns]);

  const [select, setSelect] = useLocalStorage<string[]>(uniqueKey, presetKeys);

  const methods = useMemo(
    () => ({
      reset: () => setSelect(presetKeys),
      allToggle: () => setSelect(select?.length === allKeys.length ? [] : allKeys),
      sync: (value: string[]) => setSelect(value),
    }),
    [setSelect, select, allKeys, presetKeys]
  );

  const SettingBtn = useMemo(
    () => <ColumnsSetting source={source} select={select as string[]} methods={methods} />,
    [source, select, methods]
  );

  const columnsFilter = useMemo(
    () => columns.filter(item => select?.includes(item.key as string)) as AntdType.ColumnsType<T>,
    [columns, select]
  );
  return {
    columns: columnsFilter,
    SettingBtn,
  };
};
