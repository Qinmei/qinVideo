import { getLang } from "@/locales";
import { CommonType } from "@/types";

export const statusSource: CommonType.SelectType<string> = {
  draft: {
    text: getLang("common.select.draft"),
    label: getLang("common.select.draft"),
    badge: "warning",
    value: "draft",
  },
  publish: {
    text: getLang("common.select.publish"),
    label: getLang("common.select.publish"),
    badge: "success",
    value: "publish",
  },
  reject: {
    text: getLang("common.select.reject"),
    label: getLang("common.select.reject"),
    badge: "error",
    value: "reject",
  },
};

export const updateSource: CommonType.SelectType<string> = {
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

export const updateDaySource: CommonType.SelectType<string> = {
  0: {
    text: getLang("common.day.sun"),
    label: getLang("common.day.sun"),
    value: "0",
  },
  1: {
    text: getLang("common.day.mon"),
    label: getLang("common.day.mon"),
    value: "1",
  },
  2: {
    text: getLang("common.day.tue"),
    label: getLang("common.day.tue"),
    value: "2",
  },
  3: {
    text: getLang("common.day.wed"),
    label: getLang("common.day.wed"),
    value: "3",
  },
  4: {
    text: getLang("common.day.thur"),
    label: getLang("common.day.thur"),
    value: "4",
  },
  5: {
    text: getLang("common.day.fri"),
    label: getLang("common.day.fri"),
    value: "5",
  },
  6: {
    text: getLang("common.day.sat"),
    label: getLang("common.day.sat"),
    value: "6",
  },
};

export const playTypeSource: CommonType.SelectType<string> = {
  mp4: {
    text: getLang("animate.play.kind.mp4"),
    label: getLang("animate.play.kind.mp4"),
    value: "mp4",
  },
  php: {
    text: getLang("animate.play.kind.php"),
    label: getLang("animate.play.kind.php"),
    value: "php",
  },
  m3u8: {
    text: getLang("animate.play.kind.m3u8"),
    label: getLang("animate.play.kind.m3u8"),
    value: "m3u8",
  },
};
