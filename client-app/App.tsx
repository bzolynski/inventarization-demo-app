import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux';
import ImageBackgroundContainer from '@components/templates/image-background-container';
import TopBarSafeContainer from '@components/templates/top-bar-safe-container';
import WelcomeScreen from '@screens/welcome';
import HomeScreen from '@screens/home';
import LoginScreen from '@screens/login';
import { IStore } from '@redux-store/reducers/reducers';
import { IAuthState } from '@redux-store/reducers/auth-reducers';
import WavesBackgroundContainer from '@components/templates/waves-background-container';
import store from '@redux-store/store';
import InventarisationScreen from '@src/screens/inventarisation';

const RootStack = createNativeStackNavigator();
const WelcomeStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const sharedOptions: NativeStackNavigationOptions = {
    headerShown: false,
    contentStyle: { backgroundColor: 'transparent' },
    gestureEnabled: true,
};

const RootStackScreen = () => {
    const x = useSelector<IStore, IAuthState>((state) => state.authReducer);

    return (
        <RootStack.Navigator screenOptions={sharedOptions}>
            <>
                {x.userToken ? (
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

const WelcomeStackScreen = () => (
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
const AuthStackScreen = () => (
    <WavesBackgroundContainer>
        <AuthStack.Navigator screenOptions={{ ...sharedOptions }}>
            <AuthStack.Screen component={HomeScreen} name="Home" />
            <AuthStack.Screen
                component={InventarisationStackScreen}
                name="InventarisationStack"
            />
        </AuthStack.Navigator>
    </WavesBackgroundContainer>
);
const InventarisationStackScreen = () => (
    <WavesBackgroundContainer>
        <AuthStack.Navigator screenOptions={{ ...sharedOptions }}>
            <AuthStack.Screen
                component={InventarisationScreen}
                name="Inventarisation"
            />
        </AuthStack.Navigator>
    </WavesBackgroundContainer>
);

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStackScreen />
            </NavigationContainer>
        </Provider>
    );
}
