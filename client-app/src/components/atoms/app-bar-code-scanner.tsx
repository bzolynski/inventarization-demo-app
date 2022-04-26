import { BackgroundColors, Colors } from '@src/theme/colors';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {
    BarCodeScanningResult,
    Camera,
    CameraProps,
    PermissionStatus,
} from 'expo-camera';
import { FlashMode } from 'expo-camera/build/Camera.types';

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import BackdropSpinner from '../molecules/backdrop-spinner';
import { AppButton } from './app-button';

type ScannerIndicator = 'none' | 'square' | 'line';

type CustomProps = {
    scanning?: boolean;
    vibrateOnScan?: boolean;
    scannerIndicator?: ScannerIndicator;
    onScanned?: (scanningResult: BarCodeScanningResult) => void;
    flashMode?: keyof typeof FlashMode;
};

type Props = CameraProps & CustomProps;

const AppBarCodeScanner: React.FC<Props> = ({
    scannerIndicator = 'none',
    vibrateOnScan = false,
    scanning = true,
    onScanned,
    flashMode,
    children,
    ...props
}) => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    useEffect(() => {
        askForPermission();
    }, []);

    const askForPermission = () => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === PermissionStatus.GRANTED);
        })();
    };
    const handleBarcodeScanned = (e: BarCodeScanningResult) => {
        if (vibrateOnScan) Vibration.vibrate();
        if (onScanned) onScanned(e);
    };

    if (hasPermission === null) {
        return (
            <BackdropSpinner
                backdropColor="hsla(0, 0%, 0%, 1)"
                animating={true}
                position="center"
                color="hsl(0, 0%, 100%)"
                size="large"
            />
        );
    }

    if (hasPermission === false) {
        return (
            <View>
                <Text>No permission</Text>
                <AppButton
                    onPress={() => askForPermission()}
                    title="Allow camera"
                    buttonStyle="raised"
                    color={Colors.secondary}
                />
            </View>
        );
    }

    return (
        <Camera
            flashMode={flashMode}
            style={[[StyleSheet.absoluteFill], props.style]}
            onBarCodeScanned={scanning ? handleBarcodeScanned : undefined}>
            <View
                style={[
                    StyleSheet.absoluteFill,
                    {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                ]}>
                {children}

                {scannerIndicator !== 'none' ? (
                    <View
                        style={
                            scannerIndicator === 'line'
                                ? styles.line
                                : styles.square
                        }
                    />
                ) : undefined}
            </View>
        </Camera>
    );
};

export default AppBarCodeScanner;

const styles = StyleSheet.create({
    line: {
        height: 3,
        width: '70%',
        backgroundColor: Colors.secondary.default,
    },
    square: {
        width: '70%',
        borderColor: Colors.secondary.default,
        borderWidth: 2,
        borderRadius: 5,
        aspectRatio: 1 / 1,
    },
});
