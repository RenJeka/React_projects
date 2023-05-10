export enum CounterActions {
    INC = "COUNTER_INCREMENT",
    DEC = "COUNTER_DECREMENT",
    RESET = "COUNTER_RESET",
}

export interface ICounterAction {
    type: CounterActions;
    payload: any
}

export const incActionCreator = () => {
    return {
        type: CounterActions.INC,
    }
}

export const decActionCreator = () => {
    return {
        type: CounterActions.DEC,
    }
}

export const resetActionCreator = () => {
    return {
        type: CounterActions.RESET,
    }
}
