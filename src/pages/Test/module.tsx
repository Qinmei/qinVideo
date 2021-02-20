const sleep = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });

class Components<T extends Record<string, any>> {
  state: T;
  constructor(data: T, handler: <K extends keyof T>(propKey: K, value: T[K]) => void) {
    this.state = new Proxy(data, {
      set: <K extends keyof T>(target: T, propKey: K, value: T[K]) => {
        console.log(target, propKey, value);
        Reflect.set(target, propKey, value);
        handler(propKey, value);
        return true;
      },
    });
  }
}

interface Props {
  loading: boolean;
  select: string[];
}
export class Modules extends Components<Props> {
  init = async () => {
    this.state.loading = true;
    await sleep().finally(() => (this.state.loading = false));
    this.state.select = [];
  };

  update = async () => {
    this.state.select = ["1", "2", "3"];
    await sleep();
    this.init();
  };
}
