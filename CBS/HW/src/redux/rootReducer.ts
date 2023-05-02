import {combineReducers} from "redux";
import {titleReducer} from "../components/Title/titleReducer";
import {counterReducer} from "../components/ReduxCounter/counterReducer";

export const reducer = combineReducers(
    {
        title: titleReducer,
        count: counterReducer
    }
);
