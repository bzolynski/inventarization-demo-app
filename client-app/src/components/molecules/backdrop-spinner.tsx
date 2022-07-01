import React from 'react';
import Backdrop from '../../shared/ui/backdrop';
import Spinner, { SpinnerProps } from '@src/shared/ui/spinner';
import { View } from 'react-native';

type Props = SpinnerProps & {
    backdropColor: string;
};

const BackdropSpinner: React.FC<Props> = ({
    backdropColor,
    ...spinnerProps
}) => {
    return (
        <Backdrop color={backdropColor}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Spinner {...spinnerProps} />
            </View>
        </Backdrop>
    );
};

export default BackdropSpinner;
