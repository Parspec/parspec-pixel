import { default as MUICircularProgress, CircularProgressProps as MUICircularProgressProps } from '@mui/material/CircularProgress';

export interface CircularProgressProps extends Omit<MUICircularProgressProps, 'sx'> {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

const fontSize = {
    xxs: 8,
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
    xxl: 32
};

export const CircularProgress: React.FC<CircularProgressProps> = ({ color, size, ...rest }) => <MUICircularProgress color={color} size={fontSize[size || 'md']} {...rest} />;

CircularProgress.defaultProps = {
    color: 'inherit',
    size: 'md'
};
