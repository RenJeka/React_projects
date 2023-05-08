import {IAsyncTodos, IAsyncTodosActions} from "./asyncTodos.actions";
import initialStore from "../../../redux/initialStore";


export const asyncTodosReducer = (todosFromStore: IAsyncTodos  = initialStore.asyncTodos, action: IAsyncTodosActions) => {

    return todosFromStore;
};
