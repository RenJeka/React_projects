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

export const loginAuthActionCreator:ActionCreator<IProtectedComponentsAction> = (value = false) => {
    return {
        type: AuthActions.LOGIN,
        payload: value
    }
}

export const logoutAuthActionCreator:ActionCreator<IProtectedComponentsAction> = (value = false) => {
    return {
        type: AuthActions.LOGOUT,
        payload: value
    }
}

export const modalOpenAuthActionCreator:ActionCreator<IProtectedComponentsAction> = (value = false) => {
    return {
        type: AuthActions.MODAL_OPEN,
        payload: value
    }
}

export const modalCloseAuthActionCreator:ActionCreator<IProtectedComponentsAction> = (value = false) => {
    return {
        type: AuthActions.MODAL_CLOSE,
        payload: value
    }
}
