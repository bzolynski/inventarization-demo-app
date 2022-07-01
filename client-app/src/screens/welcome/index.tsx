import { AppButton } from '@src/shared/ui/app-button';
import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '@src/shared/theme/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './styles';
import { WelcomeStackParamList } from '@src/routing/welcome-stack';

type InventarisationNavigationProp = NativeStackScreenProps<
    WelcomeStackParamList,
    'Welcome'
>;

const WelcomeScreen = ({ navigation }: InventarisationNavigationProp) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={[styles.text, styles.title]}>Welcome</Text>
                <Text style={[styles.text, styles.description]}>
                    Your best partner in inventory management!
                </Text>
                <Text style={[styles.text, styles.description2]}>
                    Login to start using app!
                </Text>
            </View>
            <AppButton
                title="Login"
                buttonStyle="raised"
                styles={[styles.loginButton]}
                color={Colors.secondary}
                onPress={() => navigation.navigate('Login')}></AppButton>
            <AppButton
                title="Contact us!"
                buttonStyle="stroked"
                styles={[styles.contactUsButton]}
                color={Colors.white}
                onPress={() => console.log('Pressed')}></AppButton>
        </View>
    );
};

export default WelcomeScreen;
