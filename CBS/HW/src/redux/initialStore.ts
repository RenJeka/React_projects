export interface MyStore {
    title: string,
    count: number
}

const initialStore: MyStore = {
    title: "Redux",
    count: 0,
}

export default initialStore;
