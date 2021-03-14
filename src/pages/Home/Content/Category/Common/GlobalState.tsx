import { CommonType } from "@/types";
import { createGlobalState } from "react-use";

export const useListLoading = (createGlobalState(
  false
) as unknown) as CommonType.CreateGlobalStateType<boolean>;

export const useSelect = (createGlobalState<string[]>(
  []
) as unknown) as CommonType.CreateGlobalStateType<string[]>;
