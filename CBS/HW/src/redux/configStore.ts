import {applyMiddleware, compose, createStore, Store} from "redux";
import initialStore from "./initialStore";
import {reducer} from "./rootReducer";
import thunk from "redux-thunk";

const store: Store = createStore(
    reducer,
    initialStore,
    compose(
        applyMiddleware(thunk),
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
