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

export const updateSource: GlobalType.SelectType<string> = {
  true: {
    text: getLang("common.select.updating"),
    badge: "processing",
    value: "true",
  },
  false: {
    text: getLang("common.select.updated"),
    badge: "default",
    value: "false",
  },
};

export const updateDaySource: GlobalType.SelectType<string> = {
  0: {
    text: getLang("common.day.sun"),
    value: "0",
  },
  1: {
    text: getLang("common.day.mon"),
    value: "1",
  },
  2: {
    text: getLang("common.day.tue"),
    value: "2",
  },
  3: {
    text: getLang("common.day.wed"),
    value: "3",
  },
  4: {
    text: getLang("common.day.thur"),
    value: "4",
  },
  5: {
    text: getLang("common.day.fri"),
    value: "5",
  },
  6: {
    text: getLang("common.day.sat"),
    value: "6",
  },
};
