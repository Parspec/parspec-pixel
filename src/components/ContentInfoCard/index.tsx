import { Box, BoxProps } from '@mui/material';

interface InfoProps extends Omit<BoxProps, 'border' | 'borderColor' | 'padding'> {}

export function Info({ children, ...otherProps }: InfoProps) {
    return (
        <Box {...otherProps} padding="8px" border="1px solid" borderColor="primary.dark" color="primary.dark">
            {children}
        </Box>
    );
}
