import { getLang } from "@/locales";
import { GlobalType } from "@/types";

export const statusSource: GlobalType.SelectType<string> = {
  draft: {
    text: getLang("common.select.draft"),
    badge: "warning",
    value: "draft",
  },
  publish: {
    text: getLang("common.select.publish"),
    badge: "success",
    value: "publish",
  },
  reject: {
    text: getLang("common.select.reject"),
    badge: "error",
    value: "reject",
  },
};

export const updateSource = [
  {
    text: getLang("common.select.updating"),
    value: true,
  },
  {
    text: getLang("common.select.updated"),
    value: false,
  },
];
