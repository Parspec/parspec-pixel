import { useCallback, useEffect, useState, forwardRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Avatar } from '@mui/material';
import { Box } from '../Box';
import { BodyXS } from '../Typography';
import { UploadIcon } from '../Icons';
import { getAcceptedFormats } from './fileFormats';
import SelectedFile from './SelectedFile';

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
    onUpload?: (args: { file: FileSelectorFileType | File; error?: string; progress?: number }[]) => void;
    url?: string;
    error?: string;
    helperText?: string;
    onSelect?: (args: FileSelectorFileType[] | File[]) => void;
    placeholder?: string | React.ReactNode;
    borderColor?: 'primary' | 'secondary' | 'tertiary';
    preSelectedFile?: FileSelectorFileType[] | File[];
    onDeleteFile?: () => void;
    isLoading?: boolean;
    showUploaderAlways?: boolean;
    maxTotalFileSizeAllowed?: { size_in_bytes: number; errorText: string };
    maxSizeLimitPerFile?: number;
}

export const FileSelector = forwardRef<HTMLDivElement, FileSelectorProps>(
    (
        {
            maxFiles = 1,
            acceptedFormats = [],
            onUpload = () => {},
            url = '',
            error = '',
            helperText = '',
            onSelect = () => {},
            placeholder = '',
            borderColor,
            preSelectedFile,
            onDeleteFile = () => {},
            isLoading = false,
            showUploaderAlways = false,
            maxTotalFileSizeAllowed = { size_in_bytes: Infinity, errorText: '' },
            maxSizeLimitPerFile = Infinity
        },
        ref
    ) => {
        const [files, setFiles] = useState<any>([]);
        const [result, setResults] = useState<any>([]);
        const [maxFileSizeExceededError, setMaxFileSizeExceededError] = useState(false);

        useEffect(() => {
            if (preSelectedFile?.length) {
                setFiles(preSelectedFile);
            }
        }, [preSelectedFile]);

        //To give the information of selected files to the main component.
        useEffect(() => {
            onSelect(files);
            if (!files.length) {
                setResults([]);
                onUpload([]);
            }
        }, [files]);

        //To call the callback when uploading of all files is done
        useEffect(() => {
            if (files.length) {
                let uploadedFiles = result.filter((file: any) => file);
                if (uploadedFiles.length === files.length) {
                    onUpload(uploadedFiles);
                }
                if (files.length < uploadedFiles.length) {
                    let uploadedData = uploadedFiles.filter((item: { file: { name: string } }) => files.map((file: { name: string }) => file?.name)?.includes(item?.file?.name));
                    onUpload(uploadedData);
                }
                setResults([]);
            }
        }, [result]);

        //Function called when file is selected
        const onDrop = useCallback(
            (acceptedFiles: any) => {
                setMaxFileSizeExceededError(false);

                let allFiles: any[] = [];

                if (maxFiles > 1) {
                    const prevFileObj = new Set();
                    for (let item of files) {
                        prevFileObj.add(item.name);
                    }

                    const modifiedAcceptedFiles = acceptedFiles.map((item: any) => {
                        if (prevFileObj.has(item?.name)) {
                            const currDateTime = new Date().toISOString();

                            const extractName = item.name.split('.');

                            const newName: string = extractName.slice(0, extractName.length - 1).join('.') + '_' + `${currDateTime}` + '.' + extractName.slice(-1).join('.');

                            const myNewFile = new File([item], newName, { type: item.type });

                            return myNewFile;
                        } else {
                            return item;
                        }
                    });

                    allFiles = [...files, ...modifiedAcceptedFiles];
                } else {
                    allFiles = [...acceptedFiles];
                }

                let currTotalFilesSize = 0;
                if (allFiles.length > 0) {
                    for (let doc of allFiles) {
                        if (doc.size > maxSizeLimitPerFile) {
                            break;
                        }
                        currTotalFilesSize = currTotalFilesSize + doc.size;
                    }
                }

                //check size
                if (currTotalFilesSize < maxTotalFileSizeAllowed.size_in_bytes) {
                    setFiles((old: any) => [...allFiles]);
                } else {
                    setMaxFileSizeExceededError(true);
                }
            },
            [files]
        );

        //Function called when file is deleted
        const onDelete = (file: { name: string }) => {
            if (maxFileSizeExceededError) {
                setMaxFileSizeExceededError(false);
            }

            setFiles((old: any) => old.filter((item: { name: string }) => item?.name !== file?.name));
            setResults((old: any) => old.filter((item: { file: { name: string } }) => item?.file?.name !== file?.name));
            onDeleteFile();
        };

        //Callback function to get the result of file uplaod
        const handleResults = (data: {}, index: number) => {
            setResults((old: any) => {
                let output: any = [...old];
                output[index] = data;
                return output;
            });
        };

        const { getRootProps, getInputProps } = useDropzone({
            onDrop,
            maxFiles,
            accept: acceptedFormats.length ? getAcceptedFormats(acceptedFormats) : {}
        });

        return (
            <>
                <Box ref={ref} height={'100%'} width={'100%'}>
                    {!files.length ? (
                        <Box {...getRootProps()} height={'100%'} width={'100%'}>
                            <input type="file" {...getInputProps()} />
                            <Box
                                p={2}
                                height={'100%'}
                                width={'100%'}
                                border={'1px solid'}
                                borderColor={borderColor}
                                borderRadius={1}
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ cursor: 'pointer' }}
                            >
                                <Box width={'100%'} textAlign="center" m={0.5}>
                                    <BodyXS limit={false}>{placeholder}</BodyXS>
                                </Box>
                                <Box my={0.5}>
                                    <Avatar>
                                        <UploadIcon />
                                    </Avatar>
                                </Box>
                                <Box m={0.5}>
                                    <BodyXS>Browse</BodyXS>
                                </Box>
                            </Box>

                            {error && (
                                <Box mt={1}>
                                    <BodyXS color="error">{error}</BodyXS>
                                </Box>
                            )}
                            {helperText && (
                                <Box mt={1}>
                                    <BodyXS color="secondary">{helperText}</BodyXS>
                                </Box>
                            )}
                            {maxFileSizeExceededError && (
                                <Box mt={1}>
                                    <BodyXS color="error" limit={false} lines={2}>
                                        {maxTotalFileSizeAllowed.errorText}
                                    </BodyXS>
                                </Box>
                            )}
                        </Box>
                    ) : (
                        <Box height={'100%'} width={'100%'}>
                            <Box>
                                {files.map((file: { name: string; size?: number }, index: number) => (
                                    <Box my={1}>
                                        <SelectedFile key={file.name} file={file} onDelete={onDelete} url={url} index={index} handleResults={handleResults} isLoading={isLoading} />
                                    </Box>
                                ))}
                            </Box>

                            {showUploaderAlways && (
                                <Box {...getRootProps()}>
                                    <input type="file" {...getInputProps()} />
                                    <Box
                                        p={2}
                                        height={'100%'}
                                        width={'100%'}
                                        border={'1px solid'}
                                        borderColor={borderColor}
                                        borderRadius={1}
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <Box width={'100%'} textAlign="center" m={0.5}>
                                            <BodyXS limit={false}>{placeholder}</BodyXS>
                                        </Box>
                                        <Box my={0.5}>
                                            <Avatar>
                                                <UploadIcon />
                                            </Avatar>
                                        </Box>
                                        <Box m={0.5}>
                                            <BodyXS>Browse</BodyXS>
                                        </Box>
                                    </Box>
                                </Box>
                            )}

                            {error && (
                                <Box mt={1}>
                                    <BodyXS color="error">{error}</BodyXS>
                                </Box>
                            )}
                            {helperText && (
                                <Box mt={1}>
                                    <BodyXS color="secondary">{helperText}</BodyXS>
                                </Box>
                            )}
                            {maxFileSizeExceededError && (
                                <Box mt={1}>
                                    <BodyXS color="error" limit={false} lines={2}>
                                        {maxTotalFileSizeAllowed.errorText}
                                    </BodyXS>
                                </Box>
                            )}
                        </Box>
                    )}
                </Box>
            </>
        );
    }
);

FileSelector.defaultProps = {
    borderColor: 'secondary'
};
