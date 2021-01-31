import React, { useRef, forwardRef, useImperativeHandle, useCallback } from "react";
import { Modal } from "antd";
import { useModalState } from "@/hooks";
import { modalFormLayout } from "@/constants";
import styles from "./index.less";

import { AntdType, HooksType } from "@/types";

interface PropsType<T> {
  submit: (values: T) => Promise<boolean> | boolean;
  content: (methods: HooksType.ModalStateMethods) => React.ReactNode;
  children: React.ReactElement;
  title: string;
}

export interface FormModalMethods extends HooksType.ModalStateMethods {
  confirm: () => void;
}

export const FormModal = forwardRef<FormModalMethods, PropsType<unknown>>((props, ref) => {
  const { submit, content, title, children } = props;

  const formRef = useRef<AntdType.FormInstance<unknown>>(null);
  const [state, methods] = useModalState();

  const confirm = () => {
    formRef.current?.submit();
  };

  const methodsExpose = {
    confirm,
    ...methods,
  };

  const onFinish = useCallback(
    async (values: unknown) => {
      methods.load();
      const res = await submit(values);
      methods.fail();
      if (!res) return;
      methods.cancel();
    },
    [methods, submit]
  );

  useImperativeHandle(ref, () => methodsExpose);

  const formNode = React.cloneElement(children, { ref: formRef, onFinish, ...modalFormLayout });

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
        <div className={styles.main}>{formNode}</div>
      </Modal>
    </>
  );
}) as <Values = unknown>(
  props: React.PropsWithChildren<PropsType<Values>> & {
    ref?: React.Ref<FormModalMethods>;
  }
) => React.ReactElement;
