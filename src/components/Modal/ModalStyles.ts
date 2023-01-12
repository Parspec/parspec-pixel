import { Box } from '../Box';
import { styled } from '@mui/system';

export const ModalContainerStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    backgroundColor: '#FFFFFF',
    border: '1px solid #000',
    boxShadow: 24,
    pl: 6,
    pr: 6
};

export const ModalHeaderStyle = {
    width: '100%',
    pt: 5,
    pb: 2
};

export const HeaderContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

export const ModalBodyStyle = {
    width: '100%',
    pt: 1,
    pb: 1
};

export const ModalFooterStyle = {
    width: '100%',
    mt: 'auto',
    pt: 5,
    pb: 2
};

export const FooterContentStyle = {
    display: 'flex',
    justifyContent: 'end',
    gap: 1
};
