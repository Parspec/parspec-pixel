import { Avatar } from '@mui/material';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';

const fileFormats = {
    '.png': 'image/png',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.pdf': 'application/pdf'
};

const getAcceptedFormats = (formats: string[]) => {
    let acceptedFormats = {} as any;
    formats.forEach((format: string) => {
        let key = fileFormats[format as keyof typeof fileFormats];
        if (key) {
            acceptedFormats[key] = [format];
        }
    });
    return acceptedFormats;
};

const FileSelector = ({
    maxFiles = 1,
    acceptedFormats = [],
    onUpload,
    uploadFile = true,
    url
}: {
    maxFiles?: number;
    acceptedFormats?: string[];
    onUpload: () => {};
    uploadFile: boolean;
    url: string;
}) => {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles: any) => {
        // Do something with the files
        setFiles(acceptedFiles);
        console.log('accepted filtes', acceptedFiles);
    }, []);

    let dropzoneProps = { onDrop, maxFiles, accept: {} };

    if (acceptedFormats.length) {
        dropzoneProps.accept = getAcceptedFormats(acceptedFormats);
    }

    const { getRootProps, getInputProps } = useDropzone({
        ...dropzoneProps
    });

    console.log('files', files);

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
                        <Box display="flex" justifyContent="space-between">
                            <Box>
                                <Typography.BodySmall fontWeight={600}>{file.name}</Typography.BodySmall>
                                <Typography.BodySmall>{(file.size / 1000).toFixed(2)} kb</Typography.BodySmall>
                            </Box>
                        </Box>
                    ))}
                </Box>
            )}
        </>
    );
};

export default FileSelector;
