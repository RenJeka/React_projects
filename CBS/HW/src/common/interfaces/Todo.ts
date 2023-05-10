export type Users = {
    [userId: string]: Todo[];
};

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface IAsyncTodos {
    loading: boolean,
    operationLoading: boolean,
    todos: Todo[]
}

export interface TodoListItem {
    id: number,
    title: string,
    completed: boolean
}

export interface ITodoList {
    loading: boolean,
    operationLoading: boolean,
    todos: TodoListItem[]
}
