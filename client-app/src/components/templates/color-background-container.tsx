import React from 'react';
import { View } from 'react-native';
import { BackgroundColors } from '@src/shared/theme/colors';

const ColorBackgroundContainer: React.FC = ({ children }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: BackgroundColors.secondaryBgColor,
            }}>
            {children}
        </View>
    );
};

export default ColorBackgroundContainer;
