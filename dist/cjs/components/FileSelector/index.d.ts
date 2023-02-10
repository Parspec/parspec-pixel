/// <reference types="react" />
export declare const FileSelector: {
    ({ maxFiles, acceptedFormats, onUpload, url, error, helperText, onSelect }: {
        maxFiles: number;
        acceptedFormats: string[];
        onUpload: (args: File[]) => void;
        url: string;
        error: string;
        helperText: string;
        onSelect: (args: File[]) => void;
    }): JSX.Element;
    defaultProps: {
        maxFiles: number;
        acceptedFormats: never[];
        onUpload: () => void;
        error: string;
        helperText: string;
        onSelect: () => void;
        url: string;
    };
};
