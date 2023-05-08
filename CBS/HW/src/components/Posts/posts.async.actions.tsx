import axios from "axios";
import {Dispatch} from "redux";
import {StorePosts} from "../../redux/initialStore";

export enum PostsAsyncActions {
    LOADING_START = 'LOADING_START',
    LOADING_END = 'LOADING_END',
    LOADING_ERROR = 'LOADING_ERROR',
}

export interface PostsAsyncAction {
    type: PostsAsyncActions;
    payload: any[]
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
