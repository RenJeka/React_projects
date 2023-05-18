import { initialStore, IProtectedComponents } from '../../../barrel';
import {AuthActions, IAm18Actions, IProtectedComponentsAction} from './protectedComponents.actions';

export const  protectedComponentsReducer = (
    protectedComponents: IProtectedComponents = initialStore.protectedComponents,
    action: IProtectedComponentsAction
) => {
    switch (action.type) {
        case IAm18Actions.SET: {
            return {
                ...protectedComponents,
                iAm18: action.payload || false
            };
        }

        case AuthActions.SET: {
            return {
                ...protectedComponents,
                auth: {
                    name: action.payload || false,
                    modal: false
                }
            };
        }

        case AuthActions.LOGIN: {
            return {
                ...protectedComponents,
                auth: {
                    ...protectedComponents.auth,
                    name: 'Admin',
                }
            };
        }

        case AuthActions.LOGOUT: {
            return {
                ...protectedComponents,
                auth: {
                    ...protectedComponents.auth,
                    name: action.payload || '',
                }
            };
        }

        case AuthActions.MODAL_OPEN: {
            return {
                ...protectedComponents,
                auth: {
                    ...protectedComponents.auth,
                    modal: true
                }
            };
        }

        case AuthActions.MODAL_CLOSE: {
            return {
                ...protectedComponents,
                auth: {
                    ...protectedComponents.auth,
                    modal: false
                }
            };
        }

        default: {
            return protectedComponents;
        }
    }
}
