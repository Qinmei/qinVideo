export class Language<T> {
  type = {} as { [K in keyof T]: K };
  zh_CN = {} as { [K in keyof T]: string };
  en_US = {} as { [K in keyof T]: string };

  constructor(
    zh_CN: { [K in keyof T]: string },
    en_US: { [K in keyof T]: string }
  ) {
    const allKeys = Object.keys(zh_CN) as Array<keyof T>;
    allKeys.forEach(item => {
      this.type[item] = item;
    });
    this.zh_CN = zh_CN;
    this.en_US = en_US;
  }
}
