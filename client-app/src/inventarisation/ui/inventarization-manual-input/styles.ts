import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'hsla(0, 0%, 0%, 0.9)',
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    backButton: {
        position: 'absolute',
        top: 15,
        left: 15,
        flex: 1,
    },
    buttonPressed: {
        transform: [{ scale: 1.1 }],
    },
    formWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    buttonsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
});

export default styles;
