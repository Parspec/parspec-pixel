import { Box } from '../Box';
import { Alert, AlertProps } from '@mui/material';
import { CloseIcon } from '../Icons';

export interface alertBannerProps extends Omit<AlertProps, 'classes'> {
    onClose: () => void;
    children?: React.ReactNode;
    text: string;
    variant: 'filled' | 'outlined';
    severity: 'success' | 'info' | 'warning' | 'error';
}

export const AlertBanner: React.FC<alertBannerProps> = ({ onClose, children, text, variant, severity }) => {
    return (
        <Alert
            onClose={onClose}
            variant={variant}
            severity={severity}
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 2,
                height: 20,
                boxSizing: 'content-box',
                '& .MuiAlert-icon': {
                    marginRight: 2
                }
            }}
            action={
                <Box display="flex" alignItems="center" gap={2} paddingBottom={1} paddingRight={2}>
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
    onClose: () => {},
    text: 'You need to enter custom message',
    variant: 'filled',
    children: <></>,
    severity: 'warning'
};
