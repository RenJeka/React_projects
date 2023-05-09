import {IAsyncPosts} from "./Posts";
import {IAsyncTodos} from "./Todo";

export interface MyStore {
    title: string,
    count: number,
    list: string[],
    randomCounter: number,
    posts: IAsyncPosts,
    asyncTodos: IAsyncTodos
}
