/// <reference types="react" />
import { CircularProgressProps as MUICircularProgressProps } from '@mui/material/CircularProgress';
export interface CircularProgressProps extends Omit<MUICircularProgressProps, 'sx'> {
    color?: 'primary' | 'secondary' | 'tertiary';
}
export declare const CircularProgress: React.FC<CircularProgressProps>;
