import { Modules, Actions, Reducers, States } from "@/models";
import { RequestRes } from "./request";

export type DispathCustom<T> = (res: RequestRes<T>) => void;

export type { Modules, Actions, Reducers, States };
