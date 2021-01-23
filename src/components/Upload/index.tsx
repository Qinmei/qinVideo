import { Upload } from "antd";
import React, { useCallback } from "react";
import { useAsyncFn } from "react-use";

import { useUpload } from "@/hooks";
import { getLang } from "@/locales";
import { AntdType } from "@/types";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { ImageViewer } from "@/components";

import styles from "./index.less";

interface ImgPropsType {
  accept?: string;
  type?: "animate" | "comic" | "post" | "blog" | "avatar" | "background" | "config" | "others";
  value?: string;
  onChange?: (value: string) => void;
  width?: number;
  height?: number;
}
export const UploadImg: React.FC<ImgPropsType> = props => {
  const {
    accept = "image/jpeg,image/jpg,image/png,image/gif,image/x-icon,image/vnd.microsoft.icon",
    type = "others",
    value,
    onChange,
    width = 128,
    height = 128,
  } = props;

  const { beforeUpoad, onUpload } = useUpload();

  const submit = useCallback(
    (value: string) => {
      onChange && onChange(value);
    },
    [onChange]
  );

  const [{ loading }, customRequest] = useAsyncFn(
    async (value: AntdType.RcCustomRequestOptions) => {
      const res = await onUpload(value);
      const url = res.map(item => item.path)[0];
      submit(url);
    },
    [submit, onUpload]
  );

  return (
    <Upload
      name="file"
      showUploadList={false}
      accept={accept}
      data={{ type }}
      beforeUpload={beforeUpoad}
      customRequest={customRequest}
    >
      {value && (
        <div
          className={styles.imgWrapper}
          style={{ width, height }}
          onClick={e => e.stopPropagation()}
        >
          <ImageViewer source={value} remove={() => submit("")} />
        </div>
      )}

      {!value && (
        <div className={`${styles.imgWrapper} ${styles.uplaod}`} style={{ width, height }}>
          <div className={styles.btn}>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <span className={styles.tips}>{getLang("common.options.upload")}</span>
          </div>
        </div>
      )}
    </Upload>
  );
};
