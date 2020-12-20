import { useSelector } from "react-redux";
import { actions as modelActions } from "@/models";
import { Modules, Actions, States } from "@/types/model";

export const useModules = <T extends Modules>(arr: T[]): [Pick<Actions, T>, Pick<States, T>] => {
  const actions = {} as Pick<Actions, T>;
  const reducers = {} as Pick<States, T>;

  arr.forEach(item => {
    reducers[item] = useSelector((state: States) => state[item]);
    actions[item] = modelActions[item];
  });

  return [actions, reducers];
};

export const useAction = <T extends Modules>(module: T): Actions[T] => modelActions[module];

export const useModel = <T extends Modules>(module: T): States[T] =>
  useSelector((state: States) => state[module]);
