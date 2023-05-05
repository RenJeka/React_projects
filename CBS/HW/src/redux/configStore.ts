import {createStore, Store} from "redux";
import initialStore from "./initialStore";
import {reducer} from "./rootReducer";

const store: Store = createStore(
    reducer,
    initialStore,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
