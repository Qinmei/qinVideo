import { AnimateType, CommonType } from "@/types";
import { createGlobalState } from "react-use";

export const useListLoading = (createGlobalState(
  false
) as unknown) as CommonType.CreateGlobalStateType<boolean>;

export const useSelect = (createGlobalState<string[]>(
  []
) as unknown) as CommonType.CreateGlobalStateType<string[]>;

export const animateOrigin: AnimateType.FormValues = {
  title: "",
  slug: "",
  introduce: "",
  status: CommonType.Status.draft,
  isUpdate: false,
  rateCount: 1000,
  rateStar: 8,
  updateDay: 0,
  firstPlay: undefined,
  area: [],
  year: [],
  kind: [],
  tag: [],
  impression: "",
  actor: "",
  staff: "",
  noPrefix: false,
  level: 0,
  playType: "mp4",
  downTitle: "",
  downLink: "",
  linkPrefix: "",
  season: "",
  coverHorizontal: "",
  coverVertical: "",
};
