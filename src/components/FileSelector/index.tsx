import { Avatar, IconButton } from '@mui/material';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';
import { DeleteIcon } from '../Icons';
import { getAcceptedFormats } from './fileFormats';

const FileSelector = ({
    maxFiles = 1,
    acceptedFormats = [],
    onUpload,
    uploadFile = true,
    url,
    error,
    helperText
}: {
    maxFiles?: number;
    acceptedFormats?: string[];
    onUpload?: () => {};
    uploadFile?: boolean;
    url: string;
    error?: string;
    helperText?: string;
}) => {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles: any) => {
        setFiles(acceptedFiles);
    }, []);

    const onDelete = (file: { name: string }) => {
        setFiles((old) => old.filter((item: { name: string }) => item.name !== file.name));
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        maxFiles,
        accept: acceptedFormats.length ? getAcceptedFormats(acceptedFormats) : {}
    });

    return (
        <>
            {!files.length ? (
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Box p={6} bgcolor="#f3f5fa" width={1} borderRadius={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ cursor: 'pointer' }}>
                        <Typography.BodySmall>Drag and drop files here, or:</Typography.BodySmall>
                        <Box mt={6} mb={3}>
                            <Avatar></Avatar>
                        </Box>
                        <Typography.BodySmall>Browse</Typography.BodySmall>
                    </Box>
                </div>
            ) : (
                <Box>
                    {files.map((file: { name: string; size: number }) => (
                        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                            <Box>
                                <Typography.BodySmall fontWeight={600}>{file.name}</Typography.BodySmall>
                                <Typography.BodySmall>{(file.size / 1000).toFixed(2)} kb</Typography.BodySmall>
                            </Box>
                            <IconButton onClick={() => onDelete(file)} size="small">
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    ))}
                </Box>
            )}
            {error && (
                <Box mt={1}>
                    <Typography.BodySmall>{error}</Typography.BodySmall>
                </Box>
            )}
            {helperText && (
                <Box mt={2}>
                    <Typography.BodySmall color="secondary">{helperText}</Typography.BodySmall>
                </Box>
            )}
        </>
    );
};

export default FileSelector;
