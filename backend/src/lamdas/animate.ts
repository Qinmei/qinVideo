import { AnimateType } from "@/types";

export const animateDetailToSubmit = (value: AnimateType.Item) => ({
  ...value,
  area: value.area.map(item => item._id),
  year: value.year.map(item => item._id),
  kind: value.kind.map(item => item._id),
  tag: value.tag.map(item => item._id),
});
