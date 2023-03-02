/// <reference types="react" />
import { AlertProps } from '@mui/material';
export interface alertBannerProps extends Omit<AlertProps, 'classes'> {
    color?: 'success' | 'info' | 'warning' | 'error' | undefined;
    onClose: () => void;
    children?: React.ReactNode;
    text: string;
    variant: 'filled' | 'outlined';
    severity: 'success' | 'info' | 'warning' | 'error';
}
export declare const AlertBanner: React.FC<alertBannerProps>;
