import {default as MUIModal, ModalProps as MUIModalProps } from '@mui/material/Modal';
import { Box } from '../Box';

import { 
  ModalFooterStyle,
  ModalBodyStyle, 
  ModalContainerStyle, 
  ModalHeaderStyle
} from './ModalStyles';

export interface ModalProps extends Pick<MUIModalProps, "open" | "onClose" | "aria-labelledby" | "aria-describedby" | "children" >{
  openModal: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
  return (
      <MUIModal
        open={props?.openModal}
        onClose={props?.onClose}
        aria-labelledby={props?.['aria-labelledby']}
        aria-describedby={props?.['aria-describedby']}
      >
        <Box sx={ModalContainerStyle}>
            <ModalHeaderStyle>
              {props?.header}
            </ModalHeaderStyle>

            <ModalBodyStyle>
              {props?.children}
            </ModalBodyStyle>

            <ModalFooterStyle>
              {props?.footer}
            </ModalFooterStyle>
        </Box>
      </MUIModal>
  );
}
