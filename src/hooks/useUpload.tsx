import { useCallback } from "react";

import { CommonType, AntdType } from "@/types";
import { useAction } from "@/action";
import { message } from "antd";
import { getLang } from "@/locales";

export const useUpload = (size = 20) => {
  const actions = useAction("common");

  const beforeUpoad = useCallback(
    (file: AntdType.RcFile) => {
      const sizeLimit = file.size / 1024 / 1024 < size;
      if (!sizeLimit) {
        message.error(getLang("common.upload.file.size", { size }));
      }
      return sizeLimit;
    },
    [size]
  );

  const onUpload = useCallback(
    async ({ file, filename, data = {} }: AntdType.RcCustomRequestOptions) => {
      const formData = new FormData();
      const { type = "others" } = data as { type: CommonType.UploadType };
      formData.append("type", type);
      formData.append(filename, file);

      const res = await actions.upload(formData);
      return res;
    },
    [actions]
  );

  return {
    beforeUpoad,
    onUpload,
  };
};
