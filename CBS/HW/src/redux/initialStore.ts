export interface StorePosts {
    loading: boolean,
    posts: any[]
}

export interface MyStore {
    title: string,
    count: number,
    posts: StorePosts
}

const initialStore: MyStore = {
    title: "Redux",
    count: 0,
    posts: {
        loading: false,
        posts: []
    }
}

export default initialStore;
