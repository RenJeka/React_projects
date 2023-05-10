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
            };
        }

        case TodoListActions.OPERATION_LOADING_ERROR: {
            return {
                ...todoListFromStore,
                operationLoading: false,
            };
        }

        case TodoListActions.OPERATION_ADD: {
            return {
                ...todoListFromStore,
                operationLoading: false,
                todos: [...todoListFromStore.todos, action.payload as TodoListItem]
            };
        }

        case TodoListActions.OPERATION_DELETE: {
            return {
                ...todoListFromStore,
                operationLoading: false,
                todos: deleteTodoItem(todoListFromStore.todos, action.payload as TodoListItem)
            };
        }

        case TodoListActions.OPERATION_TOGGLE_CHECK: {
            return {
                ...todoListFromStore,
                operationLoading: false,
                todos: toggleCheckTodoItem(todoListFromStore.todos, action.payload as TodoListItem)
            };
        }

        default: {
            return todoListFromStore;
        }
    }
};

function deleteTodoItem(todoItems: TodoListItem[], deletingItem: TodoListItem): TodoListItem[] {
    const preparedTodos = [...todoItems];
    const indexToDelete = preparedTodos.findIndex(todo => todo.id === deletingItem.id)

    if (indexToDelete >= 0) {
        preparedTodos.splice(indexToDelete, 1)
    }
    return preparedTodos;
}

function toggleCheckTodoItem(todoItems: TodoListItem[], deletingItem: TodoListItem): TodoListItem[] {
    const preparedTodos = [...todoItems];
    const toggleCheckTodoItemIndex = preparedTodos.findIndex(todo => todo.id === deletingItem.id)
    preparedTodos[toggleCheckTodoItemIndex].completed = !preparedTodos[toggleCheckTodoItemIndex].completed;
    return preparedTodos;
}
