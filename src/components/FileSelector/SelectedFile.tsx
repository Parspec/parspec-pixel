import { IconButton } from '@mui/material';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { DeleteIcon } from '../Icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProgressBar from '../ProgressBar';

type SelectedFileProps = {
    file: {
        name: string;
        size: number;
    };
    onDelete: (arg: { name: string }) => void;
    url: string;
    index: number;
    handleResults: (data: {}, index: number) => void;
};

const SelectedFile = (props: SelectedFileProps) => {
    const { file, onDelete, url, handleResults, index } = props;
    const [progress, setProgress] = useState(0);

    // const controller = new AbortController();
    let source = axios.CancelToken.source();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const uploadFile = async () => {
            try {
                let response = await axios.post(
                    url,
                    {
                        s3_path: `media/temp_files/${file.name}`
                    },
                    {
                        headers: {
                            authorization: `Token f7f124dc2a0e40000022e91c557dd302d4eca195`,
                            'content-type': 'application/json'
                        }
                    }
                );
                let urlForUploading = response?.data?.signed_url;
                await axios.put(urlForUploading, file, {
                    onUploadProgress: (progressEvent) => {
                        let percentage = Math.ceil((progressEvent?.progress || 0) * 100);
                        setProgress(percentage);
                    },
                    // signal: controller?.signal,
                    cancelToken: source.token
                });
                return handleResults({ file, progress: 100 }, index);
            } catch (err: any) {
                if (err?.message !== 'canceled') return handleResults({ file, error: err.message }, index);
            }
        };
        uploadFile();
        return () => {
            if (progress !== 1) source.cancel();
        };
    }, []);

    const handleDelete = () => {
        // if (progress !== 1) controller.abort();
        onDelete(file);
    };

    return (
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box>
                <Typography.BodySmall fontWeight={600}>{file.name}</Typography.BodySmall>
                <Typography.BodySmall>{(file.size / 1000).toFixed(2)} kb</Typography.BodySmall>
            </Box>
            <Box ml="auto" mr={2}>
                <ProgressBar progress={progress} />
            </Box>
            <IconButton onClick={handleDelete} size="small">
                <DeleteIcon />
            </IconButton>
        </Box>
    );
};

export default SelectedFile;
