import {asyncTodosActions, IAsyncTodosActions} from "./asyncTodos.actions";
import {IAsyncTodos, initialStore, Todo} from "../../../barrel";

export const asyncTodosReducer = (todosFromStore: IAsyncTodos = initialStore.asyncTodos, action: IAsyncTodosActions) => {

    switch (action.type) {
        case asyncTodosActions.LOADING_START: {
            return {
                ...todosFromStore,
                loading: true
            };
        }

        case asyncTodosActions.LOADING_END: {
            return {
                ...todosFromStore,
                loading: false,
                todos: Array.isArray(action.payload) ? action.payload : []
            };
        }

        case asyncTodosActions.LOADING_ERROR: {
            return {
                ...todosFromStore,
                loading: false
            }
        }

        case asyncTodosActions.OPERATION_LOADING_START: {
            return {
                ...todosFromStore,
                operationLoading: true
            };
        }

        case asyncTodosActions.OPERATION_LOADING_END: {
            return {
                ...todosFromStore,
                operationLoading: false,
                todos: [...todosFromStore.todos, action.payload as Todo]
            }
        }

        case asyncTodosActions.OPERATION_LOADING_ERROR: {
            return {
                ...todosFromStore,
                operationLoading: false,
            }
        }
        default: {
            return todosFromStore;
        }
    }
};
