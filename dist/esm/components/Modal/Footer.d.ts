/// <reference types="react" />
export interface FooterProps {
    onAccept?: () => void;
    onReject?: () => void;
    cancelButtonLabel?: string;
    continueButtonLabel?: string;
    isLoading?: boolean;
}
export declare const Footer: React.FC<FooterProps>;
