export enum CounterActions {
    INC = "INC",
}

export interface myCounter {
    type: CounterActions;
    payload: any
}

export const incActionCreator = (value?: any) => {
    return {
        type: CounterActions.INC,
        payload: value
    }
}
