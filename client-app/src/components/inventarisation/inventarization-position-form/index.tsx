import { doesItemExists, getByCode } from '@src/api';
import { Item } from '@src/models';
import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';

type Props = {
    code: string;
    onCloseRequest: () => void;
};

const InventarizationPositionForm = (props: Props) => {
    const [isBusy, setIsBusy] = useState(false);
    const [item, setItem] = useState<Item | undefined>(undefined);

    useEffect(() => {
        setIsBusy(true);
        doesItemExists(props.code)
            .then((response) => {
                if (response.data) {
                    getByCode(props.code)
                        .then((response) => {
                            setItem(response.data);
                        })
                        .catch(onError);
                } else {
                    Alert.alert(
                        'Missing item',
                        `No item was found for code ${props.code}. Do you want to add new item?`,
                        [
                            {
                                text: 'Yes',
                                onPress: () => {
                                    console.log('NEW ITEM');
                                },
                            },
                            {
                                text: 'No',
                                onPress: () => props.onCloseRequest(),
                            },
                        ],
                    );
                }
            })
            .catch(onError);
    }, [props.code]);

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

export default InventarizationPositionForm;
