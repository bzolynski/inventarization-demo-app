import { combineReducers } from 'redux';
import inventarizationReducer, {
    IInventarizationState,
} from './inventarization-reducers';
import authReducer, { IAuthState } from './auth-reducers';
import documentsReducer, {
    DocumentsState,
} from '@src/documents/data-access/store/documents-reducer';
export default combineReducers({
    authReducer,
    inventarizationReducer,
    documentsReducer,
});

export interface IStore {
    authReducer: IAuthState;
    inventarizationReducer: IInventarizationState;
    documentsReducer: DocumentsState;
}
