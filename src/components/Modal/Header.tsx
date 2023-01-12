import { CloseIcon } from '../Icons';
import { Typography } from '../Typography';
import { IconButton } from '@mui/material';
import { Box } from '../Box';

export interface HeaderProps {
    title: string;
    onClose: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onClose }) => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography.BodyBig textTransform={'capitalize'} fontWeight={600}>
                {title}
            </Typography.BodyBig>
            <IconButton onClick={onClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </Box>
    );
};
