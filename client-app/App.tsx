import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from '@redux-store/store';
import { RootStackScreen } from '@src/routing/root-stack';

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStackScreen />
            </NavigationContainer>
        </Provider>
    );
}
