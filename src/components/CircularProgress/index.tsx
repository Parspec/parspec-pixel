import { default as MUICircularProgress, CircularProgressProps as MUICircularProgressProps } from '@mui/material/CircularProgress';

export interface CircularProgressProps extends Omit<MUICircularProgressProps, 'sx'> {}

export const CircularProgress: React.FC<CircularProgressProps> = (props) => <MUICircularProgress {...props} />;

CircularProgress.defaultProps = {
    color: 'primary',
    size: 20,
    thickness: 3.6
};
