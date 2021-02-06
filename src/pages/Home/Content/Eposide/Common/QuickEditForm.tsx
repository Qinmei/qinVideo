import { Form, Input, InputNumber, Switch } from "antd";
import React from "react";

import { FormEposideList, UploadImg } from "@/components";
import { pageTailLayout } from "@/constants";
import { getLang } from "@/locales";
import { EposideType } from "@/types";

interface PropsType {
  data?: EposideType.EposideItem;
}
export const EditForm: React.FC<PropsType> = props => {
  const { data } = props;
  return (
    <div style={{ width: 900 }}>
      <Form.Item
        label={getLang("eposide.title")}
        name="title"
        initialValue={data?.title}
        rules={[{ required: true }]}
      >
        <Input placeholder={getLang("eposide.title.tips")} />
      </Form.Item>

      <Form.Item
        label={getLang("eposide.sort")}
        name="sort"
        initialValue={data?.sort || 0}
        rules={[{ required: true }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label={getLang("eposide.noSetPrefix")}
        name="noSetPrefix"
        initialValue={data?.noSetPrefix ?? false}
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>

      <Form.Item label={getLang("eposide.bilibili")} name="bilibili" initialValue={data?.bilibili}>
        <Input placeholder={getLang("eposide.bilibili.tips")} />
      </Form.Item>

      <Form.Item label={getLang("eposide.cover")} name="cover">
        <Input.Search
          enterButton={getLang("common.options.confirm")}
          placeholder={getLang("components.upload.input.tips")}
        />
      </Form.Item>

      <Form.Item name="cover" initialValue={data?.cover} {...pageTailLayout}>
        <UploadImg type="eposide" width={400} height={160} />
      </Form.Item>

      <Form.Item name="link" initialValue={data?.link} label={getLang("eposide.link")}>
        <FormEposideList />
      </Form.Item>

      <Form.Item name="subtitle" initialValue={data?.subtitle} label={getLang("eposide.subtitle")}>
        <FormEposideList />
      </Form.Item>
    </div>
  );
};
