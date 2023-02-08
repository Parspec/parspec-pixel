import { CloseIcon } from '../Icons';
import { BodyBig } from '../Typography';
import { IconButton } from '@mui/material';
import { Box } from '../Box';

export interface HeaderProps {
    title: string;
    onClose: () => void;
    children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, onClose, children }) => {
    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <BodyBig textTransform={'capitalize'} fontWeight={600}>
                    {title}
                </BodyBig>
                <IconButton onClick={onClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>
            <Box>{children}</Box>
        </Box>
    );
};

Header.defaultProps = {
    children: <></>
};
