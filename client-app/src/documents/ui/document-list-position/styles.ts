import { Colors } from '@src/theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 10,
        marginVertical: 5,
        position: 'relative',
    },
    dotsIcon: { position: 'absolute', top: 10, right: 5 },
    stripe: {
        height: 33,
        width: 6,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    content: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingLeft: 15,
        paddingRight: 35,
    },
    firstColumn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    secondColumn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 10,
    },
    number: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default styles;
