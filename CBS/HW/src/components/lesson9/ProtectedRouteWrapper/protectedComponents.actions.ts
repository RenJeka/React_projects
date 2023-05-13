import { ActionCreator } from 'redux';

export enum IAm18Actions {
    SET = 'IAM18_SET'
}

export enum AuthActions {
    SET = 'AUTH_SET'
}

export interface IProtectedComponentsAction {
    type: IAm18Actions | AuthActions,
    payload?: boolean
}

export const setIAm18ActionCreator:ActionCreator<IProtectedComponentsAction> = (value = false) => {
    return {
        type: IAm18Actions.SET,
        payload: value
    }
}

export const setAuthActionCreator:ActionCreator<IProtectedComponentsAction> = (value = false) => {
    return {
        type: AuthActions.SET,
        payload: value
    }
}
