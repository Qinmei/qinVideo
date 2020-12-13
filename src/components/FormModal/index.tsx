import React, { useRef } from "react";
import { Modal } from "antd";
import { useModalState } from "@/hooks";
import { AntdType } from "@/types";

interface PropsType<T> {
  submit: (values: T) => Promise<boolean> | boolean;
  content: React.ReactElement;
  children: React.ReactElement;
}
export const FormModal = <T,>(props: PropsType<T>) => {
  const { submit, content, children } = props;

  const formRef = useRef<AntdType.FormInstance<T>>(null);
  const [state, methods] = useModalState();

  const confirm = () => {
    formRef.current?.submit();
  };

  const onFinish = async (values: T) => {
    methods.load();
    const res = await submit(values);
    methods.fail();
    if (!res) return;
    methods.cancel();
  };

  const formNode = React.cloneElement(children, { ref: formRef, onFinish });
  const contentNode = React.cloneElement(content, { onClick: methods.show });

  const { visible, loading } = state;
  return (
    <>
      {contentNode}
      <Modal visible={visible} confirmLoading={loading} onCancel={methods.cancel} onOk={confirm}>
        {formNode}
      </Modal>
    </>
  );
};
