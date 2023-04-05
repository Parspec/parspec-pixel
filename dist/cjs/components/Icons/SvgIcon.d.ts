/// <reference types="react" />
import { SvgIconProps as MUISvgIconProps } from '@mui/material';
export interface SvgIconProps extends Omit<MUISvgIconProps, 'fontSize'> {
    fontSize?: 'small' | 'medium' | 'large' | 'xl' | 'xxl';
}
export declare function SvgIcon({ children, fontSize, ...restProps }: SvgIconProps): JSX.Element;
