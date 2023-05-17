/// <reference types="react" />
export interface FileSelectorFileType {
    file: {
        path?: string;
        lastModified?: number;
        lastModifiedDate?: Date;
        name: string;
        size?: number;
        type?: string;
        webkitRelativePath?: string;
    };
}
interface FileSelectorProps {
    maxFiles?: number;
    acceptedFormats?: string[];
    onUpload?: (args: FileSelectorFileType[] | File[]) => void;
    url?: string;
    error?: string;
    helperText?: string;
    onSelect?: (args: FileSelectorFileType[] | File[]) => void;
    placeholder?: string;
    borderColor?: 'primary' | 'secondary' | 'tertiary';
    preSelectedFile?: FileSelectorFileType[] | File[];
}
export declare const FileSelector: import("react").ForwardRefExoticComponent<FileSelectorProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
