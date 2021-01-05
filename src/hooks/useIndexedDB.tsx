import localforage from 'localforage';
import { useState, useCallback, Dispatch, SetStateAction, useEffect } from 'react';

export const useIndexedDB = <T,>(
  key: string,
  initialValue: T | undefined,
  initData: () => Promise<T>,
  initJudge: (data: T | undefined) => Promise<boolean> | boolean
): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void] => {
  const [state, setState] = useState<T | undefined>(initialValue);

  const set: Dispatch<SetStateAction<T | undefined>> = useCallback(
    async (value) => {
      await localforage.setItem(key, value);
      setState(value);
    },
    [key, setState]
  );

  const get = useCallback(async () => {
    let value = (await localforage.getItem<T>(key)) as T | undefined;
    const needInit = await initJudge(value);
    if ((value && needInit) || !value) value = await initData();
    setState(value);
    set(value);
  }, [key, setState, initData]);

  const remove = useCallback(async () => {
    await localforage.removeItem(key);
    setState(undefined);
  }, [key, setState]);

  useEffect(() => {
    get();
  }, [get]);

  return [state, set, remove];
};
