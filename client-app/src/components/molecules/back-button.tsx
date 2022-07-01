import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import BackButtonIcon from '@src/shared/ui/back-button-icon';
import { IconProps } from 'react-native-vector-icons/Icon';

type Props = {
    buttonProps?: PressableProps;
    iconProps?: Omit<IconProps, 'name'>;
};

const BackButton: React.FC<Props> = ({ buttonProps, iconProps }) => {
    return (
        <Pressable {...buttonProps}>
            <BackButtonIcon {...iconProps} />
        </Pressable>
    );
};

export default BackButton;
