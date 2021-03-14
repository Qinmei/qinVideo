import { EposideType } from "@/types";

export const eposideGenerateMany = (
  mode: boolean,
  count: number,
  text: string,
  target: string,
  onModel: EposideType.OnModelType
) => {
  let data: EposideType.CreateListReq = [];
  if (mode) {
    data = Array(count)
      .fill(0)
      .map((item, index) => ({
        title: index + 1,
        sort: index + 1,
        target,
        onModel,
        link: [
          {
            name: "mp4",
            value: `${index.toString().padStart(2, "0")}.mp4`,
          },
        ],
      }));
  } else {
    data = text.split(/[\s\n]/).map((item, index) => ({
      title: item.split("$")[0],
      sort: index + 1,
      target,
      onModel,
      link: [
        {
          name: "mp4",
          value: item.split("$")[1],
        },
      ],
    }));
  }
  return data;
};
