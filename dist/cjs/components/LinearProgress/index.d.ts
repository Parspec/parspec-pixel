/// <reference types="react" />
import { LinearProgressProps as MUILinearProgressProps } from '@mui/material/LinearProgress';
export interface LinearProgressProps extends Omit<MUILinearProgressProps, 'classes'> {
    color?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
}
export declare const LinearProgress: React.FC<LinearProgressProps>;
