import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { doesItemExists, getByCode } from '@src/api';
import { getMany } from '@src/api/localization.api';
import { AppButton } from '@src/components/atoms/app-button';
import { AppTextInput } from '@src/components/atoms/app-text-input';
import InputLabel from '@src/components/atoms/input-label';
import BackdropSpinner from '@src/components/molecules/backdrop-spinner';
import { AppPicker } from '@src/components/shared/app-picker';
import ElevationContainer from '@src/components/templates/elevation-container';
import { SlideDownContainer } from '@src/components/templates/slide-down-container';
import { Item, Localization } from '@src/models';
import { InventarisationStackParamList } from '@src/routing/inventarisation-stack';
import { Colors } from '@src/theme/colors';
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

type NavigationProp = NativeStackScreenProps<
    InventarisationStackParamList,
    'CreateInventarizationPosition'
>;

type Inputs = {
    itemId: number;
    inventarisationId: number;
    localizationId: string;
    quantity: number;
    date: Date;
};

const CreateInventarizationPosition = ({ route }: NavigationProp) => {
    const [isBusy, setIsBusy] = useState(false);
    const [item, setItem] = useState<Item | undefined>(undefined);
    const [localizations, setLocalizations] = useState<Localization[]>([]);

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<Inputs>();

    useEffect(() => {
        getMany()
            .then((response) => setLocalizations(response.data))
            .catch(onError);
    }, []);
    useEffect(() => {
        setIsBusy(true);
        getByCode(route.params.code)
            .then((response) => {
                setItem(response.data);
                setValue('itemId', response.data.id);
                setValue('date', new Date());
                setIsBusy(false);
            })
            .catch(onError);
    }, [route.params.code]);

    const onError = (error: Error | AxiosError) => {
        console.error(error);

        setIsBusy(false);
    };

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setIsBusy(true);
        console.log(data);
    };
    return (
        <>
            <SlideDownContainer title="Create new position">
                <View style={{}}>
                    <Controller
                        control={control}
                        name="inventarisationId"
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <AppPicker
                                label="Inventarisation"
                                selectedValue={value}
                                onValueChange={onChange}>
                                {localizations.map((x) => (
                                    <Picker.Item
                                        key={x.id}
                                        label={x.name}
                                        value={x.id}
                                    />
                                ))}
                            </AppPicker>
                        )}
                    />
                    <Controller
                        control={control}
                        name="localizationId"
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <AppPicker
                                label="Localization"
                                selectedValue={value}
                                onValueChange={onChange}>
                                {localizations.map((x) => (
                                    <Picker.Item
                                        key={x.id}
                                        label={x.name}
                                        value={x.id}
                                    />
                                ))}
                            </AppPicker>
                        )}
                    />
                    <Controller
                        control={control}
                        name="quantity"
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <AppTextInput
                                keyboardType="numeric"
                                onBlur={onBlur}
                                onChange={onChange}
                                value={(value ?? '').toString()}
                                onChangeText={onChange}
                                label="Quantity"
                                placeholder="Enter quantity"
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

export default CreateInventarizationPosition;
