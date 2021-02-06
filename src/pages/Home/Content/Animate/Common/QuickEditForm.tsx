import React from "react";
import { Form, Input, Select, Switch } from "antd";
import { CategorySelect } from "@/components";
import { getLang } from "@/locales";

interface PropsType {
  full?: boolean;
}
export const QuickEditForm: React.FC<PropsType> = props => {
  const { full } = props;
  return (
    <>
      {full && (
        <Form.Item label={getLang("animate.title")} name="title" rules={[{ required: true }]}>
          <Input placeholder={getLang("animate.title.tips")} />
        </Form.Item>
      )}
      {full && (
        <Form.Item label={getLang("animate.slug")} name="slug" rules={[{ required: true }]}>
          <Input placeholder={getLang("animate.slug.tips")} />
        </Form.Item>
      )}
      <Form.Item label={getLang("animate.update")} name="isUpdate" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label={getLang("animate.category.area")} name="area">
        <CategorySelect type="aarea" placeholder={getLang("animate.area")} />
      </Form.Item>
      <Form.Item label={getLang("animate.category.year")} name="year">
        <CategorySelect type="ayear" placeholder={getLang("animate.year")} />
      </Form.Item>
      <Form.Item label={getLang("animate.category.kind")} name="kind">
        <CategorySelect type="akind" placeholder={getLang("animate.kind")} />
      </Form.Item>
      <Form.Item label={getLang("animate.category.tag")} name="tag">
        <CategorySelect type="atag" placeholder={getLang("animate.tag")} />
      </Form.Item>
      <Form.Item label={getLang("animate.status")} name="status">
        <Select placeholder={getLang("animate.status.tips")}>
          <Select.Option value="draft">{getLang("common.select.draft")}</Select.Option>
          <Select.Option value="publish">{getLang("common.select.publish")}</Select.Option>
          <Select.Option value="reject">{getLang("common.select.reject")}</Select.Option>
        </Select>
      </Form.Item>
    </>
  );
};
