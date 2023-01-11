import {default as MUIModal, ModalProps as MUIModalProps } from '@mui/material/Modal';
import { Box } from '../Box';
import { 
  ModalFooterStyle,
  ModalBodyStyle, 
  ModalContainerStyle, 
  ModalHeaderStyle
} from './ModalStyles';

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
            <ModalHeaderStyle>
              {header}
            </ModalHeaderStyle>

            <ModalBodyStyle>
              {children}
            </ModalBodyStyle>

            <ModalFooterStyle>
              {footer}
            </ModalFooterStyle>
        </Box>
      </MUIModal>
  );
}

Modal.defaultProps = {
  header: <></>,
  footer: <></>,
  children: <></>
};