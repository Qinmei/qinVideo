import { Form, Input, InputNumber, Switch } from "antd";
import React from "react";

import { FormEposideList, UploadImg } from "@/components";
import { pageTailLayout } from "@/constants";
import { getLang } from "@/locales";

interface PropsType {
  full?: boolean;
}
export const EditForm: React.FC<PropsType> = props => {
  const { full } = props;
  return (
    <div style={{ width: 900 }}>
      {full && (
        <Form.Item label={getLang("eposide.title")} name="title" rules={[{ required: true }]}>
          <Input placeholder={getLang("eposide.title.tips")} />
        </Form.Item>
      )}

      {full && (
        <Form.Item label={getLang("eposide.sort")} name="sort" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
      )}

      <Form.Item label={getLang("eposide.noSetPrefix")} name="noSetPrefix" valuePropName="checked">
        <Switch />
      </Form.Item>

      {full && (
        <Form.Item label={getLang("eposide.bilibili")} name="bilibili">
          <Input placeholder={getLang("eposide.bilibili.tips")} />
        </Form.Item>
      )}

      <Form.Item label={getLang("eposide.cover")} name="cover">
        <Input.Search
          enterButton={getLang("common.options.confirm")}
          placeholder={getLang("components.upload.input.tips")}
        />
      </Form.Item>

      <Form.Item name="cover" {...pageTailLayout}>
        <UploadImg type="eposide" width={400} height={160} />
      </Form.Item>

      {full && (
        <Form.Item name="link" label={getLang("eposide.link")}>
          <FormEposideList />
        </Form.Item>
      )}

      {full && (
        <Form.Item name="subtitle" label={getLang("eposide.subtitle")}>
          <FormEposideList />
        </Form.Item>
      )}
    </div>
  );
};
