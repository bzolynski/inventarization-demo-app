import * as authActionTypes from '../action-types/auth-action-types';

export interface IAuthState {
    isLoading: boolean;
    isSignout: boolean;
    userToken: string | null;
    username: string;
}

const defaultState = (): IAuthState => ({
    isLoading: false,
    isSignout: true,
    userToken: null,
    username: '',
});

export default (state = defaultState(), action: any): IAuthState => {
    switch (action.type) {
        case authActionTypes.SIGN_IN: {
            const data: authActionTypes.AuthTypes['SIGN_IN'] = action;
            return {
                ...state,
                ...data,
            };
        }
        case authActionTypes.SIGN_OUT: {
            return {
                ...state,
                isLoading: false,
                isSignout: true,
                userToken: null,
                username: '',
            };
        }
        default:
            return state;
    }
};
