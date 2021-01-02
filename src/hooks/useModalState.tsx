import { useSetState } from "react-use";
import { HooksType } from "@/types";

type State = {
  visible: boolean;
  loading: boolean;
};

export const useModalState = (): [State, HooksType.ModalStateMethods] => {
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
