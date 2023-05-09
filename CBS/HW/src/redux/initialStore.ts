import {MyStore} from "../barrel";

const initialStore: MyStore = {
    title: "Redux",
    count: 0,
    randomCounter: 0,
    list: [],
    posts: {
        loading: false,
        posts: []
    },
    asyncTodos: {
        loading: false,
        operationLoading: false,
        todos: []
    }
}

export default initialStore;
