import {createStore, Store} from "redux";
import initialStore from "./initialStore";
import {reducer} from "./rootReducer";

const store: Store = createStore(reducer, initialStore);
// const store:Store = {} as Store;

export default store;
