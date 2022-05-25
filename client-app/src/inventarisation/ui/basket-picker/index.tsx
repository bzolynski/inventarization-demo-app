import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppButton } from '@src/components/atoms/app-button';
import InputLabel from '@src/components/atoms/input-label';
import ElevationContainer from '@src/components/templates/elevation-container';
import { slideDown, slideUp } from './animations';

type Props = {
    visible?: boolean;
    onBasketSelected: (basket: any) => void;
};

const BasketPicker = ({ visible = true, ...props }: Props) => {
    const [selectedBasket, setSelectedBasket] = useState<any>();
    //const [currentPosition, setCurrentPosition] = useState(-300);

    const slideDownRef = useRef(
        new Animated.Value(/*currentPosition*/ -300),
    ).current;
    const slideUpRef = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            slideDown(slideDownRef).start(); //() => setCurrentPosition(0));
        } else {
            slideUp(slideUpRef).start(); //() => setCurrentPosition(-300));
        }
    }, [visible]);

    return (
        <Animated.View
            style={{
                transform: [{ translateY: slideDownRef }],
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
                onPress={() => props.onBasketSelected(selectedBasket)}
                title="Select"
                buttonStyle="raised"
                color={Colors.secondary}
            />
        </Animated.View>
    );
};

export default BasketPicker;
