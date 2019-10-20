import * as crypto from "crypto";

export const MD5 = (text: string) =>
  crypto
    .createHash("md5")
    .update(text)
    .digest("hex");
