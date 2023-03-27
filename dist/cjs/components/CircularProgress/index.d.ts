/// <reference types="react" />
import { CircularProgressProps as MUICircularProgressProps } from '@mui/material/CircularProgress';
import { SizeType } from '../../Shared/interfaces';
export interface CircularProgressProps extends Omit<MUICircularProgressProps, 'sx'> {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
    size?: SizeType;
}
export declare const CircularProgress: React.FC<CircularProgressProps>;
