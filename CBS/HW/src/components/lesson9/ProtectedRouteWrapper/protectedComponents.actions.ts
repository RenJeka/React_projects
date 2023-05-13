import { ActionCreator } from 'redux';

export enum IAm18Actions {
    SET = 'IAM18_SET'
}

export interface IProtectedComponentsAction {
    type: IAm18Actions,
    payload?: boolean
}

export const setIAm18ActionCreator:ActionCreator<IProtectedComponentsAction> = (value = false) => {
    return {
        type: IAm18Actions.SET,
        payload: value
    }
}
