import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { doesItemExists, getByCode } from '@src/api';
import { Item } from '@src/models';
import { InventarisationStackParamList } from '@src/routing/inventarisation-stack';
import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';

type NavigationProp = NativeStackScreenProps<
    InventarisationStackParamList,
    'CreateInventarizationPosition'
>;

const CreateInventarizationPosition = ({ route }: NavigationProp) => {
    const [isBusy, setIsBusy] = useState(false);
    const [item, setItem] = useState<Item | undefined>(undefined);

    useEffect(() => {
        setIsBusy(true);
        getByCode(route.params.code)
            .then((response) => {
                setItem(response.data);
            })
            .catch(onError);
    }, [route.params.code]);

    const onError = (error: Error | AxiosError) => {
        console.error(error);

        setIsBusy(false);
    };

    return (
        <>
            {isBusy ? undefined : (
                <View>
                    <Text>TEMP</Text>
                </View>
            )}
        </>
    );
};

export default CreateInventarizationPosition;
