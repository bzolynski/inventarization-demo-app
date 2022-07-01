import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type Props = {
    style?: StyleProp<ViewStyle>;
};

const Card: React.FC<Props> = ({ style, children }) => {
    return (
        <View
            style={[
                style,
                {
                    overflow: 'hidden',

                    borderRadius: 5,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 5,
                    elevation: 5,

                    justifyContent: 'center',
                    alignItems: 'center',

                    backgroundColor: 'white',
                },
            ]}>
            {children}
        </View>
    );
};

export default Card;
