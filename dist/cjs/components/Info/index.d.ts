/// <reference types="react" />
import { BoxProps } from '@mui/material';
interface InfoProps extends Omit<BoxProps, 'border' | 'borderColor' | 'padding'> {
}
export declare function Info({ children, ...otherProps }: InfoProps): JSX.Element;
export {};
