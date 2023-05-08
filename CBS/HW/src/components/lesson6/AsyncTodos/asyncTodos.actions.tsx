export enum asyncTodosActions {
    LOADING_START = 'LOADING_START',
    LOADING_END = 'LOADING_END',
    LOADING_ERROR = 'LOADING_ERROR',
    ADD_TODO = 'ADD_TODO',
}

interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface IAsyncTodos {
    loading: boolean,
    todos: ITodo[]
}

export interface IAsyncTodosActions {
    type: asyncTodosActions,
    payload: IAsyncTodos
}
