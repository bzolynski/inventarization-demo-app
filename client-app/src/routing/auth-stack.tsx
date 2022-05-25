import WavesBackgroundContainer from '@components/templates/waves-background-container';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@src/screens/home';
import { DocumentsStackScreen } from './documents-stack';
import { InventarisationStackScreen } from './inventarisation-stack';
import { sharedOptions } from './navigation-options';

export type AuthStackParamList = {
    Home: undefined;
    InventarisationStack: undefined;
    DocumentsStack: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackScreen = () => (
    <WavesBackgroundContainer>
        <AuthStack.Navigator screenOptions={{ ...sharedOptions }}>
            <AuthStack.Screen component={HomeScreen} name="Home" />
            <AuthStack.Screen
                component={InventarisationStackScreen}
                name="InventarisationStack"
            />
            <AuthStack.Screen
                component={DocumentsStackScreen}
                name="DocumentsStack"
            />
        </AuthStack.Navigator>
    </WavesBackgroundContainer>
);
