import {Dispatch} from "redux";
import axios from "axios";
import {Todo} from "../../../barrel";

export enum asyncTodosActions {
    LOADING_START = 'TODO_LOADING_START',
    LOADING_END = 'TODO_LOADING_END',
    LOADING_ERROR = 'TODO_LOADING_ERROR',
    OPERATION_LOADING_START = 'TODO_OPERATION_LOADING_START',
    OPERATION_LOADING_END = 'TODO_OPERATION_LOADING_END',
    OPERATION_LOADING_ERROR = 'TODO_OPERATION_LOADING_ERROR',
}


export interface IAsyncTodosActions {
    type: asyncTodosActions,
    payload?: Todo[] | Todo
}


const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

export function loadAsyncTodosActionCreator() {
    return (dispatch: Dispatch<IAsyncTodosActions>) => {
        dispatch({type: asyncTodosActions.LOADING_START})

        setTimeout(() => {
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
        }, 3000)
    }
}

export function addAsyncTodoActionCreator(todo: Todo) {
    return (dispatch: Dispatch<IAsyncTodosActions>) => {
        dispatch({type: asyncTodosActions.OPERATION_LOADING_START})

        setTimeout(() => {
            axios.post(
                TODOS_URL,
                todo
            )
                .then(res => {
                    console.log('ADD res:', res);

                    dispatch({
                        type: asyncTodosActions.OPERATION_LOADING_END,
                        payload: res.data
                    });
                })
                .catch(error => {
                    console.log('ADD error:', error);
                    dispatch({
                        type: asyncTodosActions.OPERATION_LOADING_ERROR
                    })
                });
        }, 1500)
    }
}
