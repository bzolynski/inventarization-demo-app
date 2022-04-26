import { Dispatch } from 'redux';
import * as authActionTypes from '../action-types/auth-action-types';

export const signIn =
    (login: string, password: string) => (dispatch: Dispatch) => {
        // logika logowania, api call etc
        dispatch({
            type: authActionTypes.SIGN_IN,
            isLoading: false,
            isSignout: false,
            username: 'Bartek',
            userToken: 'TOKEN',
        });
    };

export const signOut = () => (dispatch: Dispatch) => {
    // logika wylogowywania, api call etc
    dispatch({
        type: authActionTypes.SIGN_OUT,
    });
};
