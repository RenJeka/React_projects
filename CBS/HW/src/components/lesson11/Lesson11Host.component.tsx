import React from 'react';
import {AuthComponent, MyStore, PostsComponent} from "../../barrel";
import {Link, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { modalOpenAuthActionCreator } from '../lesson9/ProtectedRouteWrapper/protectedComponents.actions';

const Lesson11HostComponent = () => {
    const auth = useSelector((store: MyStore) => store.protectedComponents.auth);
    const dispatch = useDispatch();

    function logOut() {

    }

    return (
        <div>
            <h2>Lesson #11</h2>

            {/*<Link to={'#'}>Log-in</Link>*/}

            {
                auth.name
                ?   <p
                        style={{cursor: 'pointer'}}
                        onClick={() => {}}
                    >{auth.name}</p>
                :   <p
                        style={{cursor: 'pointer'}}
                        onClick={() => {dispatch(modalOpenAuthActionCreator())}}
                    >auth.name</p>
            }

        </div>
    );
};

export default Lesson11HostComponent;
