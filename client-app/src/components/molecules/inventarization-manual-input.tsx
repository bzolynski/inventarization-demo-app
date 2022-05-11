import { useKeyboard } from '@src/hooks';
import { setManualInputVisible } from '@src/redux-store/actions/inventarization-actions';
import { Colors } from '@src/theme/colors';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
    Keyboard,
    Platform,
    Pressable,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { AppButton } from '../atoms/app-button';
import { AppTextInput } from '../atoms/app-text-input';
import BackButtonIcon from '../atoms/back-button-icon';

type SetManualInputVisible = ReturnType<typeof setManualInputVisible>;

type Inputs = {
    code: string;
};

type Props = {
    onSubmit: (code: string) => void;
};

const InventarizationManualInput = (props: Props) => {
    const dispatch = useDispatch();
    const keyboardHeight = useKeyboard();

    const hideManualInput = () =>
        dispatch<SetManualInputVisible>(setManualInputVisible(false));
    const {
        control,
        handleSubmit,
        formState: { errors },
        resetField,
    } = useForm<Inputs>();

    const onCodeInputSubmit: SubmitHandler<Inputs> = (data) => {
        if (data.code !== '') {
            props.onSubmit(data.code);
            resetField('code');
        }
    };

    return (
        <View
            style={[
                StyleSheet.absoluteFill,
                {
                    backgroundColor: 'hsla(0, 0%, 0%, 0.9)',
                },
            ]}>
            <View
                style={[
                    StyleSheet.absoluteFill,
                    {
                        marginTop:
                            Platform.OS === 'android'
                                ? StatusBar.currentHeight
                                : 0,
                    },
                ]}>
                <Pressable
                    onPress={() => hideManualInput()}
                    style={({ pressed }) => [
                        {
                            position: 'absolute',
                            top: 15,
                            left: 15,
                            flex: 1,
                        },
                        pressed
                            ? {
                                  transform: [{ scale: 1.1 }],
                              }
                            : undefined,
                    ]}>
                    <BackButtonIcon size={40} color={'hsl(0, 0%, 100%)'} />
                </Pressable>

                {/* form */}
                <View
                    style={[
                        StyleSheet.absoluteFill,
                        {
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 20,
                            marginBottom: keyboardHeight,
                        },
                    ]}>
                    <Controller
                        control={control}
                        name="code"
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <AppTextInput
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                onChangeText={onChange}
                                label="Code"
                                placeholder="Enter product code"
                                returnKeyType="none"
                                onSubmitEditing={() => Keyboard.dismiss()}
                                style={{ width: '100%' }}
                            />
                        )}
                    />
                    <View
                        style={[
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 20,
                            },
                        ]}>
                        <AppButton
                            color={Colors.secondary}
                            title="Cancel"
                            buttonStyle="raised"
                            onPress={() => hideManualInput()}
                            styles={{ flex: 1, marginRight: 10 }}
                        />
                        <AppButton
                            color={Colors.main}
                            title="Search"
                            buttonStyle="raised"
                            onPress={handleSubmit(onCodeInputSubmit)}
                            styles={{ flex: 1, marginLeft: 10 }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default InventarizationManualInput;
