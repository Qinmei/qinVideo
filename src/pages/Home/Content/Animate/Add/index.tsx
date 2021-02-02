import React from "react";
import { Tabs } from "antd";
import { getLang } from "@/locales";
import { BaseInfo } from "../Common/BaseInfo";
import { AnimateType } from "@/types";
import { useAsyncFn } from "react-use";
import { useAction } from "@/action";
import { useHistory } from "react-router-dom";
import { animateOrigin } from "../Common/GlobalState";

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
      <Tabs.TabPane tab={getLang("common.tabs.baseinfo")}>
        <BaseInfo submit={submit} initialValues={animateOrigin} />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Add;
