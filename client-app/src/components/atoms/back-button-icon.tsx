import React from 'react';

import IonIcon from 'react-native-vector-icons/Ionicons';
import { IconProps } from 'react-native-vector-icons/Icon';

type Props = Omit<IconProps, 'name'>;

const BackButtonIcon: React.FC<Props> = ({ ...props }) => {
    return <IonIcon {...props} name="arrow-back-outline" />;
    // return <ArrowLeftSVG {...props} />;
};

export default BackButtonIcon;
