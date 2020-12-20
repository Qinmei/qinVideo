type Tree = { [key: string]: string | Tree };

export class Methods {
  static languageFlat = (data: Tree, parent?: string, source?: Tree): Tree => {
    const newParent = parent ? parent + "." : "";
    const newData = source || ({} as Tree);
    Object.keys(data).forEach(item => {
      if (typeof data[item] === "string") {
        newData[newParent + item] = data[item] as string;
      } else {
        Methods.languageFlat(data[item] as Tree, newParent + item, newData);
      }
    });
    return newData;
  };

  static addLanguagePrefix = (
    langModule: Record<string, string>,
    module: string
  ): Record<string, string> => {
    const res = Object.entries(langModule).map(item => [`${module}.${item[0]}`, item[1]]);
    return Object.fromEntries(res);
  };
}
