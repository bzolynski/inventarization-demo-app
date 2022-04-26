import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { Colors } from '@src/theme/colors';
import NavigateBackButton from './navigate-back-button';

type Props = {
    title?: string;
    style?: StyleProp<ViewStyle>;
};

const TitleBackButton: React.FC<Props> = ({ title, ...props }) => {
    return (
        <View
            style={[
                {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                props.style,
            ]}>
            <NavigateBackButton />
            {title ? (
                <View
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                    }}>
                    <Text
                        style={{
                            color: Colors.main.constrast,
                            fontSize: 30,
                            fontWeight: 'bold',
                        }}>
                        {title}
                    </Text>
                </View>
            ) : undefined}
        </View>
    );
};

export default TitleBackButton;
