import { BoxProps } from '@mui/material';
interface InfoProps extends Omit<BoxProps, 'border' | 'borderColor' | 'padding'> {
}
export declare function Info({ children, ...otherProps }: InfoProps): import("react/jsx-runtime").JSX.Element;
export {};
