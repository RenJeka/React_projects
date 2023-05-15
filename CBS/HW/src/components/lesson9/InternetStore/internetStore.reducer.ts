import {IInternetStore, initialStore, Product} from "../../../barrel";
import {IInternetStoreAction, InternetStoreActions} from "./internetStore.actions";

export const internetStoreReducer = (
    internetStoreFromStore: IInternetStore = initialStore.internetStore,
    action: IInternetStoreAction
): IInternetStore => {
    switch (action.type) {
        case InternetStoreActions.LOADING_START: {
            return {
                ...internetStoreFromStore,
                loading: true,
            }
        }

        case InternetStoreActions.LOADING_END: {
            return {
                ...internetStoreFromStore,
                loading: false,
                products: action.payload as Product[] || []
            }
        }

        case InternetStoreActions.LOADING_ERROR: {
            return {
                ...internetStoreFromStore,
                loading: false,
            }
        }

        case InternetStoreActions.PRODUCT_LOAD_START: {
            return {
                ...internetStoreFromStore,
                productLoading: true,
            }
        }

        case InternetStoreActions.PRODUCT_LOAD_END: {
            return {
                ...internetStoreFromStore,
                productLoading: false,
                currentProduct: action.payload as Product || null
            }
        }

        case InternetStoreActions.PRODUCT_LOAD_ERROR: {
            return {
                ...internetStoreFromStore,
                productLoading: false,
            }
        }

        default: {
            return internetStoreFromStore;
        }
    }
}
