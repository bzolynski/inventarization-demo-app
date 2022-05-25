import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'relative',
    },
    container: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    buttonPressed: {
        transform: [{ scale: 1.1 }],
    },
    backButton: {
        position: 'absolute',
        top: 15,
        left: 15,
        flex: 1,
    },
    torchButton: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        flex: 1,
    },
    manualInputButton: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        flex: 1,
    },
});

export default styles;
