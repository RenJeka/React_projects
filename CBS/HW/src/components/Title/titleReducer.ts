import {myAction, TitleActions} from "./action";
import {initialStore} from "../../barrel";

export const  titleReducer = (title: string = initialStore.title, action: myAction) => {
    switch (action.type) {
        case TitleActions.CHANGE_TITLE: {
            return action.payload;
        }
        
        default: {
            return title;
        }
    }
}

 // default titleReducer;

