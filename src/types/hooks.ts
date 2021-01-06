export type ModalStateMethods = {
  show: () => void;
  hide: () => void;
  load: () => void;
  fail: () => void;
  cancel: () => void;
};

export type SessionCacheType<T> = {
  data: T;
  expired: number;
};
