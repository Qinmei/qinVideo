import React, { useCallback } from "react";
import { Modal, Form } from "antd";
import { useModalState } from "@/hooks";
import { modalFormLayout } from "@/constants";
import styles from "./index.less";

import { HooksType } from "@/types";
import { useDeepCompareEffect } from "react-use";

interface PropsType<T> {
  onSubmit: (values: T) => Promise<unknown>;
  content: (methods: HooksType.ModalStateMethods) => React.ReactNode;
  children: React.ReactNode;
  title: string;
  initialValues?: T;
}

export const FormModal = <T,>(props: PropsType<T>) => {
  const { onSubmit, content, title, initialValues, children } = props;

  const [form] = Form.useForm<T>();
  const [state, methods] = useModalState();

  const onFinish = useCallback(
    async (values: T) => {
      methods.load();
      onSubmit(values).then(methods.cancel, methods.fail);
    },
    [methods, onSubmit]
  );

  useDeepCompareEffect(() => {
    initialValues && form && form.setFieldsValue(initialValues as any);
  }, [initialValues, form]);

  return (
    <>
      {content(methods)}
      <Modal
        title={title}
        visible={state.visible}
        confirmLoading={state.loading}
        onCancel={methods.cancel}
        onOk={form.submit}
        destroyOnClose
        className={styles.modal}
      >
        <Form<T> form={form} onFinish={onFinish} {...modalFormLayout} className={styles.form}>
          {children}
        </Form>
      </Modal>
    </>
  );
};
