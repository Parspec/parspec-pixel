/// <reference types="react" />
export declare const FileSelector: ({ maxFiles, acceptedFormats, onUpload, uploadFile, url, error, helperText, onSelect }: {
    maxFiles?: number | undefined;
    acceptedFormats?: string[] | undefined;
    onUpload?: ((args: {}[]) => void) | undefined;
    uploadFile?: boolean | undefined;
    url: string;
    error?: string | undefined;
    helperText?: string | undefined;
    onSelect?: ((args: {}[]) => void) | undefined;
}) => JSX.Element;
