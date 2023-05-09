import {asyncTodosActions, IAsyncTodos, IAsyncTodosActions} from "./asyncTodos.actions";
import initialStore from "../../../redux/initialStore";


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
                todos: action.payload || []
            };
        }

        case asyncTodosActions.LOADING_ERROR: {
            return {
                ...todosFromStore,
                loading: false
            }
        }
        default: {
            return todosFromStore;
        }
    }
};
