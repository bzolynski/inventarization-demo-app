import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
    color: string;
};

const Backdrop: React.FC<Props> = ({ color, children }) => {
    return (
        <View style={[StyleSheet.absoluteFill, { backgroundColor: color }]}>
            {children}
        </View>
    );
};

export default Backdrop;
