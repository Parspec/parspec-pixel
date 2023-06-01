/// <reference types="react" />
import { SvgIconProps as MUISvgIconProps } from '@mui/material';
export declare function getFillColor(color: string): string;
export interface SvgIconProps extends Omit<MUISvgIconProps, 'fontSize'> {
    fontSize?: 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'inherit';
}
export declare function SvgIcon({ children, fontSize, color, ...restProps }: SvgIconProps): JSX.Element;
export declare namespace SvgIcon {
    var defaultProps: {
        fontSize: string;
        color: string;
    };
}
