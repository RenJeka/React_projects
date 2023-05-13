import React from 'react';
import { setIAm18ActionCreator } from '../ProtectedRouteWrapper/protectedComponents.actions';
import { useDispatch, useSelector } from 'react-redux';
import { MyStore } from '../../../common/interfaces/Store';
import { IProtectedComponents } from '../../../common/interfaces/ProtectedComponents';
import classes from './Login.component.module.scss';

const LoginComponent = () => {


    const dispatch = useDispatch()
    const protectedComponents = useSelector<MyStore, IProtectedComponents>((store) => store.protectedComponents);

    return (
        <article className={classes.wrapper}>
            <header>Login</header>
            {
                protectedComponents.iAm18
                ? <button onClick={() => dispatch(setIAm18ActionCreator(false))}>I am not 18</button>
                : <button onClick={() => dispatch(setIAm18ActionCreator(true))}>I am 18</button>
            }
        </article>
    );
};

export default LoginComponent;
