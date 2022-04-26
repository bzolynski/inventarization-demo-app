import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type CustomProps = {
    radius?: number;
    style?: StyleProp<ViewStyle>;
};

type Props = CustomProps;

const ElevationContainer: React.FC<Props> = ({ children, ...props }) => {
    const styles = createStyles(props.radius);

    return <View style={[styles.root, props.style]}>{children}</View>;
};

export default ElevationContainer;

const createStyles = (radius: number = 10) =>
    StyleSheet.create({
        root: {
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: radius,
            elevation: 5,
            borderRadius: radius,
        },
    });
