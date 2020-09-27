// export type Join<K, P> = K extends string | number ?
//     P extends string | number ?
//     `${K}${"" extends P ? "" : "."}${P}`
//     : never : never;

export type Join<K, P> = string;

export type Paths<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T]-?: K extends string ? Join<K, Paths<T[K]>> : never;
    }[keyof T]
  : "";
