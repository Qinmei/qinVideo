import { useSelector } from "react-redux";
import { actions as models, Actions, Reducers, Modules } from "@/models";

export const useModel = <T extends Modules>(arr: T[]): [Pick<Actions, T>, Pick<Reducers, T>] => {
  const actions = {} as Pick<Actions, T>;
  const reducers = {} as Pick<Reducers, T>;

  arr.forEach(item => {
    reducers[item] = useSelector((state: Reducers) => state[item]);
    actions[item] = models[item];
  });

  return [actions, reducers];
};

export const useAction = <T extends Modules>(module: T): Actions[T] => models[module];

export const useRedux = <T extends Modules>(module: T): Reducers[T] =>
  useSelector((state: Reducers) => state[module]);

export const useLoading = (loadingKeys: string[]): boolean[] =>
  loadingKeys.map(item =>
    useSelector((state: Reducers) => state.loading.loadingKeys.includes(item))
  );
