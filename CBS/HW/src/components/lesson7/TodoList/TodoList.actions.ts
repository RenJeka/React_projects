import {TodoListItem} from "../../../barrel";
import {Dispatch} from "redux";
import axios from "axios";

export enum TodoListActions {
    LOADING_START = 'TODO_LIST_LOADING_START',
    LOADING_END = 'TODO_LIST_LOADING_END',
    LOADING_ERROR = 'TODO_LIST_LOADING_ERROR',
    OPERATION_LOADING_START = 'TODO_LIST_OPERATION_LOADING_START',
    OPERATION_LOADING_END = 'TODO_LIST_OPERATION_LOADING_END',
    OPERATION_LOADING_ERROR = 'TODO_LIST_OPERATION_LOADING_ERROR',
    OPERATION_ADD = 'TODO_LIST_OPERATION_ADD',
    OPERATION_DELETE = 'TODO_LIST_OPERATION_DELETE',
    OPERATION_TOGGLE_CHECK = 'TODO_LIST_OPERATION_TOGGLE_CHECK',
}

export interface ITodoListAction {
    type: TodoListActions,
    payload?: TodoListItem[] | TodoListItem
}

export function loadTodoListAction() {
    return (dispatch: Dispatch<ITodoListAction>) => {
        dispatch({type: TodoListActions.LOADING_START})

        // setTimeout(() => {
        //     axios(TODOS_URL)
        //         .then(res => {
        //             dispatch({
        //                 type: asyncTodoListActions.LOADING_END,
        //                 payload: res.data
        //             });
        //         })
        //         .catch(error => {
        //             dispatch({
        //                 type: asyncTodoListActions.LOADING_ERROR
        //             })
        //         });
        // }, 3000)
    }
}

export function addTodoListAction(todoListItem: TodoListItem, callback: any) {
    return (dispatch: Dispatch<ITodoListAction>) => {
        dispatch({type: TodoListActions.OPERATION_LOADING_START})

        setTimeout(() => {
            dispatch({
                type: TodoListActions.OPERATION_ADD,
                payload: todoListItem
            });
            callback();
        }, 500)
    }
}

export function deleteTodoListAction(todoListItem: TodoListItem) {
    return (dispatch: Dispatch<ITodoListAction>) => {
        dispatch({type: TodoListActions.OPERATION_LOADING_START})

        setTimeout(() => {
            dispatch({
                type: TodoListActions.OPERATION_DELETE,
                payload: todoListItem
            });
        }, 500)
    }
}

export function toggleCheckTodoListAction(todoListItem: TodoListItem) {
    return (dispatch: Dispatch<ITodoListAction>) => {
        dispatch({type: TodoListActions.OPERATION_LOADING_START})

        setTimeout(() => {
            dispatch({
                type: TodoListActions.OPERATION_TOGGLE_CHECK,
                payload: todoListItem
            });
        }, 500)
    }
}
