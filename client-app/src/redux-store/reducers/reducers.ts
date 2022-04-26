import { combineReducers } from 'redux';
import authReducer, { IAuthState } from './auth-reducers';

export default combineReducers({
    authReducer,
});

export interface IStore {
    authReducer: IAuthState;
}
