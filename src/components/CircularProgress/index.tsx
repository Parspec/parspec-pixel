import { default as MUICircularProgress, CircularProgressProps as MUICircularProgressProps } from '@mui/material/CircularProgress';
import { SIZE_OPTIONS } from '../../Shared/utils';
import { SizeType } from '../../Shared/interfaces';

export interface CircularProgressProps extends Omit<MUICircularProgressProps, 'sx'> {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
    size?: SizeType;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({ color = 'inherit', size = 'sm', ...rest }) => <MUICircularProgress color={color} size={SIZE_OPTIONS[size]} {...rest} />;
