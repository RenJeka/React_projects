import {combineReducers} from "redux";
import {titleReducer} from "../components/Title/titleReducer";
import {counterReducer} from "../components/ReduxCounter/counterReducer";
import {randomCounterReducer} from "../components/lesson5/ReduxRandomCounter/randomCounterReducer";
import {postsReducer} from "../components/Posts/posts.reducer";

export const reducer = combineReducers(
    {
        title: titleReducer,
        count: counterReducer,
        randomCounter: randomCounterReducer,
        posts: postsReducer
    }
);
