import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextInputProps,
    View,
    ViewStyle,
} from 'react-native';
import { TextInput } from 'react-native';
import InputLabel from '../input-label';

type CustomProps = {
    label?: string;
    ref?: React.Ref<TextInput>;
};

type Props = CustomProps & TextInputProps & TextInputProps;

export const AppTextInput: React.FC<Props> = React.forwardRef<TextInput, Props>(
    (
        { style, label, placeholderTextColor, ...textInputProps },
        ref?: React.Ref<TextInput>,
    ) => {
        return (
            <View style={style}>
                {label ? <InputLabel text={label} /> : null}
                <TextInput
                    ref={ref}
                    placeholderTextColor={
                        placeholderTextColor ? placeholderTextColor : '#acb2c3'
                    }
                    {...textInputProps}
                    style={styles.input}
                />
            </View>
        );
    },
);

const styles = StyleSheet.create({
    title: {
        marginBottom: 8,
        color: '#acb2c3',
        shadowRadius: 1,
    },
    input: {
        borderColor: 'black',
        backgroundColor: '#e2e4ea',
        height: 45,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowRadius: 1,
        elevation: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
    },
});
