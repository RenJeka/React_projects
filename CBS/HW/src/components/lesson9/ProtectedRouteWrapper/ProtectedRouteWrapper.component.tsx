import React, {ReactNode} from 'react';
import {IAm18Component, IProtectedComponents, MyStore} from '../../../barrel';
import {useSelector} from 'react-redux';
import {Navigate, redirect} from 'react-router';
import {setIAm18ActionCreator} from './protectedComponents.actions';

// export enum AuthTypes {
//     AUTH = 'AUTH',
//     I18 = 'I18',
// }

interface Props {
    // authType: AuthTypes;
    protectedComponentsName: keyof IProtectedComponents;
    pathToRedirect: string;
    children?: JSX.Element;
}


const ProtectedRouteWrapperComponent = (props: Props) => {

    const protectedComponents = useSelector<MyStore, IProtectedComponents>((store) => store.protectedComponents);

    // tslint:disable-next-line:no-console
    console.log('protectedComponents: ', protectedComponents);

    // switch (props.authType) {
    //     case AuthTypes.AUTH: {
    //         return  protectedComponents.iAm18
    //                 ? <IAm18Component/>
    //                 : <Navigate to={'/login'}/>
    //     }
    //
    //     case AuthTypes.I18: {
    //         return  protectedComponents.iAm18
    //             ? <IAm18Component/>
    //             : <Navigate to={'/login'}/>
    //     }
    //
    //     default: {
    //         return <Navigate to={'/login'}/>
    //     }

    switch (props.protectedComponentsName) {
        case 'auth': {
            if (!protectedComponents.auth.name) {
                return <Navigate to={props.pathToRedirect}/>;
            } else {
                return props.children ? props.children : <Navigate to={props.pathToRedirect}/>
            }
        }

        case 'iAm18': {
            if (!protectedComponents.iAm18) {
                return <Navigate to={props.pathToRedirect}/>;
            } else {
                return props.children ? props.children : <Navigate to={props.pathToRedirect}/>
            }
        }

        default: {
            return props.children ? props.children : <Navigate to={props.pathToRedirect}/>
        }
    }

};

export default ProtectedRouteWrapperComponent;
