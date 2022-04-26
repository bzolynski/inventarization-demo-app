import React from 'react';
import Backdrop from '../atoms/backdrop';
import Spinner, { SpinnerProps } from '@src/components/atoms/spinner';

type Props = SpinnerProps & {
    backdropColor: string;
};

const BackdropSpinner: React.FC<Props> = ({
    backdropColor,
    ...spinnerProps
}) => {
    return (
        <Backdrop color={backdropColor}>
            <Spinner {...spinnerProps} />
        </Backdrop>
    );
};

export default BackdropSpinner;
