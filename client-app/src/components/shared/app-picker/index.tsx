import { Picker, PickerProps } from '@react-native-picker/picker';
import InputLabel from '@src/components/atoms/input-label';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native';

type CustomProps = {
    label?: string;
    ref?: React.Ref<Picker<any>>;
};

type Props = CustomProps & PickerProps;

export const AppPicker: React.FC<Props> = React.forwardRef<Picker<any>, Props>(
    (
        { style, label, children, ...pickerProps },
        ref?: React.Ref<Picker<any>>,
    ) => {
        return (
            <View style={style}>
                {label ? <InputLabel text={label} /> : null}
                <View style={styles.pickerWrapper}>
                    <Picker ref={ref} {...pickerProps}>
                        {children}
                    </Picker>
                </View>
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
    pickerWrapper: {
        //height: 45,
        borderColor: 'black',
        color: '#acb2c3',
        backgroundColor: '#e2e4ea',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 2,
        borderRadius: 15,
        paddingHorizontal: 5,
    },
});
