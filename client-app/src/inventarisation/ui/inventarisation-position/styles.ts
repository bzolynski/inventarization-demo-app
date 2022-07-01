import { Colors } from '@src/shared/theme/colors';
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
        flexDirection: 'column',
        paddingVertical: 10,
        paddingLeft: 15,
        paddingRight: 35,
    },
    firstRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    quantityWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.danger,
    },
    codeText: {
        fontSize: 14,
        marginTop: 10,
    },
    localizationText: {
        fontSize: 14,
        marginTop: 3,
    },
    dateText: {
        alignSelf: 'flex-end',
        fontSize: 14,
    },
});

export default styles;
