export type Users = {
    [key: string]: Todo[];
};

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
