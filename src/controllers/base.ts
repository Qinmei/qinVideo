import { equal } from "assert";
import { equals } from "ramda";

export class Controller<T extends Record<string, any>> {
  state: T;
  constructor(
    public initialState: T,
    handler: <K extends keyof T>(propKey: K, value: T[K]) => void
  ) {
    this.state = new Proxy(initialState, {
      set: <K extends keyof T>(target: T, propKey: K, value: T[K]) => {
        const prevValue = Reflect.get(target, propKey);
        if (equals(prevValue, value)) return true;

        Reflect.set(target, propKey, value);
        handler(propKey, value);
        return true;
      },
    });
  }
}
