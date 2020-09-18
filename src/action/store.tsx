import { createStore, Store } from "redux";
import { rootReducer } from "@/models";
import { composeWithDevTools } from "redux-devtools-extension";

const store: Store = createStore(rootReducer, composeWithDevTools());

export default store;
