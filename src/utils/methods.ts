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
}
