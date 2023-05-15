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
    },
    todoList: {
        loading: false,
        operationLoading: false,
        todos: []
    },
    protectedComponents: {
        iAm18: false,
        auth: false,
    },
    internetStore: {
        loading: false,
        products: [],
        productLoading: false,
        currentProduct: null
    },

}

export default initialStore;
