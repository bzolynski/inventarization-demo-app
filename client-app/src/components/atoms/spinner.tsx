import React from 'react';
import {
    ActivityIndicator,
    ActivityIndicatorProps,
    StyleSheet,
    View,
} from 'react-native';

type SpinnerPosition = 'default' | 'center';

type CustomProps = {
    position?: SpinnerPosition;
};

export type SpinnerProps = CustomProps & ActivityIndicatorProps;

const Spinner: React.FC<SpinnerProps> = ({
    style,
    position,
    ...indicatorProps
}) => {
    return (
        <ActivityIndicator
            {...indicatorProps}
            style={[
                style,
                position === 'center' ? StyleSheet.absoluteFill : undefined,
            ]}
        />
    );
};

export default Spinner;
