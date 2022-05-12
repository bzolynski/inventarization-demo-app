import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IAuthState } from '@src/redux-store/reducers/auth-reducers';
import { IStore } from '@src/redux-store/reducers/reducers';
import { useSelector } from 'react-redux';
import { AuthStackScreen } from './auth-stack';
import { sharedOptions } from './navigation-options';
import { WelcomeStackScreen } from './welcome-stack';

const RootStack = createNativeStackNavigator();

export const RootStackScreen = () => {
    const authState = useSelector<IStore, IAuthState>(
        (state) => state.authReducer,
    );

    return (
        <RootStack.Navigator screenOptions={sharedOptions}>
            <>
                {authState.userToken ? (
                    <RootStack.Screen
                        component={AuthStackScreen}
                        name="AuthStack"
                    />
                ) : (
                    <RootStack.Screen
                        component={WelcomeStackScreen}
                        name="WelcomeStack"
                    />
                )}
            </>
        </RootStack.Navigator>
    );
};
