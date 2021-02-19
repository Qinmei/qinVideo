class Components {
  state: Record<string, unknown>;
  constructor(
    data: Record<string, unknown>,
    handler: (propKey: string | number | symbol, value: unknown) => void
  ) {
    this.state = new Proxy(data, {
      set: function (target, propKey, value) {
        console.log(target, propKey, value);
        Reflect.set(target, propKey, value);
        handler(propKey, value);
        return true;
      },
    });
  }
}

export class Modules extends Components {
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
