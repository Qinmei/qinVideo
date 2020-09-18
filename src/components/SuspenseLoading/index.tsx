import React, { FC } from "react";
import { Spin } from "antd";

interface PropType {}

export const SuspenseLoading: FC<PropType> = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin size="large" />
    </div>
  );
};
