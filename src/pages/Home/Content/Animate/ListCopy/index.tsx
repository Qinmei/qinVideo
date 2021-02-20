import React, { FC, useEffect, useRef } from "react";
import { useModel } from "@/action";
import { ListLayout } from "@/layouts";
import { ListOptions, ListTable } from "@/components";
import { getLang } from "@/locales";
import { useColumns } from "./useColumns";
import { QuickEditForm } from "../Common/QuickEditForm";
import { AnimateController } from "@/controllers";
import { AnimateType, CommonType } from "@/types";

import { useListLoading, useSelect } from "../Common/GlobalState";
import { useSavedState } from "@/hooks";

const initialState: CommonType.ListQuery = {
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
  const [query, setQuery] = useSavedState(initialState, "animate");
  const [loading, setLoading] = useListLoading();
  const [select, setSelect] = useSelect();
  const { title, page, size } = query;

  const dispatch = (propKey: string, value: unknown) => {
    switch (propKey) {
      case "query":
        setQuery(value as CommonType.ListQuery);
        break;
      case "select":
        setSelect(value as string[]);
        break;
      case "loading":
        setLoading(value as boolean);
        break;
      default:
        break;
    }
  };
  const { current: controller } = useRef(
    new AnimateController({ query, loading, select }, dispatch)
  );

  const { list, total } = useModel("animate");
  const { columns, SettingBtn } = useColumns(query, controller);

  useEffect(() => {
    controller.init();
  }, [controller, query]);

  return (
    <ListLayout
      options={
        <ListOptions<Omit<AnimateType.UpdateListReq, "ids">>
          selected={select}
          onSubmit={controller.updateMany}
          newPath="/home/animate/add"
          onRemove={controller.removeMany}
        >
          <QuickEditForm />
        </ListOptions>
      }
      placeholder={getLang("animate.title.search")}
      value={title}
      onChange={title => controller.setQuery({ title })}
      setting={SettingBtn}
      reset={controller.reset}
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
        onChange={controller.setQuery}
      />
    </ListLayout>
  );
};

export default List;
