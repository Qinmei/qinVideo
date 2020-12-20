import React, { useRef } from "react";
import { Modal } from "antd";
import { useModalState } from "@/hooks";
import { AntdType, HooksType } from "@/types";

interface PropsType<T> {
  submit: (values: T) => Promise<boolean> | boolean;
  content: (methods: HooksType.ModalStateMethods) => React.ReactNode;
  children: React.ReactElement;
  title: string;
}
export const FormModal = <T,>(props: PropsType<T>) => {
  const { submit, content, title, children } = props;

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

  const { visible, loading } = state;
  return (
    <>
      {content(methods)}
      <Modal
        title={title}
        visible={visible}
        confirmLoading={loading}
        onCancel={methods.cancel}
        onOk={confirm}
        destroyOnClose
      >
        {formNode}
      </Modal>
    </>
  );
};
