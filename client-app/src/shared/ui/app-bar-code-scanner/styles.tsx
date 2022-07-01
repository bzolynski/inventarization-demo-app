import { Colors } from '@src/shared/theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    childContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        height: 3,
        width: '70%',
        backgroundColor: Colors.secondary.default,
    },
    square: {
        width: '70%',
        borderColor: Colors.secondary.default,
        borderWidth: 2,
        borderRadius: 5,
        aspectRatio: 1 / 1,
    },
});
export default styles;
