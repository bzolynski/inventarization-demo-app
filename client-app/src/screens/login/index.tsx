import React from 'react';
import { useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { signIn } from '@redux-store/actions/auth-actions';
import { Colors } from '@src/shared/theme/colors';
import { AppButton } from '@src/shared/ui/app-button';
import { AppTextInput } from '@src/shared/ui/app-text-input';
import { SlideDownContainer } from '@components/templates/slide-down-container';

type Inputs = {
    login: string;
    password: string;
};

const LoginScreen = () => {
    const passwordInputRef = useRef<TextInput>(null);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(signIn(data.login, data.password));
    };

    return (
        <SlideDownContainer title="Sign in">
            <View style={[{ flex: 1 }]}>
                <View>
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                        }}>
                        Welcome back!
                    </Text>
                    <Text
                        style={{
                            fontSize: 13,
                            marginTop: 10,
                        }}>
                        Have nice time using app!
                    </Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Controller
                        control={control}
                        name="login"
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <AppTextInput
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                onChangeText={onChange}
                                label="Login"
                                placeholder="Enter your email or username"
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    passwordInputRef.current?.focus()
                                }
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <AppTextInput
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                onChangeText={onChange}
                                style={{ marginTop: 20 }}
                                secureTextEntry
                                label="Password"
                                placeholder="Enter your password"
                                returnKeyType="go"
                                onSubmitEditing={handleSubmit(onSubmit)}
                                ref={passwordInputRef}
                            />
                        )}
                    />
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={[
                        {
                            flex: 1,
                            position: 'relative',
                        },
                    ]}>
                    <AppButton
                        styles={{
                            marginRight: '60%',
                            marginTop: 50,
                        }}
                        color={Colors.main}
                        title="Sign in"
                        buttonStyle="raised"
                        onPress={handleSubmit(onSubmit)}
                    />
                    <AppButton
                        styles={[
                            {
                                marginTop: 90,
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                            },
                        ]}
                        color={Colors.main}
                        title="Forgot password?"
                        buttonStyle="basic"
                        onPress={() => {}}
                    />
                </KeyboardAvoidingView>
            </View>
        </SlideDownContainer>
    );
};

export default LoginScreen;
