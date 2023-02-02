import { default as MUICircularProgress, CircularProgressProps as MUICircularProgressProps } from '@mui/material/CircularProgress';

export interface CircularProgressProps extends Omit<MUICircularProgressProps, 'sx'> {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
}

export const CircularProgress: React.FC<CircularProgressProps> = ({ color, size, ...rest }) => <MUICircularProgress color={color} size={size} {...rest} />;

CircularProgress.defaultProps = {
    color: 'inherit',
    size: 20
};
