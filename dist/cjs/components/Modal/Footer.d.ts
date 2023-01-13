/// <reference types="react" />
export interface FooterProps {
    onAccept?: () => void;
    onReject?: () => void;
    cancelButtonLabel?: string;
    continueButtonLabel?: string;
}
export declare const Footer: React.FC<FooterProps>;
