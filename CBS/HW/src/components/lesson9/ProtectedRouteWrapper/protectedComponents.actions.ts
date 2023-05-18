import { ActionCreator } from 'redux';

export enum IAm18Actions {
    SET = 'IAM18_SET'
}

export enum AuthActions {
    SET = 'AUTH_SET',
    LOGIN = 'AUTH_LOGIN',
    LOGOUT = 'AUTH_LOGOUT',
    MODAL_OPEN = 'AUTH_MODAL_OPEN',
    MODAL_CLOSE = 'AUTH_MODAL_CLOSE',
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

export const loginAuthActionCreator:ActionCreator<IProtectedComponentsAction> = () => {
    return {
        type: AuthActions.LOGIN,
    }
}

export const logoutAuthActionCreator:ActionCreator<IProtectedComponentsAction> = () => {
    return {
        type: AuthActions.LOGOUT,
    }
}

export const modalOpenAuthActionCreator:ActionCreator<IProtectedComponentsAction> = () => {
    return {
        type: AuthActions.MODAL_OPEN,
    }
}

export const modalCloseAuthActionCreator:ActionCreator<IProtectedComponentsAction> = () => {
    return {
        type: AuthActions.MODAL_CLOSE,
    }
}
