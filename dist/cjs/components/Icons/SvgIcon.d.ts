/// <reference types="react" />
import { SvgIconProps as MUISvgIconProps, Theme } from '@mui/material';
export declare function getFillColor(theme: Theme, color: string | undefined): string | undefined;
export interface SvgIconProps extends Omit<MUISvgIconProps, 'fontSize'> {
    fontSize?: 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'inherit';
}
export declare function SvgIcon({ children, fontSize, color, ...restProps }: SvgIconProps): JSX.Element;
