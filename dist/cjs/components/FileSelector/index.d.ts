/// <reference types="react" />
export interface IFileSelectorFileType {
    file: {
        path: string;
        lastModified: number;
        lastModifiedDate: Date;
        name: string;
        size: number;
        type: string;
        webkitRelativePath: string;
    };
}
interface FileSelectorProps {
    maxFiles?: number;
    acceptedFormats?: string[];
    onUpload?: (args: IFileSelectorFileType[]) => void;
    url?: string;
    error?: string;
    helperText?: string;
    onSelect?: (args: IFileSelectorFileType[]) => void;
    placeholder?: string;
    borderColor?: 'primary' | 'secondary' | 'tertiary';
}
export declare const FileSelector: import("react").ForwardRefExoticComponent<FileSelectorProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
