import React from 'react';
import { IAm18Component, IProtectedComponents, MyStore } from '../../../barrel';
import { useSelector } from 'react-redux';
import { Navigate, redirect } from 'react-router';
import { setIAm18ActionCreator } from './protectedComponents.actions';

const ProtectedRouteWrapperComponent = () => {

    const protectedComponents = useSelector<MyStore, IProtectedComponents>((store) => store.protectedComponents);

    // tslint:disable-next-line:no-console
    console.log('protectedComponents: ', protectedComponents);

    return (
        <>
            {
                protectedComponents.iAm18
                ? <IAm18Component/>
                : <Navigate to={'/login'}/>
            }
        </>
    );
};

export default ProtectedRouteWrapperComponent;
