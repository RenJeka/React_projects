import {Dispatch} from "redux";
import axios from "axios";
import {Todo} from "../../../barrel";

export enum asyncTodosActions {
    LOADING_START = 'LOADING_START',
    LOADING_END = 'LOADING_END',
    LOADING_ERROR = 'LOADING_ERROR',
    ADD_TODO = 'ADD_TODO',
}

export interface IAsyncTodos {
    loading: boolean,
    todos: Todo[]
}

export interface IAsyncTodosActions {
    type: asyncTodosActions,
    payload?: Todo[]
}


const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

export function loadAsyncTodosActionCreator() {
    return (dispatch: Dispatch<IAsyncTodosActions>) => {
        axios(TODOS_URL)
            .then(res => {
                dispatch({
                    type: asyncTodosActions.LOADING_END,
                    payload: res.data
                });
            })
            .catch(error => {
                dispatch({
                    type: asyncTodosActions.LOADING_ERROR
                })
            });
    }
}
