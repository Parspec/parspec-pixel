/// <reference types="react" />
export interface FileSelectorFileType {
    path?: string;
    lastModified?: number;
    lastModifiedDate?: Date;
    name: string;
    size?: number;
    type?: string;
    webkitRelativePath?: string;
    filepath?: string;
}
interface FileSelectorProps {
    maxFiles?: number;
    acceptedFormats?: string[];
    onUpload?: (args: {
        file: FileSelectorFileType | File | Blob;
        error?: string;
        progress?: number;
    }[]) => void;
    url?: string;
    error?: string;
    helperText?: string;
    onSelect?: (args: FileSelectorFileType[] | File[] | Blob) => void;
    placeholder?: string | React.ReactNode;
    borderColor?: 'primary' | 'secondary' | 'tertiary';
    preSelectedFile?: FileSelectorFileType[] | File[];
    onDeleteFile?: () => void;
    isLoading?: boolean;
}
export declare const FileSelector: import("react").ForwardRefExoticComponent<FileSelectorProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
