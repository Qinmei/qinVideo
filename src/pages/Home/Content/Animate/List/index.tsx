import React, { FC, useState, useEffect } from "react";
import { Button, Form, Table } from "antd";
import { useAsyncFn } from "react-use";
import { useAction, useModel } from "@/action";
import { useSavedState } from "@/hooks";
import { ListLayout } from "@/layouts";
import { ListOptions, ListTable } from "@/components";
import { getLang } from "@/locales";
import { useColumns } from "./useColumns";

import { AnimateType } from "@/types";

const initState = {
  page: 1,
  size: 10,
  query: "",
};

const List: FC = () => {
  const [select, setSelect] = useState<string[]>([]);
  const [state, setState] = useSavedState(initState);
  const { page, size, query } = state;

  const actions = useAction("animate");
  const { list, total } = useModel("animate");
  const { columns } = useColumns();

  const [{ loading }, initData] = useAsyncFn(async () => {
    await actions.getAnimateList(state);
  }, [actions, state]);

  useEffect(() => {
    initData();
  }, [initData]);

  return (
    <ListLayout
      options={
        <ListOptions
          selected={select}
          submit={() => true}
          newPath="/home/animate/add"
          remove={async () => console.log("sdsd")}
        >
          <></>
        </ListOptions>
      }
      placeholder={getLang("animate.title.search")}
      value={query}
      onChange={query => setState({ query })}
      setting={<></>}
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
        onChange={setState}
      />
    </ListLayout>
  );
};

export default List;
