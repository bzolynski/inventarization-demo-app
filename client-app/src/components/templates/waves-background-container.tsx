import React from 'react';
import {
    Dimensions,
    ImageBackground,
    StyleProp,
    ViewStyle,
} from 'react-native';
import wavesBackgroundImg from '@assets/waves-background.png';
import { BackgroundColors } from '@src/shared/theme/colors';

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
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                    backgroundColor: BackgroundColors.secondaryBgColor,
                },
                props.style,
            ]}>
            {children}
        </ImageBackground>
    );
};

export default WavesBackgroundContainer;
