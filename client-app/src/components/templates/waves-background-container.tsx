import React from 'react';
import { ImageBackground, StyleProp, ViewStyle } from 'react-native';
import wavesBackgroundImg from '@assets/waves-background.png';
import { BackgroundColors } from '@theme/colors';

type Props = {
    style?: StyleProp<ViewStyle>;
};

const WavesBackgroundContainer: React.FC<Props> = ({ children, ...props }) => {
    return (
        <ImageBackground
            source={wavesBackgroundImg}
            style={[
                {
                    justifyContent: 'center',
                    flex: 1,
                    backgroundColor: BackgroundColors.secondaryBgColor,
                },
                props.style,
            ]}>
            {children}
        </ImageBackground>
    );
};

export default WavesBackgroundContainer;
