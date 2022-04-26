import TitleBackButton from '@src/components/molecules/title-back-button';
import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Keyboard,
    Modal,
    Platform,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PaddingContainer from '@src/components/templates/padding-container';
import ElevationContainer from '@src/components/templates/elevation-container';
import InputLabel from '@src/components/atoms/input-label';
import { AppButton } from '@src/components/atoms/app-button';
import { Colors } from '@src/theme/colors';
import TopBarSafeContainer from '@src/components/templates/top-bar-safe-container';
import { useNavigation } from '@react-navigation/native';
import InventarizationScanner from '@src/components/organisms/inventarisation-scanner';
import { BarCodeScanningResult } from 'expo-camera';
import BackButtonIcon from '@src/components/atoms/back-button-icon';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AppTextInput } from '@src/components/atoms/app-text-input';
import { useKeyboard } from '@src/hooks';
import { ScrollView } from 'react-native-gesture-handler';
import InventarisationPosition from '@src/components/molecules/inventarisation-position';
import InventarisationPositions from '@src/components/organisms/inventarisation-positions';
import { Position } from '@src/models';

type Inputs = {
    code: string;
};

const InventarisationScreen = () => {
    const [isScanning, setIsScanning] = useState(false);
    const [isManualInput, setIsManualInput] = useState(false);
    const [selectedBasket, setSelectedBasket] = useState();
    const [selectSectionVisible, setSelectSectionVisible] = useState(true);
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

    const {
        control,
        handleSubmit,
        formState: { errors },
        resetField,
    } = useForm<Inputs>();

    const keyboardHeight = useKeyboard();

    const slideUpAnim = useRef(new Animated.Value(-300)).current;

    navigation.addListener('focus', () => {
        showSelection();
    });
    const showSelection = () => {
        setSelectSectionVisible(true);
        Animated.timing(slideUpAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };
    const hideSelection = () => {
        Animated.timing(slideUpAnim, {
            toValue: -300,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setSelectSectionVisible(false);
            setIsScanning(true);
        });
    };

    const showScanner = () => {
        hideSelection();
    };

    const hideScanner = () => {
        setIsScanning(false);
        showSelection();
    };

    const handleManualInputButtonClicked = () => {
        setIsManualInput(true);
        setIsScanning(false);
    };

    const hideManualInput = () => {
        resetField('code');
        setIsScanning(true);
        setIsManualInput(false);
    };

    const [tempId, setTempId] = useState(0);

    const handleBarcodeScanned = (scanningResult: BarCodeScanningResult) => {
        hideScanner();
        console.log('====================================');
        console.log(scanningResult);
        console.log('====================================');
        const tempPosition: Position = {
            id: tempId,
            name: 'temp item',
            code: scanningResult.data,
            date: '26.04.2022 21:37',
            inventarisationId: -1,
            localization: 'Local',
            userId: -1,
            change: -1,
            quantity: 69,
        };
        setTempId(tempId + 1);
        setPositions([...positions, tempPosition]);
    };

    const onCodeInputSubmit: SubmitHandler<Inputs> = (data) => {
        resetField('code');
        console.log('====================================');
        console.log(data);
        console.log('====================================');
    };

    return (
        <>
            <TopBarSafeContainer>
                {selectSectionVisible ? (
                    <PaddingContainer>
                        <TitleBackButton
                            title="Inventarisation"
                            style={{ marginBottom: 25 }}
                        />
                        {/* Separate component */}
                        <Animated.View
                            style={{
                                transform: [{ translateY: slideUpAnim }],
                            }}>
                            <InputLabel text="Select basket" color="#FFFFFF" />
                            <ElevationContainer>
                                <Picker
                                    selectedValue={selectedBasket}
                                    style={{ width: '100%' }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedBasket(itemValue)
                                    }>
                                    <Picker.Item label="Java" value="java" />
                                    <Picker.Item
                                        label="JavaScript"
                                        value="js"
                                    />
                                </Picker>
                            </ElevationContainer>
                            <AppButton
                                styles={{ marginTop: 20 }}
                                onPress={() => showScanner()}
                                title="Select"
                                buttonStyle="raised"
                                color={Colors.secondary}
                            />
                        </Animated.View>
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
                visible={isScanning || isManualInput}
                statusBarTranslucent={true}
                onRequestClose={() => hideScanner()}>
                <InventarizationScanner
                    scanning={isScanning}
                    onScanned={handleBarcodeScanned}
                    onBackButtonClicked={() => hideScanner()}
                    onManualInputButtonClicked={() =>
                        handleManualInputButtonClicked()
                    }
                    style={{
                        flex: 1,
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                    }}
                />
                <Modal
                    transparent={true}
                    visible={isManualInput}
                    animationType="fade"
                    statusBarTranslucent={true}
                    onRequestClose={() => hideManualInput()}>
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
                                        top: 10,
                                        left: 10,
                                        flex: 1,
                                    },
                                    styles.roundPressable,
                                    pressed
                                        ? styles.pressablePressed
                                        : undefined,
                                ]}>
                                <BackButtonIcon
                                    size={30}
                                    color={'hsl(0, 0%, 100%)'}
                                />
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
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <AppTextInput
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                            onChangeText={onChange}
                                            label="Code"
                                            placeholder="Enter product code"
                                            returnKeyType="none"
                                            onSubmitEditing={() =>
                                                Keyboard.dismiss()
                                            }
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
                                        onPress={handleSubmit(
                                            onCodeInputSubmit,
                                        )}
                                        styles={{ flex: 1, marginLeft: 10 }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </Modal>
        </>
    );
};

export default InventarisationScreen;

const styles = StyleSheet.create({
    roundPressable: {
        borderRadius: 40,
        borderColor: 'hsl(0, 0%, 100%)',
        borderWidth: 2,
        padding: 3,
    },
    pressablePressed: {
        transform: [{ scale: 1.1 }],
    },
});
