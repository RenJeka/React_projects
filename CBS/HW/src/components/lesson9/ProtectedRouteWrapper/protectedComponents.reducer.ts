import { initialStore, IProtectedComponents } from '../../../barrel';
import { IAm18Actions, IProtectedComponentsAction } from './protectedComponents.actions';

export const  protectedComponentsReducer = (protectedComponents: IProtectedComponents = initialStore.protectedComponents, action: IProtectedComponentsAction) => {
    switch (action.type) {
        case IAm18Actions.SET: {
            return {
                ...protectedComponents,
                iAm18: action.payload || false
            };
        }

        default: {
            return protectedComponents;
        }
    }
}
