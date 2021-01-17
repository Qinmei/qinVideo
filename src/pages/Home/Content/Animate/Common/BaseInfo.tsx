import { getLang } from "@/locales";
import { Col, Form, Input, Radio, Row, Switch, InputNumber, Select, Button } from "antd";
import React from "react";
import { pageFormLayout } from "@/constants";
import { playTypeSource, statusSource, updateDaySource } from "@/constants/select";
import { AntdType, AnimateType } from "@/types";
import { WrapDatePicker } from "@/components/WrappAntd";
import { CategorySelect } from "@/components";

interface PropsType {
  data?: AnimateType.List;
}
export const BaseInfo: React.FC<PropsType> = props => {
  const { data } = props;
  return (
    <Form {...pageFormLayout}>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <Form.Item
            label={getLang("animate.title")}
            name="title"
            rules={[{ required: true }]}
            initialValue={data?.title}
          >
            <Input placeholder={getLang("animate.title.tips")} />
          </Form.Item>
          <Form.Item
            label={getLang("animate.slug")}
            name="slug"
            rules={[{ required: true }]}
            initialValue={data?.slug}
          >
            <Input placeholder={getLang("animate.slug.tips")} />
          </Form.Item>
          <Form.Item
            label={getLang("animate.introduce")}
            name="introduce"
            rules={[{ required: true }]}
            initialValue={data?.introduce}
          >
            <Input.TextArea
              placeholder={getLang("animate.introduce.tips")}
              autoSize={{ minRows: 4, maxRows: 10 }}
              showCount
            />
          </Form.Item>

          <Form.Item
            label={getLang("animate.status")}
            name="status"
            initialValue={data?.status ?? "draft"}
          >
            <Radio.Group options={Object.values(statusSource) as AntdType.CheckboxOptionType[]} />
          </Form.Item>

          <Form.Item
            label={getLang("animate.isUpdate")}
            name="isUpdate"
            initialValue={data?.isUpdate ?? false}
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label={getLang("animate.count.rate")}
            name="rateCount"
            initialValue={data?.rateCount ?? 1000}
          >
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item
            label={getLang("animate.count.star")}
            name="rateStar"
            initialValue={data?.rateStar ?? 8}
          >
            <InputNumber min={0} max={10} />
          </Form.Item>

          <Form.Item
            label={getLang("animate.updatedTime")}
            name="updateDay"
            initialValue={data?.updateDay ?? 0}
          >
            <Select options={Object.values(updateDaySource)} style={{ width: 200 }} />
          </Form.Item>

          <Form.Item
            label={getLang("animate.firstPlay")}
            name="firstPlay"
            initialValue={data?.firstPlay}
          >
            <WrapDatePicker style={{ width: 200 }} allowClear format="YYYYMMDD" />
          </Form.Item>

          <Form.Item
            label={getLang("animate.category.area")}
            name="area"
            initialValue={data?.area.map(item => item._id)}
          >
            <CategorySelect type="aarea" placeholder={getLang("animate.area")} add />
          </Form.Item>
          <Form.Item
            label={getLang("animate.category.year")}
            name="year"
            initialValue={data?.year.map(item => item._id)}
          >
            <CategorySelect type="ayear" placeholder={getLang("animate.year")} add />
          </Form.Item>
          <Form.Item
            label={getLang("animate.category.kind")}
            name="kind"
            initialValue={data?.kind.map(item => item._id)}
          >
            <CategorySelect type="akind" placeholder={getLang("animate.kind")} add />
          </Form.Item>
          <Form.Item
            label={getLang("animate.category.tag")}
            name="tag"
            initialValue={data?.tag.map(item => item._id)}
          >
            <CategorySelect type="atag" placeholder={getLang("animate.tag")} add />
          </Form.Item>

          <Form.Item
            label={getLang("animate.impression")}
            name="impression"
            initialValue={data?.impression}
          >
            <Input placeholder={getLang("animate.impression.tips")} />
          </Form.Item>

          <Form.Item label={getLang("animate.actor")} name="actor" initialValue={data?.actor}>
            <Input placeholder={getLang("animate.actor.tips")} />
          </Form.Item>

          <Form.Item label={getLang("animate.staff")} name="staff" initialValue={data?.staff}>
            <Input placeholder={getLang("animate.staff.tips")} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <Form.Item
            label={getLang("animate.noPrefix")}
            name="noPrefix"
            initialValue={data?.noPrefix ?? false}
          >
            <Switch />
          </Form.Item>

          <Form.Item label={getLang("animate.level")} name="level" initialValue={data?.level ?? 0}>
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item
            label={getLang("animate.play.kind")}
            name="playType"
            initialValue={data?.playType ?? "mp4"}
          >
            <Select options={Object.values(playTypeSource)} style={{ width: 200 }} />
          </Form.Item>

          <Form.Item
            label={getLang("animate.play.downTitle")}
            name="downTitle"
            initialValue={data?.downTitle}
          >
            <Input placeholder={getLang("animate.play.downTitle.tips")} />
          </Form.Item>

          <Form.Item
            label={getLang("animate.play.downLink")}
            name="downLink"
            initialValue={data?.downLink}
          >
            <Input placeholder={getLang("animate.play.downLink.tips")} />
          </Form.Item>

          <Form.Item
            label={getLang("animate.play.linkPrefix")}
            name="linkPrefix"
            initialValue={data?.linkPrefix}
          >
            <Input placeholder={getLang("animate.play.linkPrefix.tips")} />
          </Form.Item>

          <Form.Item
            label={getLang("animate.season.name")}
            name="season"
            initialValue={data?.season}
          >
            <Input placeholder={getLang("animate.season.name.tips")} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "60px" }}>
        <Button type="primary" size="large" style={{ minWidth: "160px" }} htmlType="submit">
          {getLang("common.options.submit")}
        </Button>
      </Row>
    </Form>
  );
};
