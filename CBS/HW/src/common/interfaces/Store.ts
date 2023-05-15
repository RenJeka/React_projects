import {IAsyncPosts} from "./Posts";
import {IAsyncTodos, ITodoList} from "./Todo";
import {IProtectedComponents} from './ProtectedComponents';
import {IInternetStore} from "./InternetStore";

export interface MyStore {
    title: string,
    count: number,
    list: string[],
    randomCounter: number,
    posts: IAsyncPosts,
    asyncTodos: IAsyncTodos,
    todoList: ITodoList,
    protectedComponents: IProtectedComponents,
    internetStore: IInternetStore
}
