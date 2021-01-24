import { Auth } from "./auth";
import { Global } from "./global";
import { Animate } from "./animate";
import { Category } from "./category";
import { Common } from "./common";
import { Eposide } from "./eposide";

type Models = {
  auth: Auth;
  animate: Animate;
  category: Category;
  global: Global;
  common: Common;
  eposide: Eposide;
};
export type Modules = keyof Models;
export type Reducers = { [k in Modules]: Models[k]["handler"] };
export type Actions = { [k in Modules]: Models[k]["methods"] };
export type States = { [k in Modules]: Models[k]["initialState"] };

const models = [Auth, Global, Animate, Category, Common, Eposide];

const actions = {} as Actions;
const reducers = {} as Reducers;

models.forEach(Model => {
  const model = new Model();
  const name: Modules = model.namespace;

  // @ts-ignore
  reducers[name] = model.handler;
  // @ts-ignore
  actions[name] = model.methods;
});

export { actions, reducers };
