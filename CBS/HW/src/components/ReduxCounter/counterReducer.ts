import initialStore from "../../redux/initialStore";
import {CounterActions, ICounterAction} from "./counterActions";

export const  counterReducer = (count: number = initialStore.count, action: ICounterAction) => {
    switch (action.type) {
        case CounterActions.INC: {
            return ++count;
        }

        case CounterActions.DEC: {
            return --count;
        }

        case CounterActions.RESET: {
            return 0;
        }

        default: {
            return count;
        }
    }
}
