/// <reference types="react" />
export interface ModalFooterProps {
    onAccept?: () => void;
    onReject?: () => void;
    cancelButtonLabel?: string;
    continueButtonLabel?: string;
    continueButtonColor?: 'primary' | 'secondary' | 'tertiary' | 'error';
    isLoading?: boolean;
    helperText?: React.ReactNode;
    isCancelButtonDisabled?: boolean;
}
export declare const ModalFooter: React.FC<ModalFooterProps>;
