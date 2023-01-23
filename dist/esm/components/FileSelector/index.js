import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Avatar } from '@mui/material';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { useDropzone } from 'react-dropzone';
import { useCallback, useEffect, useState } from 'react';
import { getAcceptedFormats } from './fileFormats';
import SelectedFile from './SelectedFile';
import { UploadIcon } from '../Icons';
const FileSelector = ({ maxFiles = 1, acceptedFormats = [], onUpload, uploadFile = true, url, error, helperText, onSelect }) => {
    const [files, setFiles] = useState([]);
    const [result, setResults] = useState([]);
    //To give the information of selected files to the main component.
    useEffect(() => {
        if (onSelect)
            onSelect(files);
        if (!files.length) {
            setResults([]);
            if (onUpload)
                onUpload([]);
        }
    }, [files]);
    //To call the callback when uploading of all files is done
    useEffect(() => {
        if (files.length) {
            let uploadedFiles = result.filter((file) => file);
            if (uploadedFiles.length === files.length) {
                if (onUpload)
                    onUpload(uploadedFiles);
            }
            if (files.length < uploadedFiles.length) {
                let uploadedData = uploadedFiles.filter((item) => files.map((file) => file.name).includes(item.file.name));
                if (onUpload)
                    onUpload(uploadedData);
            }
        }
    }, [result]);
    //Function called when file is selected
    const onDrop = useCallback((acceptedFiles) => {
        setFiles(acceptedFiles);
    }, []);
    //Function called when file is deleted
    const onDelete = (file) => {
        setFiles((old) => old.filter((item) => item.name !== file.name));
        setResults((old) => old.filter((item) => item.file.name !== file.name));
    };
    //Callback function to get the result of file uplaod
    const handleResults = (data, index) => {
        setResults((old) => {
            let output = [...old];
            output[index] = data;
            return output;
        });
    };
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        maxFiles,
        accept: acceptedFormats.length ? getAcceptedFormats(acceptedFormats) : {}
    });
    return (_jsxs(_Fragment, { children: [!files.length ? (_jsxs("div", Object.assign({}, getRootProps(), { children: [_jsx("input", Object.assign({}, getInputProps())), _jsxs(Box, Object.assign({ p: 6, bgcolor: "#f3f5fa", width: 1, borderRadius: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", sx: { cursor: 'pointer' } }, { children: [_jsx(Typography.BodySmall, { children: "Drag and drop files here, or:" }), _jsx(Box, Object.assign({ mt: 6, mb: 3 }, { children: _jsx(Avatar, { children: _jsx(UploadIcon, {}) }) })), _jsx(Typography.BodySmall, { children: "Browse" })] }))] }))) : (_jsx(Box, { children: files.map((file, index) => (_jsx(SelectedFile, { file: file, onDelete: onDelete, url: url, index: index, handleResults: handleResults }, file.name))) })), error && (_jsx(Box, Object.assign({ mt: 1 }, { children: _jsx(Typography.BodySmall, Object.assign({ color: "error" }, { children: error })) }))), helperText && (_jsx(Box, Object.assign({ mt: 2 }, { children: _jsx(Typography.BodySmall, Object.assign({ color: "secondary" }, { children: helperText })) })))] }));
};
export default FileSelector;
//# sourceMappingURL=index.js.map