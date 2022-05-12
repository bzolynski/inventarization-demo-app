import TitleBackButton from '@src/components/molecules/title-back-button';
import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import PaddingContainer from '@src/components/templates/padding-container';
import TopBarSafeContainer from '@src/components/templates/top-bar-safe-container';
import { useNavigation } from '@react-navigation/native';
import { Position } from '@src/models';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '@src/redux-store/reducers/reducers';
import { IInventarizationState } from '@src/redux-store/reducers/inventarization-reducers';
import {
    setCode,
    setManualInputVisible,
    setPickerVisible,
    setScanning,
    closePositionForm,
} from '@src/redux-store/actions/inventarization-actions';
import BasketPicker from '@src/components/inventarisation/basket-picker';
import InventarizationManualInput from '@src/components/inventarisation/inventarization-manual-input';
import InventarizationPositionForm from '@src/components/inventarisation/inventarization-position-form';
import InventarisationPositions from '@src/components/inventarisation/inventarisation-positions/index.';
import InventarizationScanner from '@src/components/inventarisation/inventarisation-scanner';

type SetScanning = ReturnType<typeof setScanning>;
type SetPickerVisible = ReturnType<typeof setPickerVisible>;
type SetManualInputVisible = ReturnType<typeof setManualInputVisible>;
type SetCode = ReturnType<typeof setCode>;
type ClosePositionForm = ReturnType<typeof closePositionForm>;

const InventarisationScreen = () => {
    const dispatch = useDispatch();
    const {
        scanning,
        pickerVisible,
        manualInputVisible,
        code,
        positionFormVisible,
    } = useSelector<IStore, IInventarizationState>(
        (state) => state.inventarizationReducer,
    );

    const [positions, setPositions] = useState<Position[]>([]);
    const navigation = useNavigation();

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

    const hideScanner = () => dispatch<SetScanning>(setScanning(false));
    const hideManualInput = () =>
        dispatch<SetManualInputVisible>(setManualInputVisible(false));
    const showManualInput = () =>
        dispatch<SetManualInputVisible>(setManualInputVisible(true));
    const showPicker = () => dispatch<SetPickerVisible>(setPickerVisible(true));
    const hidePositionForm = () => dispatch<SetScanning>(closePositionForm());

    navigation.addListener('focus', () => {
        showPicker();
    });

    const tryLoadItem = (code: string) => {
        dispatch<SetCode>(setCode(code));
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
                                dispatch<SetScanning>(setScanning(true))
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
            <Modal
                transparent={true}
                visible={code !== undefined && positionFormVisible}
                animationType="fade"
                statusBarTranslucent={true}
                onRequestClose={() => hidePositionForm()}>
                <InventarizationPositionForm
                    onCloseRequest={() => hidePositionForm()}
                    code={code!}
                />
            </Modal>
        </>
    );
};

export default InventarisationScreen;
