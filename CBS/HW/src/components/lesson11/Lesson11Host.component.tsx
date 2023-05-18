import React from 'react';
import {AuthComponent, MyStore, PostsComponent} from "../../barrel";
import {Link, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    logoutAuthActionCreator,
    modalCloseAuthActionCreator,
    modalOpenAuthActionCreator
} from '../lesson9/ProtectedRouteWrapper/protectedComponents.actions';

const Lesson11HostComponent = () => {


    return (
        <div>
            <h2>Lesson #11</h2>

            <Link to={'auth'}>Auth</Link>



            <Outlet/>

        </div>
    );
};

export default Lesson11HostComponent;
