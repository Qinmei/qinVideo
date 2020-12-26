import React, { FC, useCallback, useEffect } from "react";
import { Button, Form, Table } from "antd";
import { useAsyncFn } from "react-use";
import { useAction, useModel } from "@/action";
import { useSavedState } from "@/hooks";
import { ListLayout } from "@/layouts";
import { ListOptions, ListTable } from "@/components";
import { getLang } from "@/locales";
import { useColumns } from "./useColumns";

import { GlobalType, AnimateType } from "@/types";

const initState = {
  page: 1,
  size: 10,
};

const List: FC = () => {
  const [state, setState] = useSavedState(initState);
  const { page, size } = state;

  const actions = useAction("animate");
  const { list, total } = useModel("animate");
  const { columns } = useColumns();

  const [{ loading }, initData] = useAsyncFn(
    async (data: GlobalType.ListQuery) => {
      await actions.getAnimateList(data);
    },
    [actions]
  );

  useEffect(() => {
    initData(state);
  }, [initData, state]);

  return (
    <ListLayout
      options={
        <ListOptions
          selected={[]}
          submit={() => true}
          newPath="/home/animate/add"
          remove={async () => console.log("sdsd")}
        >
          <></>
        </ListOptions>
      }
      search={<></>}
      setting={<></>}
    >
      <ListTable<AnimateType.List>
        loading={loading}
        columns={columns}
        page={page}
        size={size}
        total={total}
        list={list}
        pageSizeChange={setState}
      />
    </ListLayout>
  );
};

export default List;
