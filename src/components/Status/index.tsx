import React from 'react';
import { Box } from '../Box';

interface StatusProps {
    color?: 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'success' | 'error';
    children?: React.ReactNode;
}
export const Status: React.FC<StatusProps> = ({ color, children }) => {
    return (
        <Box bgcolor={`${color}.light`} color={`${color}.main`} p={1} pl={2} pr={2} maxWidth={'max-content'}>
            {children}
        </Box>
    );
};

Status.defaultProps = {
    color: 'primary'
};
