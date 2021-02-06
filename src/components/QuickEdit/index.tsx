import React from "react";
import { Button } from "antd";
import { getLang } from "@/locales";
import { FormModal } from "@/components";

interface PropsType<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<unknown>;
  children: React.ReactElement;
}
export const QuickEdit = <T extends { id: string }>(props: PropsType<T>) => {
  const { initialValues, onSubmit, children } = props;

  const onSubmitCall = async (values: T) => {
    await onSubmit({ ...values, id: initialValues.id });
  };

  return (
    <>
      <FormModal<T>
        title={getLang("common.options.quickedit")}
        content={methods => (
          <Button type="link" onClick={methods.show}>
            {getLang("common.options.edit")}
          </Button>
        )}
        initialValues={initialValues}
        onSubmit={onSubmitCall}
      >
        {children}
      </FormModal>
    </>
  );
};
