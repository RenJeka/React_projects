import {combineReducers} from "redux";
import {titleReducer} from "../components/Title/titleReducer";

export const reducer = combineReducers(
    {
        title: titleReducer,
    }
);
