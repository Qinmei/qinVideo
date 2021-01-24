import { CreateGlobalStateType } from "@/types/common";
import { createGlobalState } from "react-use";

export const useListLoading = (createGlobalState(
  false
) as unknown) as CreateGlobalStateType<boolean>;

export const useSelect = (createGlobalState<string[]>([]) as unknown) as CreateGlobalStateType<
  string[]
>;
