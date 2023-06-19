import { default as MUIModal, ModalProps as MUIModalProps } from '@mui/material/Modal';
import { Box } from '../Box';
import { ModalContainerStyle } from './ModalStyles';
import { forwardRef } from 'react';

export interface ModalProps extends Pick<MUIModalProps, 'open' | 'onClose' | 'children' | 'keepMounted'> {
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({ open, onClose, children, header, footer, keepMounted, ...rest }, ref) => {
    return (
        <MUIModal keepMounted={keepMounted} open={open} onClose={onClose} {...rest} ref={ref}>
            <Box sx={ModalContainerStyle}>
                <Box width="100%" pb={2}>
                    {header}
                </Box>

                <Box width="100%" pb={1}>
                    {children}
                </Box>

                <Box width="100%" mt="auto" pt={4}>
                    {footer}
                </Box>
            </Box>
        </MUIModal>
    );
});

Modal.defaultProps = {
    header: <></>,
    footer: <></>,
    children: <></>
};
