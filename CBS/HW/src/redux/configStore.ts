import {applyMiddleware, compose, createStore, Store} from "redux";
import initialStore from "./initialStore";
import {reducer} from "./rootReducer";
import thunk from "redux-thunk";

let store: Store;
store = createStore(
    reducer,
    initialStore,

    compose(
        applyMiddleware(thunk),
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
// const store:Store = {} as Store;

export default store;
