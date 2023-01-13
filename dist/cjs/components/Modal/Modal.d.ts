/// <reference types="react" />
import { ModalProps as MUIModalProps } from '@mui/material/Modal';
export interface ModalProps extends Pick<MUIModalProps, "open" | "onClose" | "children"> {
    header?: React.ReactNode;
    footer?: React.ReactNode;
}
export declare const Modal: React.FC<ModalProps>;
