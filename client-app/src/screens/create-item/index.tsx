import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createItem, doesItemExists, getByCode } from '@src/api';
import { AppButton } from '@src/components/atoms/app-button';
import { AppTextInput } from '@src/components/atoms/app-text-input';
import BackdropSpinner from '@src/components/molecules/backdrop-spinner';
import { SlideDownContainer } from '@src/components/templates/slide-down-container';
import TopBarSafeContainer from '@src/components/templates/top-bar-safe-container';
import { Item } from '@src/models';
import { InventarisationStackParamList } from '@src/routing/inventarisation-stack';
import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Text,
    View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type NavigationProp = NativeStackScreenProps<
    InventarisationStackParamList,
    'CreateItem'
>;

type Inputs = {
    name: string;
    code: string;
};

const CreateItem = ({ route, navigation }: NavigationProp) => {
    const [isBusy, setIsBusy] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<Inputs>();

    useEffect(() => {
        setValue('code', route.params.code);
    }, [route.params.code]);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setIsBusy(true);
        createItem(data as Item)
            .then((response) => {
                setIsBusy(false);
                navigation.navigate('CreateInventarizationPosition', {
                    code: route.params.code,
                });
            })
            .catch((error) => {
                setIsBusy(false);
                console.log(error);
            });
    };

    return (
        <>
            <SlideDownContainer title="Create new item">
                <View style={{}}>
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
                                placeholder="Enter code"
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="name"
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <AppTextInput
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                onChangeText={onChange}
                                style={{ marginTop: 20 }}
                                label="Name"
                                placeholder="Enter name"
                            />
                        )}
                    />
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={[
                        {
                            position: 'relative',
                        },
                    ]}>
                    <AppButton
                        styles={{
                            marginRight: '60%',
                            marginTop: 20,
                        }}
                        color={Colors.main}
                        title="Create"
                        buttonStyle="raised"
                        onPress={handleSubmit(onSubmit)}
                    />
                </KeyboardAvoidingView>
            </SlideDownContainer>
            {isBusy ? (
                <BackdropSpinner
                    animating={isBusy}
                    size={'large'}
                    color={'red'}
                    backdropColor="hsla(0, 0%, 0%, 0.8)"></BackdropSpinner>
            ) : undefined}
        </>
    );
};

export default CreateItem;
