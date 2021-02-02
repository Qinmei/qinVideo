import { useSelector } from "react-redux";
import { actions as modelActions } from "@/models";
import { ModelType } from "@/types";

export const useModules = <T extends ModelType.Modules>(
  arr: T[]
): [Pick<ModelType.Actions, T>, Pick<ModelType.States, T>] => {
  const actions = {} as Pick<ModelType.Actions, T>;
  const reducers = {} as Pick<ModelType.States, T>;

  arr.forEach(item => {
    reducers[item] = useSelector((state: ModelType.States) => state[item]);
    actions[item] = modelActions[item];
  });

  return [actions, reducers];
};

export const useAction = <T extends ModelType.Modules>(module: T): ModelType.Actions[T] =>
  modelActions[module];

export const useModel = <T extends ModelType.Modules>(module: T): ModelType.States[T] =>
  useSelector((state: ModelType.States) => state[module]);
