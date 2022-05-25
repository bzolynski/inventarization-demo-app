import { useKeyboard } from '@src/hooks';
import { Colors } from '@src/theme/colors';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Keyboard, Pressable, View } from 'react-native';
import { AppButton } from '@src/components/atoms/app-button';
import { AppTextInput } from '@src/components/atoms/app-text-input';
import BackButtonIcon from '@src/components/atoms/back-button-icon';
import styles from './styles';

type Inputs = {
    code: string;
};

type Props = {
    onSubmit: (code: string) => void;
    onBackButtonClicked: () => void;
};

const InventarizationManualInput = (props: Props) => {
    const keyboardHeight = useKeyboard();

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
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Pressable
                    onPress={() => props.onBackButtonClicked()}
                    style={({ pressed }) => [
                        styles.backButton,
                        pressed ? styles.buttonPressed : undefined,
                    ]}>
                    <BackButtonIcon size={40} color={'hsl(0, 0%, 100%)'} />
                </Pressable>

                {/* form */}
                <View
                    style={[
                        styles.formWrapper,
                        { marginBottom: keyboardHeight },
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
                    <View style={styles.buttonsWrapper}>
                        <AppButton
                            color={Colors.secondary}
                            title="Cancel"
                            buttonStyle="raised"
                            onPress={() => props.onBackButtonClicked()}
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
