import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { Modal } from "antd";
import { useModalState } from "@/hooks";
import { AntdType, HooksType } from "@/types";

interface PropsType<T> {
  submit: (values: T) => Promise<boolean> | boolean;
  content: (methods: HooksType.ModalStateMethods) => React.ReactNode;
  children: React.ReactElement;
  title: string;
}

export const FormModal = forwardRef<AntdType.FormInstance<unknown>, PropsType<unknown>>((props,ref) => {
  const { submit, content, title, children } = props;

  const formRef = useRef<AntdType.FormInstance<unknown>>(null);
  const [state, methods] = useModalState();

  const confirm = () => {
    formRef.current?.submit();
  };

  const onFinish = async (values: unknown) => {
    methods.load();
    const res = await submit(values);
    methods.fail();
    if (!res) return;
    methods.cancel();
  };

  useImperativeHandle(ref,()=>formRef.current as AntdType.FormInstance<unknown>)

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
}) as <Values = any>(
  props: React.PropsWithChildren<PropsType<Values>> & { ref?: React.Ref<AntdType.FormInstance<Values>> },
) => React.ReactElement;