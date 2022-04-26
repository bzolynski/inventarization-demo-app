import React from 'react';
import { Animated, RegisteredStyle, StyleProp, ViewStyle } from 'react-native';
import { BackgroundColors } from '@theme/colors';
import WavesBackgroundContainer from './waves-background-container';

type Props = {
    style?:
        | StyleProp<ViewStyle>
        | RegisteredStyle<ViewStyle>
        | Animated.Value
        | Animated.AnimatedInterpolation
        | Animated.WithAnimatedObject<ViewStyle>;
};

const AnimateWavesBackgroundContainer: React.FC<Props> = ({
    children,
    ...props
}) => {
    return (
        <Animated.View
            style={[
                {
                    justifyContent: 'center',
                    flex: 1,
                    backgroundColor: BackgroundColors.secondaryBgColor,
                },
                props.style,
            ]}>
            <WavesBackgroundContainer>{children}</WavesBackgroundContainer>
        </Animated.View>
    );
};

export default AnimateWavesBackgroundContainer;
