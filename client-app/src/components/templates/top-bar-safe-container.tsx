import React from 'react';
import { Platform, StatusBar, View } from 'react-native';

const TopBarSafeContainer: React.FC = ({ children }) => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            }}>
            {children}
        </View>
    );
};

export default TopBarSafeContainer;
