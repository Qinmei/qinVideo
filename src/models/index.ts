import { combineReducers, Reducer } from "redux";
import { Middleware } from "@/action";
import Loading from "./loading";

type ModulesAll = {
  loading: Loading;
  auth: Loading;
};

export type Modules = keyof ModulesAll;
export type Actions = { [k in Modules]: ModulesAll[k]["methods"] };
export type Reducers = { [k in Modules]: ModulesAll[k]["initialState"] };

const models = [Loading];

let actions: Actions = {} as Actions;
let reducers: any = {};

models.forEach(Model => {
  const model = new Model();
  const name: Modules = model.namespace;

  reducers[name] = model.handler;
  actions[name] = {};

  for (const key in model.methods) {
    actions[name][key] = (data: any, customKey?: string) =>
      Middleware.compose(model.methods[key])(data, customKey || key);
  }
});

const rootReducer = combineReducers(reducers);

export { rootReducer, actions };
