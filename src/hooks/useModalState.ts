import { useSetState } from "react-use";

type State = {
  visible: boolean;
  loading: boolean;
};

type Methods = {
  show: () => void;
  hide: () => void;
  load: () => void;
  fail: () => void;
  cancel: () => void;
};
export const useModalState = (): [State, Methods] => {
  const [state, setState] = useSetState({ visible: false, loading: false });

  const methods = {
    show: () => setState({ visible: true }),
    hide: () => setState({ visible: false }),
    load: () => setState({ loading: true }),
    fail: () => setState({ loading: false }),
    cancel: () => setState({ visible: false, loading: false }),
  };

  return [state, methods];
};
