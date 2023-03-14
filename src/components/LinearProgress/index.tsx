import { default as MUILinearProgress, LinearProgressProps as MUILinearProgressProps } from '@mui/material/LinearProgress';
import { forwardRef } from 'react';
import { Box } from '../Box';

export interface LinearProgressProps extends Omit<MUILinearProgressProps, 'classes'> {
    color?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
}

export const LinearProgress: React.FC<LinearProgressProps> = forwardRef((props, ref) => {
    return (
        <Box sx={{ width: '100%' }}>
            <MUILinearProgress
                sx={{
                    height: 20
                }}
                ref={ref}
                {...props}
            />
        </Box>
    );
});

LinearProgress.defaultProps = {
    color: 'tertiary',
    variant: 'indeterminate'
};
