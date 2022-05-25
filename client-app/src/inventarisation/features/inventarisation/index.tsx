import TitleBackButton from '@src/components/molecules/title-back-button';
import React, { useEffect, useState } from 'react';
import { Alert, Modal, View } from 'react-native';
import PaddingContainer from '@src/components/templates/padding-container';
import TopBarSafeContainer from '@src/components/templates/top-bar-safe-container';
import { Position } from '@src/models';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '@src/redux-store/reducers/reducers';
import { IInventarizationState } from '@src/inventarisation/data-access/store/inventarization-reducers';
import {
    setManualInputVisible,
    setPickerVisible,
    setScanning,
} from '@src/inventarisation/data-access/store/inventarization-actions';
import BasketPicker from '@src/inventarisation/ui/basket-picker';
import { doesItemExists } from '@src/api';
import { AxiosError } from 'axios';
import { InventarisationStackParamList } from '@src/routing/inventarisation-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BackdropSpinner from '@src/components/molecules/backdrop-spinner';
import InventarisationPositions from '@src/inventarisation/ui/inventarisation-positions';
import InventarizationScanner from '@src/inventarisation/ui/inventarisation-scanner';
import InventarizationManualInput from '@src/inventarisation/ui/inventarization-manual-input';

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
    const [isBusy, setIsBusy] = useState<boolean>(false);

    useEffect(() => {
        const arr: Position[] = [];
        for (let index = 0; index < 8; index++) {
            const tempPosition: Position = {
                id: index,
                name: `item no. ${index + 1}`,
                code: '0123456789',
                date: '26.04.2022 21:37',
                documentId: index,
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
    const showScanner = () => dispatch(setScanning(true));
    const hideManualInput = () => dispatch(setManualInputVisible(false));
    const showManualInput = () => dispatch(setManualInputVisible(true));
    const showPicker = () => dispatch(setPickerVisible(true));

    navigation.addListener('focus', () => {
        showPicker();
    });

    const tryLoadItem = (code: string) => {
        hideScanner();
        setIsBusy(true);
        doesItemExists(code)
            .then((response) => {
                if (response.data) {
                    setIsBusy(false);
                    navigation.navigate('CreateInventarizationPosition', {
                        code: code,
                    });
                } else {
                    setIsBusy(false);
                    Alert.alert(
                        'Missing item',
                        `No item was found for code ${code}. Do you want to add new item?`,
                        [
                            {
                                text: 'Yes',
                                onPress: () => {
                                    navigation.navigate('CreateItem', {
                                        code: code,
                                    });
                                },
                            },
                            {
                                text: 'No',
                                onPress: () => {
                                    showScanner();
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
            <View style={{ flex: 1 }}>
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
                {isBusy ? (
                    <BackdropSpinner
                        animating={isBusy}
                        size={'large'}
                        color={'red'}
                        backdropColor="hsla(0, 0%, 0%, 0.8)"></BackdropSpinner>
                ) : undefined}
            </View>
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
