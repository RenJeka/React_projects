import axios from "axios";
import {Dispatch} from "redux";
import {Product} from "../../../barrel";

export enum InternetStoreActions {
    LOADING_START = 'INTERNET_STORE_LOADING_START',
    LOADING_END = 'INTERNET_STORE_LOADING_END',
    LOADING_ERROR = 'INTERNET_STORE_LOADING_ERROR',
    PRODUCT_LOAD_START = 'INTERNET_STORE_PRODUCT_LOADING_START',
    PRODUCT_LOAD_END = 'INTERNET_STORE_PRODUCT_LOADING_END',
    PRODUCT_LOAD_ERROR = 'INTERNET_STORE_PRODUCT_LOADING_ERROR',
}

export interface IInternetStoreAction {
    type: InternetStoreActions;
    payload?: Product[] | Product
}

export function internetStoreActionCreator() {
    return (dispatch: Dispatch<IInternetStoreAction>) => {
        dispatch({type: InternetStoreActions.LOADING_START})

        setTimeout(() => {
            getProducts();
        }, 1000)

        function getProducts() {
            axios('https://dummyjson.com/products')
                .then(res => {
                    dispatch({
                        type: InternetStoreActions.LOADING_END,
                        payload: res.data.products
                    })
                })
                .catch(error => {
                    dispatch({
                        type: InternetStoreActions.LOADING_ERROR
                    })
                })
        }
    };
}

export function internetStoreProductActionCreator(productId: number) {
    return (dispatch: Dispatch<IInternetStoreAction>) => {
        dispatch({type: InternetStoreActions.PRODUCT_LOAD_START})

        setTimeout(() => {
            getProducts();
        }, 1000)

        function getProducts() {
            axios(`https://dummyjson.com/products/${productId}`)
                .then(res => {
                    dispatch({
                        type: InternetStoreActions.PRODUCT_LOAD_END,
                        payload: res.data
                    })
                })
                .catch(error => {
                    dispatch({
                        type: InternetStoreActions.PRODUCT_LOAD_ERROR
                    })
                })
        }
    };
}
