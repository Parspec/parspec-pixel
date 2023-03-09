/// <reference types="react" />
interface FileSelectorProps {
    maxFiles?: number;
    acceptedFormats?: string[];
    onUpload?: (args: File[]) => void;
    url?: string;
    error?: string;
    helperText?: string;
    onSelect?: (args: File[]) => void;
}
export declare const FileSelector: import("react").ForwardRefExoticComponent<FileSelectorProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
