import { Box, BoxProps } from '@mui/material';

interface InfoProps extends Omit<BoxProps, 'border' | 'borderColor' | 'padding'> {}

export function Info({ children, ...otherProps }: InfoProps) {
    return (
        <Box {...otherProps} p={2} border="1px solid" borderColor="primary.main" color="primary.main" bgcolor={'primary.light'}>
            {children}
        </Box>
    );
}
