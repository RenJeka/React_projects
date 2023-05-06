export interface MyStore {
    title: string,
    count: number,
    randomCounter: number,
    list: string[]

}

const initialStore: MyStore = {
    title: "Redux",
    count: 0,
    randomCounter: 0,
    list: []
}

export default initialStore;
