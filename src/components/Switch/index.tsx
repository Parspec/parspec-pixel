import { forwardRef } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { default as MUISwitch, SwitchProps as MUISwitchProps } from '@mui/material/Switch';
import { Box } from '../Box';

export interface SwitchProps extends Omit<MUISwitchProps, 'classes'> {
    label?: React.ReactNode;
    color?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium';
}

export const Switch = forwardRef<HTMLDivElement, SwitchProps>(({ label, color, size, ...rest }, ref) => (
    <Box ref={ref}>
        <FormControlLabel control={<MUISwitch {...rest} size={size} color={color} />} label={label} />)
    </Box>
));

Switch.defaultProps = {
    label: '',
    color: 'tertiary',
    size: 'small'
};
