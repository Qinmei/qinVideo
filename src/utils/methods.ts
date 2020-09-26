type Tree = { [key: string]: string | Tree };

export class Methods {
  static languageFlat = (data: Tree, parent = ""): Tree => {
    const newData = {} as { [key: string]: string };
    Object.keys(data).forEach(item => {
      if (typeof data[item] === "string") {
        newData[(parent ? parent + "." : "") + item] = data[item] as string;
      } else {
        Methods.languageFlat(data[item] as Tree, (parent ? parent + "." : "") + "." + item);
      }
    });
    return newData;
  };
}
