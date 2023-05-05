
export enum RandomCounterActions {
    INC = 'INC',
    RANDOM_INC = 'RANDOM_INC',
    DEC = 'DEC',
    RESET = 'RESET',
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
