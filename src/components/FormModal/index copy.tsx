import React, { useRef, useCallback } from "react";
import { Modal, Form } from "antd";
import { useModalState } from "@/hooks";
import { modalFormLayout } from "@/constants";
import styles from "./index.less";

import { AntdType, HooksType } from "@/types";

interface PropsType<T> {
  onSubmit: (values: T) => Promise<unknown>;
  content: (methods: HooksType.ModalStateMethods) => React.ReactNode;
  children: React.ReactElement;
  title: string;
  className?: string;
}

export const FormModal = <T,>(props: PropsType<T>) => {
  const { onSubmit, content, title, children, className } = props;

  const formRef = useRef<AntdType.FormInstance<T>>(null);
  const [state, methods] = useModalState();

  const confirm = () => {
    formRef.current?.submit();
  };

  const onFinish = useCallback(
    async (values: T) => {
      methods.load();
      onSubmit(values).then(methods.cancel, methods.fail);
    },
    [methods, onSubmit]
  );

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
        className={styles.modal}
      >
        <div className={styles.main}>
          <Form<T> ref={formRef} onFinish={onFinish} {...modalFormLayout} className={className}>
            {children}
          </Form>
        </div>
      </Modal>
    </>
  );
};
