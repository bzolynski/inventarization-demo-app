import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type Props = {
    style?: StyleProp<ViewStyle>;
};

const PaddingContainer: React.FC<Props> = ({ children, ...props }) => {
    return (
        <View
            style={[
                {
                    paddingHorizontal: 25,
                    paddingVertical: 30,
                    flex: 1,
                },
                props.style,
            ]}>
            {children}
        </View>
    );
};

export default PaddingContainer;
