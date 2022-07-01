import { BarCodeScanningResult } from 'expo-camera';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, ViewProps } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AppBarCodeScanner from '@src/shared/ui/app-bar-code-scanner';
import BackButtonIcon from '@src/shared/ui/back-button-icon';
import styles from './styles';

type CustomProps = {
    scanning: boolean;
    onScanned?: (scanningResult: BarCodeScanningResult) => void;
    onBackButtonClicked?: () => void;
    onManualInputButtonClicked?: () => void;
};

type Props = Omit<ViewProps, 'style'> & CustomProps;

const InventarizationScanner: React.FC<Props> = ({
    scanning,
    onScanned,
    onBackButtonClicked,
    onManualInputButtonClicked,
}) => {
    const [isTorchOn, setIsTorchOn] = useState(false);
    return (
        <View style={styles.wrapper}>
            <AppBarCodeScanner
                flashMode={isTorchOn ? 'torch' : 'off'}
                scanning={scanning}
                onScanned={onScanned}
                scannerIndicator="line"
                vibrateOnScan={true}>
                <View style={[styles.container, StyleSheet.absoluteFill]}>
                    <Pressable
                        onPress={onBackButtonClicked}
                        style={({ pressed }) => [
                            styles.backButton,
                            pressed ? styles.buttonPressed : undefined,
                        ]}>
                        <BackButtonIcon size={40} color={'hsl(0, 0%, 100%)'} />
                    </Pressable>

                    <Text
                        style={{
                            color: 'white',
                            backgroundColor: 'pink',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            flex: 1,
                        }}>
                        Details
                    </Text>

                    <Pressable
                        onPress={() => {
                            setIsTorchOn(!isTorchOn);
                        }}
                        style={styles.torchButton}>
                        {isTorchOn ? (
                            <Ionicon
                                name="flash-outline"
                                size={40}
                                color={'hsl(50, 75%, 75%)'}
                            />
                        ) : (
                            <Ionicon
                                name="flash-off-outline"
                                size={40}
                                color={'hsl(0, 0%, 100%)'}
                            />
                        )}
                    </Pressable>

                    <Pressable
                        onPress={() => {
                            if (onManualInputButtonClicked)
                                onManualInputButtonClicked();
                        }}
                        style={({ pressed }) => [
                            styles.manualInputButton,
                            pressed ? styles.buttonPressed : undefined,
                        ]}>
                        <Ionicon
                            name="clipboard-outline"
                            size={40}
                            color={'hsl(0, 0%, 100%)'}
                        />
                    </Pressable>
                </View>
            </AppBarCodeScanner>
        </View>
    );
};

export default InventarizationScanner;
