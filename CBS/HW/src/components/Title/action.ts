import {Action, ActionCreator} from "redux";

export interface myAction {
    type: TitleActions;
    payload: any
}

export enum TitleActions {
    CHANGE_TITLE = "CHANGE_TITLE",
}

export const changeTitle: ActionCreator<myAction> = (value) => {
    return {
        type: TitleActions.CHANGE_TITLE,
        payload: value
    }
}
