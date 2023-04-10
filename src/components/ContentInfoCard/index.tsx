import { Box, BoxProps } from '@mui/material';

interface ContentInfoCardProps extends Omit<BoxProps, 'border' | 'borderColor' | 'padding'> {}

export function ContentInfoCard({ children, ...otherProps }: ContentInfoCardProps) {
    return (
        <Box {...otherProps} padding="8px" border="1px solid" borderColor="primary.dark" color="primary.dark">
            {children}
        </Box>
    );
}
