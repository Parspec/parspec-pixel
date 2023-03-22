import { useCallback, useEffect, useState, forwardRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Avatar } from '@mui/material';
import { Box } from '../Box';
import { BodySmall } from '../Typography';
import { UploadIcon } from '../Icons';
import { getAcceptedFormats } from './fileFormats';
import SelectedFile from './SelectedFile';

interface FileSelectorProps {
    maxFiles?: number;
    acceptedFormats?: string[];
    onUpload?: (args: File[]) => void;
    url?: string;
    error?: string;
    helperText?: string;
    onSelect?: (args: File[]) => void;
    placeholder?: string;
}

export const FileSelector = forwardRef<HTMLDivElement, FileSelectorProps>(
    ({ maxFiles = 1, acceptedFormats = [], onUpload = () => {}, url = '', error = '', helperText = '', onSelect = () => {}, placeholder = '' }, ref) => {
        const [files, setFiles] = useState([]);
        const [result, setResults] = useState([]);

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
            setFiles((old) => old.filter((item: { name: string }) => item.name !== file.name));
            setResults((old) => old.filter((item: { file: { name: string } }) => item.file.name !== file.name));
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
            <Box ref={ref}>
                {!files.length ? (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Box
                            p={6}
                            border="1px solid"
                            borderColor={'teritary.main'}
                            width={1}
                            borderRadius={1}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ cursor: 'pointer' }}
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
                    </div>
                ) : (
                    <Box>
                        {files.map((file: { name: string; size: number }, index: number) => (
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
