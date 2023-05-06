export interface StorePosts {
    loading: boolean,
    posts: any[]
}

export interface MyStore {
    title: string,
    count: number,
    list: string[],
    randomCounter: number,
    posts: StorePosts,
}

const initialStore: MyStore = {
    title: "Redux",
    count: 0,
    randomCounter: 0,
    list: [],
    posts: {
        loading: false,
        posts: []
    }
}

export default initialStore;
