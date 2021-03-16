import { createStore, combineReducers, Store } from "redux";
import { reducers } from "@/models";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers(reducers);

export const store: Store = createStore(rootReducer, composeWithDevTools());
