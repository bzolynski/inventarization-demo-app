import { Picker } from '@react-native-picker/picker';
import { setScanning } from '@src/redux-store/actions/inventarization-actions';
import { IInventarizationState } from '@src/redux-store/reducers/inventarization-reducers';
import { IStore } from '@src/redux-store/reducers/reducers';
import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import { AppButton } from '../atoms/app-button';
import InputLabel from '../atoms/input-label';
import ElevationContainer from '../templates/elevation-container';
import PaddingContainer from '../templates/padding-container';
import TitleBackButton from './title-back-button';

type SetScanning = ReturnType<typeof setScanning>;

type Props = {};

const InventarizationBasketPicker = (props: Props) => {
    const dispatch = useDispatch();
    const { pickerVisible } = useSelector<IStore, IInventarizationState>(
        (store) => store.inventarizationReducer,
    );
    const [selectedBasket, setSelectedBasket] = useState();
    const slideUpAnim = useRef(new Animated.Value(-300)).current;

    useEffect(() => {
        if (pickerVisible) {
            Animated.timing(slideUpAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideUpAnim, {
                toValue: -300,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [pickerVisible]);

    return (
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
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </ElevationContainer>
            <AppButton
                styles={{ marginTop: 20 }}
                onPress={() => dispatch<SetScanning>(setScanning(true))}
                title="Select"
                buttonStyle="raised"
                color={Colors.secondary}
            />
        </Animated.View>
    );
};

export default InventarizationBasketPicker;
