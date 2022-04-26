import { BarCodeScanningResult } from 'expo-camera';
import { useState } from 'react';
import {
    Animated,
    Platform,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ViewProps,
    ViewStyle,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AppBarCodeScanner from '../atoms/app-bar-code-scanner';
import BackButtonIcon from '../atoms/back-button-icon';

type CustomProps = {
    scanning: boolean;
    style?: Animated.AnimatedProps<ViewStyle>;
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
    ...viewProps
}) => {
    const [isTorchOn, setIsTorchOn] = useState(false);
    return (
        <Animated.View {...viewProps}>
            <AppBarCodeScanner
                flashMode={isTorchOn ? 'torch' : 'off'}
                scanning={scanning}
                onScanned={onScanned}
                scannerIndicator="line"
                vibrateOnScan={true}>
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
                        onPress={onBackButtonClicked}
                        style={({ pressed }) => [
                            {
                                position: 'absolute',
                                top: 15,
                                left: 15,
                                flex: 1,
                            },
                            pressed ? styles.pressablePressed : undefined,
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
                        style={[
                            {
                                position: 'absolute',
                                bottom: 15,
                                right: 15,
                                flex: 1,
                            },
                        ]}>
                        {isTorchOn ? (
                            <Ionicon
                                name="flash-outline"
                                size={40}
                                color={
                                    isTorchOn
                                        ? 'hsl(50, 75%, 75%)'
                                        : 'hsl(0, 0%, 100%)'
                                }
                            />
                        ) : (
                            <Ionicon
                                name="flash-off-outline"
                                size={40}
                                color={
                                    isTorchOn
                                        ? 'hsl(50, 75%, 75%)'
                                        : 'hsl(0, 0%, 100%)'
                                }
                            />
                        )}
                    </Pressable>

                    <Pressable
                        onPress={() => {
                            console.log('manual input');
                            if (onManualInputButtonClicked)
                                onManualInputButtonClicked();
                        }}
                        style={({ pressed }) => [
                            {
                                position: 'absolute',
                                bottom: 15,
                                left: 15,
                                flex: 1,
                            },
                            pressed ? styles.pressablePressed : undefined,
                        ]}>
                        <Ionicon
                            name="clipboard-outline"
                            size={40}
                            color={'hsl(0, 0%, 100%)'}
                        />
                    </Pressable>
                </View>
            </AppBarCodeScanner>
        </Animated.View>
    );
};

export default InventarizationScanner;

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
