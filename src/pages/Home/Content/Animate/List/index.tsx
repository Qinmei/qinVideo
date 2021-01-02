import React, { FC, useState, useEffect, useCallback, useMemo } from "react";
import { useAsyncFn } from "react-use";
import { useAction, useModel } from "@/action";
import { useSavedState } from "@/hooks";
import { ListLayout } from "@/layouts";
import { ListOptions, ListTable } from "@/components";
import { getLang } from "@/locales";
import { useColumns } from "./useColumns";
import { EditForm } from "./form";

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

const List: FC = () => {
  const [select, setSelect] = useState<string[]>([]);
  const [state, setState] = useSavedState(initState);
  const { page, size, title } = state;

  const actions = useAction("animate");
  const { list, total } = useModel("animate");

  const [{ loading }, initData] = useAsyncFn(async () => {
    await actions.getAnimateList(state);
    setSelect([]);
  }, [actions, state, setSelect]);

  const queryCompare = useCallback(
    (value: Partial<GlobalType.ListQuery>) => {
      const init = Object.entries(value).some(
        item => state[item[0] as keyof GlobalType.ListQuery] !== item[1]
      );
      init && setState(value);
    },
    [setState, state]
  );

  const resetState = useCallback(() => queryCompare(initState), [queryCompare]);

  const remove = useCallback(async (id: string) => await actions.deleteAnimateItem({ id }), [
    actions,
  ]);

  const removeMany = useCallback(
    async (type: "many" | "all") => {
      const res = await actions.deleteAnimateList({ ids: type === "all" ? [] : select });
      res && initData();
    },
    [actions, select, initData]
  );

  const update = useCallback(
    async (values: AnimateType.UpdateItemReq) => await actions.updateAnimateItem({ ...values }),
    [actions]
  );

  const updateMany = useCallback(
    async (values: Omit<AnimateType.UpdateListReq, "ids">) => {
      const res = await actions.updateAnimateList({ ids: select, ...values });
      res && initData();
      return !!res;
    },
    [actions, select, initData]
  );

  const methods = useMemo(() => ({ init: initData, delete: remove, reset: resetState, update }), [
    initData,
    remove,
    resetState,
    update,
  ]);

  const { columns, SettingBtn } = useColumns(state, methods);

  useEffect(() => {
    initData();
  }, [initData]);

  return (
    <ListLayout
      options={
        <ListOptions<Omit<AnimateType.UpdateListReq, "ids">>
          selected={select}
          submit={updateMany}
          newPath="/home/animate/add"
          remove={removeMany}
        >
          <EditForm />
        </ListOptions>
      }
      placeholder={getLang("animate.title.search")}
      value={title}
      onChange={title => setState({ title })}
      setting={SettingBtn}
      reset={methods.reset}
    >
      <ListTable<AnimateType.List>
        loading={loading}
        columns={columns}
        page={page}
        size={size}
        total={total}
        list={list}
        select={select}
        onSelectChange={setSelect}
        onChange={queryCompare}
      />
    </ListLayout>
  );
};

export default List;
