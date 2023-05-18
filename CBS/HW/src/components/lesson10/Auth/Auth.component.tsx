import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IProtectedComponents, MyStore} from "../../../barrel";
import {
    loginAuthActionCreator, logoutAuthActionCreator,
    modalCloseAuthActionCreator, modalOpenAuthActionCreator,
    setAuthActionCreator
} from "../../lesson9/ProtectedRouteWrapper/protectedComponents.actions";
import ModalComponent from "../../lesson11/Modal/Modal.component";

const AuthComponent = () => {

    const dispatch = useDispatch();
    const auth = useSelector<MyStore, {name: any, modal: boolean}>((store: MyStore) => store.protectedComponents.auth);

    function logOut() {
        dispatch(logoutAuthActionCreator());
        dispatch(modalCloseAuthActionCreator());
    }

    return (
        <div>

            {
                auth.name
                    ?   <span
                        style={{cursor: 'pointer', color: '#fff'}}
                        onClick={() => {logOut()}}
                    >{auth.name}</span>
                    :   <span
                        style={{cursor: 'pointer', color: '#fff'}}
                        onClick={() => {dispatch(modalOpenAuthActionCreator())}}
                    >Login</span>
            }

            {
                auth.modal &&
                    <ModalComponent
                        text={'Lesson 11 Authorization:'}
                        action={
                            <button onClick={() => {
                                dispatch(loginAuthActionCreator());
                                dispatch(modalCloseAuthActionCreator())
                            }}>Login</button>
                        }/>
            }
        </div>
    );
};

export default AuthComponent;
