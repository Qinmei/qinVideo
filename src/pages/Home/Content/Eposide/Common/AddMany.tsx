import { Button, Form, Input, InputNumber, Radio } from "antd";
import React, { useState } from "react";

import { PlusOutlined } from "@ant-design/icons";
import { getLang } from "@/locales";
import { FormModal } from "@/components";
import { EposideType } from "@/types";
import { eposideGenerateMany } from "@/ramdas";

interface FormValues {
  mode: boolean;
  count: number;
  text: string;
}

interface PropsType {
  onSubmit: (values: EposideType.CreateListReq) => Promise<unknown>;
  target: string;
  onModel: EposideType.OnModelType;
}
export const AddMany: React.FC<PropsType> = props => {
  const { onSubmit, target, onModel } = props;

  const onSubmitCall = async (values: FormValues) => {
    const { mode, count, text } = values;
    const data = eposideGenerateMany(mode, count, text, target, onModel);
    await onSubmit(data);
  };

  return (
    <FormModal<FormValues>
      title={getLang("episode.option.add.many")}
      content={methods => (
        <Button onClick={methods.show} icon={<PlusOutlined />}>
          {getLang("episode.option.add.many")}
        </Button>
      )}
      onSubmit={onSubmitCall}
    >
      <AddManyForm />
    </FormModal>
  );
};

export const AddManyForm: React.FC = () => {
  const [mode, setModel] = useState(true);

  return (
    <>
      <Form.Item
        name="mode"
        label={getLang("episode.muli.mode")}
        rules={[{ required: true }]}
        initialValue={true}
      >
        <Radio.Group onChange={e => setModel(e.target.value)}>
          <Radio value>{getLang("episode.muli.mode.auto")}</Radio>
          <Radio value={false}>{getLang("episode.muli.mode.handle")}</Radio>
        </Radio.Group>
      </Form.Item>

      {mode ? (
        <Form.Item name="count" label={getLang("episode.muli.count")} initialValue={12}>
          <InputNumber min={1} />
        </Form.Item>
      ) : (
        <Form.Item name="text" label={getLang("episode.muli.text")}>
          <Input.TextArea placeholder={getLang("episode.muli.text.tips")} rows={8} />
        </Form.Item>
      )}
    </>
  );
};
