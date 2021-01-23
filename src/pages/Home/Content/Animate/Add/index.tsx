import React from "react";
import { Tabs } from "antd";
import { getLang } from "@/locales";
import { BaseInfo } from "../Common/BaseInfo";
import { AnimateType } from "@/types";
import { useAsyncFn } from "react-use";
import { useAction } from "@/action";
import { useHistory } from "react-router-dom";

const Add = () => {
  const history = useHistory();
  const actions = useAction("animate");

  const [, submit] = useAsyncFn(async (values: AnimateType.CreateItemReq) => {
    const res = await actions.createAnimateItem(values);
    history.goBack();
    return res;
  }, []);

  return (
    <Tabs>
      <Tabs.TabPane tab={getLang("common.add.baseinfo")}>
        <BaseInfo submit={submit} />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Add;
