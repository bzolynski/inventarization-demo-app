import { AppButton } from '@components/atoms/app-button';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@theme/colors';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 120,
        width: '100%',
        paddingHorizontal: 30,
    },
    textContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
    },
    text: {
        color: Colors.main.constrast,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 13,
        marginBottom: 10,
    },
    description2: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    loginButton: {
        width: '100%',
    },
    contactUsButton: {
        width: '100%',
        marginTop: 10,
    },
});
