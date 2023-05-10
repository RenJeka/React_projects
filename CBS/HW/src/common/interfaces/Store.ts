import {IAsyncPosts} from "./Posts";
import {IAsyncTodos, ITodoList} from "./Todo";

export interface MyStore {
    title: string,
    count: number,
    list: string[],
    randomCounter: number,
    posts: IAsyncPosts,
    asyncTodos: IAsyncTodos,
    todoList: ITodoList
}
