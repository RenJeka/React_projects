import {CounterActions, ICounterAction} from "./counterActions";
import {initialStore} from "../../barrel";

export const  counterReducer = (count: number = initialStore.count, action: ICounterAction) => {
    switch (action.type) {
        case CounterActions.INC: {
            return ++count;
        }

        default: {
            return count;
        }
    }
}
