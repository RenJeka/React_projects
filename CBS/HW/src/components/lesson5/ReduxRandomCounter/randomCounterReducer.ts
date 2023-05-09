import {IRandomCounterAction, RandomCounterActions} from "./randomCounterActions";
import {initialStore} from "../../../barrel";

export const randomCounterReducer = (
    counter: number = initialStore.randomCounter,
    action: IRandomCounterAction
) => {
    switch (action.type) {
        case RandomCounterActions.INC: {
            return ++counter
        }

        case RandomCounterActions.DEC: {
            return --counter
        }

        case RandomCounterActions.RESET: {
            return 0
        }

        case RandomCounterActions.RANDOM_INC: {
            return counter + (action.payload || 0);
        }

        default: {
            return counter
        }
    }
}
