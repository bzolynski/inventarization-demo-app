import React from 'react';
import { Text } from 'react-native';

type Props = {
    text: string;
    color?: string;
};

const InputLabel: React.FC<Props> = ({ text, color }) => {
    return (
        <Text
            style={{
                marginBottom: 8,
                color: color ? color : '#acb2c3',
                shadowRadius: 1,
            }}>
            {text}
        </Text>
    );
};

export default InputLabel;
