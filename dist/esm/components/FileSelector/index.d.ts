/// <reference types="react" />
interface fileType {
    path: string;
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}
interface FileSelectorProps {
    maxFiles?: number;
    acceptedFormats?: string[];
    onUpload?: (args: fileType[]) => void;
    url?: string;
    error?: string;
    helperText?: string;
    onSelect?: (args: fileType[]) => void;
    placeholder?: string;
    borderColor?: 'primary' | 'secondary' | 'tertiary';
    onChange: (e: any) => void;
}
export declare const FileSelector: import("react").ForwardRefExoticComponent<FileSelectorProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
