import React, {useEffect} from 'react';
import classes from "./InternetStore.component.module.scss";
import {NavLink, Outlet} from "react-router-dom";
import {IInternetStore, Product} from "../../../common/interfaces/InternetStore";
import { ThunkDispatch } from 'redux-thunk';
import {IInternetStoreAction, internetStoreActionCreator} from "./internetStore.actions";
import {useDispatch, useSelector} from "react-redux";
import {MyStore} from "../../../barrel";
import RotateLoader from "react-spinners/RotateLoader";
interface State {
}

type InternetStoreDispatch = ThunkDispatch<State, any, IInternetStoreAction>;

const InternetStoreComponent = () => {

    const dispatch: InternetStoreDispatch = useDispatch();
    const internetStore: IInternetStore = useSelector<MyStore,IInternetStore>((store: MyStore) => store.internetStore);

    useEffect(() => {
        dispatch(internetStoreActionCreator());
        return () => {
            console.log('component "InternetStoreComponent" unmounted!');
        }
    }, [dispatch]);

    function getProductsName(products: Product[], productsLimit = 5) {
        let filteredProducts: Product[];
        if (products.length > productsLimit) {
            filteredProducts = products.slice(0, productsLimit);
        } else {
            filteredProducts = [...products]
        }
        return filteredProducts.map((product: Product) => {
            return <NavLink key={product.id} to={`products/${product.id}`}>{product.title}</NavLink>
        });
    }
    console.log('internetStore:', internetStore);

    return (
        <div className={classes.wrapper}>
            <aside className={classes.aside}>
                <nav>
                    <span className={classes.asideHeader}>Chose your product:</span>

                    <ul>
                        {
                            internetStore.loading
                                ?   <div className={classes.spinnerWrapper}>
                                        <RotateLoader color={"#19b3e6"}/>
                                    </div>
                                : getProductsName(internetStore.products)
                        }
                    </ul>
                </nav>
            </aside>
            <header className={classes.header}>
                <span>Yevhenii's Internet Store</span>
                <nav>
                    <NavLink to={"home"}>Home</NavLink>
                    <NavLink to={"contacts"}>Contacts</NavLink>
                </nav>
            </header>
            <div className={classes.main}>
                <Outlet/>
            </div>
        </div>
    );
};

export default InternetStoreComponent;
