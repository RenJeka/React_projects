export type Users = {
    [userId: string]: Todo[];
};

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
