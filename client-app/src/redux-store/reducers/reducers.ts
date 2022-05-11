import { combineReducers } from 'redux';
import inventarizationReducer, {
    IInventarizationState,
} from './inventarization-reducers';
import authReducer, { IAuthState } from './auth-reducers';

export default combineReducers({
    authReducer,
    inventarizationReducer,
});

export interface IStore {
    authReducer: IAuthState;
    inventarizationReducer: IInventarizationState;
}
