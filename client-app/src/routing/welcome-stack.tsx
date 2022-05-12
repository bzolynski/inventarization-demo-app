import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImageBackgroundContainer from '@src/components/templates/image-background-container';
import TopBarSafeContainer from '@src/components/templates/top-bar-safe-container';
import LoginScreen from '@src/screens/login';
import WelcomeScreen from '@src/screens/welcome';
import { sharedOptions } from './navigation-options';

export type WelcomeStackParamList = {
    Welcome: undefined;
    Login: undefined;
};

const WelcomeStack = createNativeStackNavigator<WelcomeStackParamList>();

export const WelcomeStackScreen = () => (
    <ImageBackgroundContainer>
        <TopBarSafeContainer>
            <WelcomeStack.Navigator
                initialRouteName="Welcome"
                screenOptions={{ ...sharedOptions }}>
                <WelcomeStack.Screen component={WelcomeScreen} name="Welcome" />
                <WelcomeStack.Screen
                    component={LoginScreen}
                    name="Login"
                    options={{ animation: 'slide_from_bottom' }}
                />
            </WelcomeStack.Navigator>
        </TopBarSafeContainer>
    </ImageBackgroundContainer>
);
