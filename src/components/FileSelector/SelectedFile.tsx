import { useEffect, useState } from 'react';

import axios from 'axios';
import { v4 as uuidV4 } from 'uuid';
import { IconButton } from '@mui/material';

import { Box } from '../Box';
import { BodySmall } from '../Typography';
import { DeleteIcon } from '../Icons';
import ProgressBar from '../ProgressBar';
import { Paper } from '../Paper';
import { CircularProgress } from '../CircularProgress';

type SelectedFileProps = {
    file: {
        name: string;
        size?: number;
        filepath?: string;
    };
    onDelete: (arg: { name: string }) => void;
    url: string;
    index: number;
    handleResults: (data: {}, index: number) => void;
    isLoading?: boolean;
};

const SelectedFile = (props: SelectedFileProps) => {
    const { file, onDelete, url, handleResults, index, isLoading } = props;
    const [progress, setProgress] = useState(0);
    const [showProgress, setShowProgress] = useState(true);

    let source = axios.CancelToken.source();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const onUpload = async () => {
            try {
                let response = await axios.post(
                    url,
                    {
                        file_name: uuidV4() + file.name
                    },
                    {
                        headers: {
                            authorization: `Token ${token || 'f7f124dc2a0e40000022e91c557dd302d4eca195'}`,
                            'content-type': 'application/json'
                        }
                    }
                );

                let urlForUploading = response?.data?.signed_url;
                const resp = await axios.put(urlForUploading, file, {
                    onUploadProgress: (progressEvent) => {
                        let percentage = Math.ceil((progressEvent?.progress || 0) * 100);

                        setProgress(percentage);
                    },
                    // signal: controller?.signal,
                    cancelToken: source.token
                });

                console.log('resp-->', resp, 'cancelToken-->', source.token);

                setShowProgress(false);
                let s3_file_path = response?.data?.s3_file_path;
                return handleResults({ file, progress: 100, s3_file_path }, index);
            } catch (err: any) {
                console.log('err-->', err);

                if (err?.message !== 'canceled') return handleResults({ file, error: err.message }, index);
            }
        };
        if (url && !file.filepath) onUpload();
        else handleResults({ file, progress: 100 }, index);
        return () => {
            console.log('progress-->', progress);
            if (progress !== 1) source.cancel();
        };
    }, []);

    const handleDelete = () => {
        onDelete(file);
    };

    return (
        <Paper variant="outlined" sx={{ padding: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                    <BodySmall fontWeight={600}>{file.name}</BodySmall>
                    {file?.size && <BodySmall>{(file.size! / 1000).toFixed(2)} kb</BodySmall>}
                </Box>

                <Box ml="auto" display="flex">
                    {url && showProgress ? <ProgressBar progress={progress} /> : null}

                    <Box ml={2} display="flex" alignItems="center" gap="8px">
                        {!url && isLoading ? <CircularProgress color="primary" /> : null}
                        {!isLoading && (
                            <IconButton onClick={handleDelete} size="small">
                                <DeleteIcon />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};

export default SelectedFile;
