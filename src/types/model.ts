import { Modules, Actions, Reducers, States } from "@/models";
import { Response } from "./request";

export type DispathCustom<T> = (res: Response<T>) => void;

export type { Modules, Actions, Reducers, States };
