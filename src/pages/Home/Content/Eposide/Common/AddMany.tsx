import { Form, Input, InputNumber, Radio } from "antd";
import React from "react";

import { getLang } from "@/locales";

export const AddManyForm: React.FC = () => {
  return (
    <>
      <Form.Item
        name="mode"
        label={getLang("episode.muli.mode")}
        rules={[{ required: true }]}
        initialValue={true}
      >
        <Radio.Group>
          <Radio value>{getLang("episode.muli.mode.auto")}</Radio>
          <Radio value={false}>{getLang("episode.muli.mode.handle")}</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="count" label={getLang("episode.muli.count")} initialValue={12}>
        <InputNumber min={1} />
      </Form.Item>

      <Form.Item name="text" label={getLang("episode.muli.text")}>
        <Input.TextArea placeholder={getLang("episode.muli.text.tips")} rows={8} />
      </Form.Item>
    </>
  );
};
