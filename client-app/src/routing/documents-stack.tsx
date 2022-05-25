import WavesBackgroundContainer from '@components/templates/waves-background-container';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DocumentsScreen from '@src/documents/features/documents';
import { sharedOptions } from './navigation-options';

export type DocumentsStackParamList = {
    Documents: undefined;
};

const DocumentsStack = createNativeStackNavigator<DocumentsStackParamList>();

export const InventarisationStackScreen = () => (
    <WavesBackgroundContainer>
        <DocumentsStack.Navigator screenOptions={{ ...sharedOptions }}>
            <DocumentsStack.Screen
                component={DocumentsScreen}
                name="Documents"
            />
        </DocumentsStack.Navigator>
    </WavesBackgroundContainer>
);
