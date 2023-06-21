/// <reference types="react" />
export interface ModalHeaderHeaderProps {
    title: string;
    onClose: () => void;
    children?: React.ReactNode;
}
export declare const ModalHeader: React.FC<ModalHeaderHeaderProps>;
