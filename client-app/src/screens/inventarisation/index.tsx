import TitleBackButton from '@src/components/molecules/title-back-button';
import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, View } from 'react-native';
import PaddingContainer from '@src/components/templates/padding-container';
import TopBarSafeContainer from '@src/components/templates/top-bar-safe-container';
import { Position } from '@src/models';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '@src/redux-store/reducers/reducers';
import { IInventarizationState } from '@src/redux-store/reducers/inventarization-reducers';
import {
    setManualInputVisible,
    setPickerVisible,
    setScanning,
} from '@src/redux-store/actions/inventarization-actions';
import BasketPicker from '@src/components/inventarisation/basket-picker';
import InventarizationManualInput from '@src/components/inventarisation/inventarization-manual-input';
import InventarisationPositions from '@src/components/inventarisation/inventarisation-positions/index.';
import InventarizationScanner from '@src/components/inventarisation/inventarisation-scanner';
import { doesItemExists } from '@src/api';
import { AxiosError } from 'axios';
import { InventarisationStackParamList } from '@src/routing/inventarisation-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type NavigationProp = NativeStackScreenProps<
    InventarisationStackParamList,
    'Inventarisation'
>;

const InventarisationScreen = ({ navigation }: NavigationProp) => {
    const dispatch = useDispatch();
    const { scanning, pickerVisible, manualInputVisible } = useSelector<
        IStore,
        IInventarizationState
    >((state) => state.inventarizationReducer);

    const [positions, setPositions] = useState<Position[]>([]);

    useEffect(() => {
        const arr: Position[] = [];
        for (let index = 0; index < 8; index++) {
            const tempPosition: Position = {
                id: index,
                name: `item no. ${index + 1}`,
                code: '0123456789',
                date: '26.04.2022 21:37',
                inventarisationId: index,
                localization: 'Local',
                userId: index,
                change: index,
                quantity: index,
            };
            arr.push(tempPosition);
        }
        setPositions(arr);
    }, []);

    const hideScanner = () => dispatch(setScanning(false));
    const hideManualInput = () => dispatch(setManualInputVisible(false));
    const showManualInput = () => dispatch(setManualInputVisible(true));
    const showPicker = () => dispatch(setPickerVisible(true));

    navigation.addListener('focus', () => {
        showPicker();
    });

    const tryLoadItem = (code: string) => {
        doesItemExists(code)
            .then((response) => {
                if (response.data) {
                    navigation.navigate('CreateInventarizationPosition', {
                        code: code,
                    });
                } else {
                    Alert.alert(
                        'Missing item',
                        `No item was found for code ${code}. Do you want to add new item?`,
                        [
                            {
                                text: 'Yes',
                                onPress: () => {
                                    console.log('NEW ITEM');
                                    navigation.navigate('CreateItem', {
                                        code: code,
                                    });
                                },
                            },
                            {
                                text: 'No',
                                onPress: () => {
                                    console.log('continue scanning...');
                                },
                            },
                        ],
                    );
                }
            })
            .catch(onError);
    };

    const onError = (error: Error | AxiosError) => {
        console.error(error);
    };

    return (
        <>
            <TopBarSafeContainer>
                {pickerVisible ? (
                    <PaddingContainer>
                        <TitleBackButton
                            title="Inventarisation"
                            style={{ marginBottom: 25 }}
                        />
                        <BasketPicker
                            onBasketSelected={(selectedBasket) =>
                                dispatch(setScanning(true))
                            }
                        />
                    </PaddingContainer>
                ) : undefined}
                <View style={[{ flex: 2.5 }]}>
                    <InventarisationPositions
                        style={{ flex: 1 }}
                        positions={positions}
                    />
                </View>
            </TopBarSafeContainer>
            <Modal
                animationType="slide"
                visible={scanning}
                statusBarTranslucent={true}
                onRequestClose={() => hideScanner()}>
                <InventarizationScanner
                    scanning={scanning && !manualInputVisible}
                    onScanned={(result) => tryLoadItem(result.data)}
                    onBackButtonClicked={() => hideScanner()}
                    onManualInputButtonClicked={() => showManualInput()}
                />
            </Modal>
            <Modal
                transparent={true}
                visible={manualInputVisible}
                animationType="fade"
                statusBarTranslucent={true}
                onRequestClose={() => hideManualInput()}>
                <InventarizationManualInput
                    onBackButtonClicked={() => hideManualInput()}
                    onSubmit={(code) => {
                        hideManualInput();
                        tryLoadItem(code);
                    }}
                />
            </Modal>
        </>
    );
};

export default InventarisationScreen;
