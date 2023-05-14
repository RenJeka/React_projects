import axios from "axios";
import {Dispatch} from "redux";
import {Post} from "../../../barrel";

export enum PostsAsyncActions {
    LOADING_START = 'POSTS_LOADING_START',
    LOADING_END = 'POSTS_LOADING_END',
    LOADING_ERROR = 'POSTS_LOADING_ERROR',
}

export interface PostsAsyncAction {
    type: PostsAsyncActions;
    payload?: Post[]
}

export default function postActionCreator() {
    return (dispatch: Dispatch) => {
        dispatch({type: PostsAsyncActions.LOADING_START})

        setTimeout(() => {
            getPosts();
        }, 3000)

        function getPosts() {
            axios('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    dispatch({
                        type: PostsAsyncActions.LOADING_END,
                        payload: res.data
                    })
                })
                .catch(error => {
                    dispatch({
                        type: PostsAsyncActions.LOADING_ERROR
                    })
                })
        }
    };
}
