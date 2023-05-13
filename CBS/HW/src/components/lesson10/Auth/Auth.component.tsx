import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IProtectedComponents, MyStore} from "../../../barrel";
import {setAuthActionCreator} from "../../lesson9/ProtectedRouteWrapper/protectedComponents.actions";

const AuthComponent = () => {

    const dispatch = useDispatch();
    const auth = useSelector<MyStore, boolean>((store: MyStore) => store.protectedComponents.auth);
    return (
        <div>
            {
                auth
                ? <button onClick={() => {dispatch(setAuthActionCreator(false))}}>Log-out</button>
                : <button onClick={() => {dispatch(setAuthActionCreator(true))}}>Log-in</button>

            }
        </div>
    );
};

export default AuthComponent;
