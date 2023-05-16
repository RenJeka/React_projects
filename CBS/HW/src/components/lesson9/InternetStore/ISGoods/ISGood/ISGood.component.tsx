import React, {useEffect} from 'react';
import {Params, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {IInternetStore} from "../../../../../common/interfaces/InternetStore";
import {MyStore} from "../../../../../common/interfaces/Store";
import {
    IInternetStoreAction,
    internetStoreProductActionCreator
} from "../../internetStore.actions";
import {ThunkDispatch} from "redux-thunk";
import RotateLoader from "react-spinners/RotateLoader";
import classes from "./ISGood.component.module.scss"

// interface IGoodParams {
//     goodId: string
// }

interface State {
}

type InternetStoreDispatch = ThunkDispatch<State, any, IInternetStoreAction>;

const ISGoodComponent = () => {

    const params = useParams();
    const dispatch: InternetStoreDispatch = useDispatch();
    const internetStore: IInternetStore = useSelector<MyStore,IInternetStore>((store: MyStore) => store.internetStore);

    useEffect(() => {
        dispatch(internetStoreProductActionCreator(parseInt(params.goodId as string)));
        return () => {
            console.log('component "InternetStoreComponent" unmounted!');
        }
    }, [params]);

    return (
        <div className={classes.wrapper}>
            {
                internetStore.productLoading
                    ?   <div className={classes.spinnerWrapper}>
                            <RotateLoader color={"#19b3e6"}/>
                        </div>
                    :   <div className={classes.productWrapper}>
                            {internetStore.currentProduct?.title}
                            <div className={classes.imageWrapper}>
                                <img src={internetStore.currentProduct?.images[0]} alt=""/>
                            </div>
                            <div className={classes.tableWrapper}>
                                <table>
                                    <thead>
                                        <th>Characteristic name</th>
                                        <th>Characteristic value</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
            }
        </div>
    );
};

export default ISGoodComponent;
