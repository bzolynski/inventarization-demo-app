export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export interface AuthTypes {
    SIGN_IN: {
        isLoading: boolean;
        isSignout: boolean;
        userToken: string | null;
        username: string;
    };
    SIGN_OUT: any;
}
