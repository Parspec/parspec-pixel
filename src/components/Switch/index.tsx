import FormControlLabel from '@mui/material/FormControlLabel';
import { default as MUISwitch, SwitchProps as MUISwitchProps } from '@mui/material/Switch';

export interface SwitchProps extends Omit<MUISwitchProps, 'classes'> {
    label: React.ReactNode;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
}

export const Switch: React.FC<SwitchProps> = ({ label, color, ...rest }) => {
    return <FormControlLabel control={<MUISwitch {...rest} color={color} />} label={label} />;
};

Switch.defaultProps = {
    label: '',
    color: 'secondary',
    inputProps: { 'aria-label': 'basic' }
};
