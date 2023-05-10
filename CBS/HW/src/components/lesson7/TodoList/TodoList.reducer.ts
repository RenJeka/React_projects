import {initialStore, ITodoList, TodoListItem} from "../../../barrel";
import {ITodoListAction, TodoListActions} from "./TodoList.actions";

export const todoListReducer = (
    todoListFromStore: ITodoList = initialStore.todoList,
    action: ITodoListAction
) => {
    switch (action.type) {
        case TodoListActions.OPERATION_LOADING_START: {
            return {
                ...todoListFromStore,
                operationLoading: true
            };
        }

        case TodoListActions.OPERATION_LOADING_END: {
            return {
                ...todoListFromStore,
                operationLoading: false,
                todos: [...todoListFromStore.todos, action.payload as TodoListItem]
            };
        }

        case TodoListActions.OPERATION_LOADING_ERROR: {
            return {
                ...todoListFromStore,
                operationLoading: false,
            };
        }

        default: {
            return todoListFromStore;
        }
    }
};
