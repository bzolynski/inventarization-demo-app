import { Colors } from '@src/shared/theme/colors';
import { StyleSheet } from 'react-native';

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

export default styles;
