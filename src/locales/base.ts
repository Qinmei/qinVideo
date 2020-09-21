export class Language<T> {
  type = {} as { [K in keyof T]: string };
  zh_CN = {} as { [K in keyof T]: string };
  en_US = {} as { [K in keyof T]: string };
  namespace: string;

  constructor(namespace: string) {
    this.namespace = namespace;
    const allKeys = Object.keys(this.zh_CN) as Array<keyof T>;
    allKeys.forEach(item => {
      this.type[item] = `${this.namespace}.${item}`;
    });
  }
}
