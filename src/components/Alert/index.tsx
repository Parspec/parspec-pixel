import { Box } from '../Box';
import { Alert, AlertProps } from '@mui/material';
import { CloseIcon } from '../Icons';

export interface alertBannerProps extends Omit<AlertProps, 'classes'> {
    color?: 'success' | 'info' | 'warning' | 'error' | undefined;
    onClose: () => void;
    children?: React.ReactNode;
    text: string;
    variant: 'filled' | 'outlined';
    severity: 'success' | 'info' | 'warning' | 'error';
}

export const AlertBanner: React.FC<alertBannerProps> = ({ color, onClose, children, text, variant, severity }) => {
    return (
        <Alert
            onClose={onClose}
            color={color}
            variant={variant}
            severity={severity}
            sx={{ paddingLeft: '8px', paddingRight: '8px' }}
            action={
                <Box display="flex" alignItems="center" gap={3} paddingTop="6px" marginLeft="0px">
                    {children}
                    <CloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} />
                </Box>
            }
        >
            <Box>{text}</Box>
        </Alert>
    );
};

AlertBanner.defaultProps = {
    color: 'warning',
    onClose: () => {},
    text: 'You need to enter custom message',
    variant: 'filled',
    children: <></>,
    severity: 'warning'
};
