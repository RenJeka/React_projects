
export enum RandomCounterActions {
    INC = 'RANDOM_COUNTER_INCREMENT',
    RANDOM_INC = 'RANDOM_COUNTER_INCREMENT_RANDOM',
    DEC = 'RANDOM_COUNTER_DECREMENT',
    RESET = 'RANDOM_COUNTER_RESET',
}

export interface IRandomCounterAction {
    type: RandomCounterActions,
    payload?: number
}

export const incRandomCounterActionCreator = (): IRandomCounterAction => {
    return {
        type: RandomCounterActions.INC,
    }
}

export const decRandomCounterActionCreator = (): IRandomCounterAction => {
    return {
        type: RandomCounterActions.DEC
    }
}

export const resetRandomCounterActionCreator = (): IRandomCounterAction => {
    return {
        type: RandomCounterActions.RESET
    }
}

export const randomIncRandomCounterActionCreator = (value?: number): IRandomCounterAction => {
    return {
        type: RandomCounterActions.RANDOM_INC,
        payload: value
    }
}
