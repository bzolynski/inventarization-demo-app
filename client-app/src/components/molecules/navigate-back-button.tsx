import React from 'react';
import { PressableProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from './back-button';

type Props = PressableProps & {
    size?: number;
};

const NavigateBackButton: React.FC<Props> = ({
    children,
    size = 40,
    ...props
}) => {
    const navigation = useNavigation();

    const goBack = () => {
        if (navigation.canGoBack()) navigation.goBack();
        else console.log('CANT GO BACK !');
    };
    return (
        <BackButton
            buttonProps={{ ...props, onPress: () => goBack() }}
            iconProps={{ color: 'white', size: size }}
        />
    );
};

export default NavigateBackButton;
