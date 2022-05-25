import WavesBackgroundContainer from '@components/templates/waves-background-container';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateInventarizationPosition from '@src/screens/create-inventarisation-position';
import CreateItemScreen from '@src/screens/create-item';
import InventarisationScreen from '@src/screens/inventarisation';
import { sharedOptions } from './navigation-options';

export type InventarisationStackParamList = {
    Inventarisation: undefined;
    CreateInventarizationPosition: { code: string };
    CreateItem: { code: string };
};

const InventarisationStack =
    createNativeStackNavigator<InventarisationStackParamList>();

export const InventarisationStackScreen = () => (
    <WavesBackgroundContainer>
        <InventarisationStack.Navigator screenOptions={{ ...sharedOptions }}>
            <InventarisationStack.Screen
                component={InventarisationScreen}
                name="Inventarisation"
            />
            <InventarisationStack.Screen
                options={{ animation: 'slide_from_bottom' }}
                component={CreateItemScreen}
                name="CreateItem"
            />
            <InventarisationStack.Screen
                options={{ animation: 'slide_from_bottom' }}
                component={CreateInventarizationPosition}
                name="CreateInventarizationPosition"
            />
        </InventarisationStack.Navigator>
    </WavesBackgroundContainer>
);
