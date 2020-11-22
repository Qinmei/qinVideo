import { store } from "./index";

class Middleware {
  static chain: Function[] = [];

  static applyMiddleware(...func: Function[]) {
    this.chain.push(...func);
  }

  static compose(args: Record<string, unknown>) {
    return this.chain.reduceRight((args, fn) => fn(args), args);
  }

  static sendRequestKeys(key: string, before = true) {
    const state: any = store.getState();
    const {
      loading: { loadingKeys },
    } = state;

    const newResKeys = loadingKeys.filter((item: string) => item !== key);

    store.dispatch({
      type: "loading",
      payload: {
        loadingKeys: before ? newResKeys.concat(key) : newResKeys,
      },
    });
  }

  static loading = (next: Function) => async (data: Record<string, unknown>, key: string) => {
    Middleware.sendRequestKeys(key);

    const result = await next(data);

    Middleware.sendRequestKeys(key, false);

    return result;
  };
}

Middleware.applyMiddleware(Middleware.loading);

export default Middleware;
