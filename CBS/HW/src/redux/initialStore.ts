export interface MyStore {
    title: string,
    count: number,
    randomCounter: number
}

const initialStore: MyStore = {
    title: "Redux",
    count: 0,
    randomCounter: 0
}

export default initialStore;
