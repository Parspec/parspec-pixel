import { forwardRef } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import { default as MUISwitch, SwitchProps as MUISwitchProps } from '@mui/material/Switch';

export interface SwitchProps extends Omit<MUISwitchProps, 'classes'> {
    label?: React.ReactNode;
    color?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium';
}

export const Switch: React.FC<SwitchProps> = forwardRef(({ label, color, size, ...rest }, ref) => (
    <FormControlLabel ref={ref} control={<MUISwitch {...rest} size={size} color={color} />} label={label} />
));

Switch.defaultProps = {
    label: '',
    color: 'tertiary',
    size: 'small'
};
