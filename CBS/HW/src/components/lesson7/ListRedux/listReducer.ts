import initialStore from "../../../redux/initialStore";
import {IListAction, ListActions} from "./listAction";

export const  listReducer = (list: string[] = initialStore.list, action: IListAction) => {
    switch (action.type) {
        case ListActions.ADD_ITEM: {
            const returnedList = [...list];
            returnedList.push(action.payload)
            return returnedList;
        }
        
        default: {
            return list;
        }
    }
}
