import React from 'react';

import { default as MUIRadio, RadioProps as MUIRadioProps } from '@mui/material/Radio';

export interface RadioProps extends Omit<MUIRadioProps, 'classes' | 'TouchRippleProps'> {
    color: 'primary' | 'secondary';
}

export const Radio: React.FC<RadioProps> = (props) => <MUIRadio {...props} />;

Radio.defaultProps = {
    color: 'primary'
};
