import { CloseIcon } from '../Icons';
import { BodyBig } from '../Typography';
import { IconButton } from '@mui/material';
import { Box } from '../Box';

export interface ModalHeaderHeaderProps {
    title: string;
    onClose: () => void;
    children?: React.ReactNode;
}

export const ModalHeader: React.FC<ModalHeaderHeaderProps> = ({ title, onClose, children }) => {
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

ModalHeader.defaultProps = {
    children: <></>
};
