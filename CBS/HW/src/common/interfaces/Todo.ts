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
