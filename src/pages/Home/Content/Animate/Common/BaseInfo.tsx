import { Button, Col, Form, Input, InputNumber, Radio, Row, Select, Switch } from "antd";
import React, { useRef, forwardRef, useImperativeHandle } from "react";

import { CategorySelect, FormModalMethods, UploadImg, WrapDatePicker } from "@/components";
import { pageFormLayout, pageTailLayout } from "@/constants";
import { playTypeSource, statusSource, updateDaySource } from "@/constants/select";
import { getLang } from "@/locales";
import { AnimateType, AntdType } from "@/types";
import { useAsyncFn } from "react-use";
import { FormInstance } from "antd/lib/form";

interface PropsType {
  initialValues?: AnimateType.FormValues;
  submit: (value: AnimateType.FormValues) => void;
}
export const BaseInfo = forwardRef<Pick<FormModalMethods, "confirm">, PropsType>((props, ref) => {
  const { initialValues, submit } = props;

  const formRef = useRef<FormInstance<AnimateType.FormValues>>(null);

  const methodsExpose = {
    confirm: () => {
      formRef.current?.submit();
    },
    setFieldsValue: (value: AnimateType.FormValues) => {
      formRef.current?.setFieldsValue(value);
    },
  };

  useImperativeHandle(ref, () => methodsExpose);

  const [{ loading }, onFinish] = useAsyncFn(async (value: AnimateType.FormValues) => {
    await submit(value);
  });

  return (
    <Form {...pageFormLayout} onFinish={onFinish} initialValues={initialValues} ref={formRef}>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <Form.Item label={getLang("animate.title")} name="title" rules={[{ required: true }]}>
            <Input placeholder={getLang("animate.title.tips")} />
          </Form.Item>
          <Form.Item label={getLang("animate.slug")} name="slug" rules={[{ required: true }]}>
            <Input placeholder={getLang("animate.slug.tips")} />
          </Form.Item>
          <Form.Item
            label={getLang("animate.introduce")}
            name="introduce"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              placeholder={getLang("animate.introduce.tips")}
              autoSize={{ minRows: 4, maxRows: 10 }}
              showCount
            />
          </Form.Item>

          <Form.Item label={getLang("animate.status")} name="status">
            <Radio.Group options={Object.values(statusSource) as AntdType.CheckboxOptionType[]} />
          </Form.Item>

          <Form.Item label={getLang("animate.isUpdate")} name="isUpdate" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item label={getLang("animate.count.rate")} name="rateCount">
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item label={getLang("animate.count.star")} name="rateStar">
            <InputNumber min={0} max={10} />
          </Form.Item>

          <Form.Item label={getLang("animate.updatedTime")} name="updateDay">
            <Select options={Object.values(updateDaySource)} style={{ width: 200 }} />
          </Form.Item>

          <Form.Item label={getLang("animate.firstPlay")} name="firstPlay">
            <WrapDatePicker style={{ width: 200 }} allowClear format="YYYYMMDD" />
          </Form.Item>

          <Form.Item label={getLang("animate.category.area")} name="area">
            <CategorySelect type="aarea" placeholder={getLang("animate.area")} add />
          </Form.Item>
          <Form.Item label={getLang("animate.category.year")} name="year">
            <CategorySelect type="ayear" placeholder={getLang("animate.year")} add />
          </Form.Item>
          <Form.Item label={getLang("animate.category.kind")} name="kind">
            <CategorySelect type="akind" placeholder={getLang("animate.kind")} add />
          </Form.Item>
          <Form.Item label={getLang("animate.category.tag")} name="tag">
            <CategorySelect type="atag" placeholder={getLang("animate.tag")} add />
          </Form.Item>

          <Form.Item label={getLang("animate.impression")} name="impression">
            <Input placeholder={getLang("animate.impression.tips")} />
          </Form.Item>

          <Form.Item label={getLang("animate.actor")} name="actor">
            <Input placeholder={getLang("animate.actor.tips")} />
          </Form.Item>

          <Form.Item label={getLang("animate.staff")} name="staff">
            <Input placeholder={getLang("animate.staff.tips")} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <Form.Item label={getLang("animate.noPrefix")} name="noPrefix" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item label={getLang("animate.level")} name="level">
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item label={getLang("animate.play.kind")} name="playType">
            <Select options={Object.values(playTypeSource)} style={{ width: 200 }} />
          </Form.Item>

          <Form.Item label={getLang("animate.play.downTitle")} name="downTitle">
            <Input placeholder={getLang("animate.play.downTitle.tips")} />
          </Form.Item>

          <Form.Item label={getLang("animate.play.downLink")} name="downLink">
            <Input placeholder={getLang("animate.play.downLink.tips")} />
          </Form.Item>

          <Form.Item label={getLang("animate.play.linkPrefix")} name="linkPrefix">
            <Input placeholder={getLang("animate.play.linkPrefix.tips")} />
          </Form.Item>

          <Form.Item label={getLang("animate.season.name")} name="season">
            <Input placeholder={getLang("animate.season.name.tips")} />
          </Form.Item>

          <Form.Item label={getLang("animate.cover.horizontal")} name="coverHorizontal">
            <Input.Search
              enterButton={getLang("common.options.confirm")}
              placeholder={getLang("components.upload.input.tips")}
            />
          </Form.Item>

          <Form.Item name="coverHorizontal" {...pageTailLayout}>
            <UploadImg type="animate" width={400} height={160} />
          </Form.Item>

          <Form.Item label={getLang("animate.cover.vertical")} name="coverVertical">
            <Input.Search
              enterButton={getLang("common.options.confirm")}
              placeholder={getLang("components.upload.input.tips")}
            />
          </Form.Item>

          <Form.Item name="coverVertical" {...pageTailLayout}>
            <UploadImg type="animate" width={200} height={280} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "60px" }}>
        <Button
          type="primary"
          size="large"
          style={{ minWidth: "160px" }}
          htmlType="submit"
          loading={loading}
        >
          {getLang("common.options.submit")}
        </Button>
      </Row>
    </Form>
  );
});
