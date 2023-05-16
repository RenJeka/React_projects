import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IProtectedComponents, MyStore} from "../../../barrel";
import {
    modalCloseAuthActionCreator,
    setAuthActionCreator
} from "../../lesson9/ProtectedRouteWrapper/protectedComponents.actions";
import ModalComponent from "../../lesson11/Modal/Modal.component";

const AuthComponent = () => {

    const dispatch = useDispatch();
    const auth = useSelector<MyStore, {name: any, modal: boolean}>((store: MyStore) => store.protectedComponents.auth);

    function login() {

    }
    return (
        <div>

            {
                auth.modal &&
                    <ModalComponent text={'Modal text'} action={
                        <button onClick={() => {
                            dispatch(login());
                            dispatch(modalCloseAuthActionCreator())
                        }}>
                            Login
                        </button>
                    }/>
            }

            {
                auth
                ? <button onClick={() => {dispatch(setAuthActionCreator(false))}}>Log-out</button>
                : <button onClick={() => {dispatch(setAuthActionCreator(true))}}>Log-in</button>

            }
        </div>
    );
};

export default AuthComponent;
