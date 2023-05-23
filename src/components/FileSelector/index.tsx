import { useCallback, useEffect, useState, forwardRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Avatar } from '@mui/material';
import { Box } from '../Box';
import { BodySmall } from '../Typography';
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
    onDeleteFile?: () => void;
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
            onDeleteFile = () => {}
        },
        ref
    ) => {
        const [files, setFiles] = useState<any>([]);
        const [result, setResults] = useState([]);

        useEffect(() => {
            if (preSelectedFile?.length) {
                setFiles(preSelectedFile);
            }
        }, []);

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
                let uploadedFiles = result.filter((file) => file);
                if (uploadedFiles.length === files.length) {
                    onUpload(uploadedFiles);
                }
                if (files.length < uploadedFiles.length) {
                    let uploadedData = uploadedFiles.filter((item: { file: { name: string } }) => files.map((file: { name: string }) => file.name).includes(item.file.name));
                    onUpload(uploadedData);
                }
            }
        }, [result]);

        //Function called when file is selected
        const onDrop = useCallback((acceptedFiles: any) => {
            setFiles(acceptedFiles);
        }, []);

        //Function called when file is deleted
        const onDelete = (file: { name: string }) => {
            setFiles((old: any) => old.filter((item: { name: string }) => item.name !== file.name));
            setResults((old) => old.filter((item: { file: { name: string } }) => item.file.name !== file.name));
            onDeleteFile();
        };

        //Callback function to get the result of file uplaod
        const handleResults = (data: {}, index: number) => {
            setResults((old) => {
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
            <Box ref={ref} height={'100%'}>
                {!files.length ? (
                    <Box {...getRootProps()} height={'100%'}>
                        <input type="file" {...getInputProps()} />
                        <Box
                            p={6}
                            width={1}
                            border={'1px solid'}
                            borderColor={borderColor}
                            borderRadius={1}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ cursor: 'pointer' }}
                            height={'100%'}
                        >
                            <Box width={'100%'} textAlign="center">
                                <BodySmall>{placeholder}</BodySmall>
                            </Box>
                            <Box mt={6} mb={3}>
                                <Avatar>
                                    <UploadIcon />
                                </Avatar>
                            </Box>
                            <BodySmall>Browse</BodySmall>
                        </Box>
                    </Box>
                ) : (
                    <Box>
                        {files.map((file: { name: string; size?: number }, index: number) => (
                            <SelectedFile key={file.name} file={file} onDelete={onDelete} url={url} index={index} handleResults={handleResults} />
                        ))}
                    </Box>
                )}
                {error && (
                    <Box mt={1}>
                        <BodySmall color="error">{error}</BodySmall>
                    </Box>
                )}
                {helperText && (
                    <Box mt={2}>
                        <BodySmall color="secondary">{helperText}</BodySmall>
                    </Box>
                )}
            </Box>
        );
    }
);

FileSelector.defaultProps = {
    borderColor: 'secondary'
};
