import initialStore from "../../redux/initialStore";
import {CounterActions, myCounter} from "./counterActions";

export const  counterReducer = (count: number = initialStore.count, action: myCounter) => {
    switch (action.type) {
        case CounterActions.INC: {
            return ++count;
        }

        default: {
            return count;
        }
    }
}
