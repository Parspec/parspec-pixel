/// <reference types="react" />
export interface ModalFooterProps {
    onAccept?: () => void;
    onReject?: () => void;
    cancelButtonLabel?: string;
    continueButtonLabel?: string;
    isLoading?: boolean;
}
export declare const ModalFooter: React.FC<ModalFooterProps>;
