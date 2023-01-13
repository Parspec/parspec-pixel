import {default as MUIModal, ModalProps as MUIModalProps } from '@mui/material/Modal';
import { Box } from '../Box';
import { ModalContainerStyle } from './ModalStyles';

export interface ModalProps extends Pick<MUIModalProps, "open" | "onClose" | "children" >{
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({open, onClose, children, header, footer}) => {
  return (
      <MUIModal
        open={open}
        onClose={onClose}
      >
        <Box sx={ModalContainerStyle}>
            <Box 
              width='100%'
              pt={5} 
              pb={2} 
            >
              {header}
            </Box>

            <Box
              width='100%'
              pt={1} 
              pb={1}
            >
              {children}
            </Box>

            <Box
              width='100%'
              mt='auto'
              pt={5} 
              pb={2}
            >
              {footer}
            </Box>
        </Box>
      </MUIModal>
  );
}

Modal.defaultProps = {
  header: <></>,
  footer: <></>,
  children: <></>
};