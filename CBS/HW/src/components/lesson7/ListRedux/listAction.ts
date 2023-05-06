import {ActionCreator} from "redux";

export enum ListActions {
    ADD_ITEM = 'ADD_ITEM',
}

export interface IListAction {
    type: ListActions;
    payload: string
}

export const addItemActionCreator: ActionCreator<IListAction> = (value: string) => {
    return {
        type: ListActions.ADD_ITEM,
        payload: value
    }
}
