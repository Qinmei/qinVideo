import React, { forwardRef } from "react";
import { Form, Input, Select } from "antd";
import { CategorySelect } from "@/components";
import { AnimateType } from "@/types";
import { getLang } from "@/locales";
import { FormInstance } from "antd/lib/form";

interface PropsType {
  data?: AnimateType.List;
}
export const EditForm = forwardRef<FormInstance<unknown>, PropsType>((props, ref) => {
  const { data, ...restProps } = props;
  return (
    <Form ref={ref} {...restProps}>
      {data?.id && (
        <Form.Item
          label={getLang("animate.title")}
          name="title"
          initialValue={data?.title}
          rules={[{ required: true }]}
        >
          <Input placeholder={getLang("animate.tips.fill.title")} />
        </Form.Item>
      )}
      {data?.id && (
        <Form.Item
          label={getLang("animate.slug")}
          name="slug"
          initialValue={data?.slug}
          rules={[{ required: true }]}
        >
          <Input placeholder={getLang("animate.tips.fill.slug")} />
        </Form.Item>
      )}
      <Form.Item label={getLang("animate.update")} name="isUpdate" initialValue={data?.isUpdate}>
        <Select placeholder={getLang("animate.tips.fill.status")}>
          {
            // @ts-ignore
            <Select.Option value={true}>{getLang("common.select.updating")}</Select.Option>
          }
          {
            // @ts-ignore
            <Select.Option value={false}>{getLang("common.select.updated")}</Select.Option>
          }
        </Select>
      </Form.Item>
      <Form.Item
        label={getLang("animate.category.area")}
        name="area"
        initialValue={data?.area.map(item => item._id)}
      >
        <CategorySelect type="aarea" placeholder={getLang("animate.tips.fill.area")} />
      </Form.Item>
      <Form.Item
        label={getLang("animate.category.year")}
        name="year"
        initialValue={data?.year.map(item => item._id)}
      >
        <CategorySelect type="ayear" placeholder={getLang("animate.tips.fill.year")} />
      </Form.Item>
      <Form.Item
        label={getLang("animate.category.kind")}
        name="kind"
        initialValue={data?.kind.map(item => item._id)}
      >
        <CategorySelect type="akind" placeholder={getLang("animate.tips.fill.kind")} />
      </Form.Item>
      <Form.Item
        label={getLang("animate.category.tag")}
        name="tag"
        initialValue={data?.tag.map(item => item._id)}
      >
        <CategorySelect type="atag" placeholder={getLang("animate.tips.fill.tag")} />
      </Form.Item>
      <Form.Item label={getLang("animate.status")} name="status" initialValue={data?.status}>
        <Select placeholder={getLang("animate.tips.fill.status")}>
          <Select.Option value="draft">{getLang("common.select.draft")}</Select.Option>
          <Select.Option value="publish">{getLang("common.select.publish")}</Select.Option>
          <Select.Option value="reject">{getLang("common.select.reject")}</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
});
