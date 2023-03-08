/// <reference types="react" />
import { SwitchProps as MUISwitchProps } from '@mui/material/Switch';
export interface SwitchProps extends Omit<MUISwitchProps, 'classes'> {
    label?: React.ReactNode;
    color?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium';
}
export declare const Switch: React.FC<SwitchProps>;
