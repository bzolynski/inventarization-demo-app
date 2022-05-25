import { useRef } from 'react';
import { Animated } from 'react-native';

const slideDown = (ref: Animated.Value) =>
    Animated.timing(ref, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
    });

const slideUp = (ref: Animated.Value) =>
    Animated.timing(ref, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
    });

export { slideUp, slideDown };
