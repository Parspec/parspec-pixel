import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useState, forwardRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Avatar } from '@mui/material';
import { Box } from '../Box';
import { BodyXS } from '../Typography';
import { UploadIcon } from '../Icons';
import { getAcceptedFormats } from './fileFormats';
import SelectedFile from './SelectedFile';
export const FileSelector = forwardRef(({ maxFiles = 1, acceptedFormats = [], onUpload = () => { }, url = '', error = '', helperText = '', onSelect = () => { }, placeholder = '', borderColor, preSelectedFile, onDeleteFile = () => { }, isLoading = false, showUploaderAlways = false, maxTotalFileSizeAllowed = { size_in_bytes: Infinity, errorText: '' }, maxSizeLimitPerFile = Infinity }, ref) => {
    const [files, setFiles] = useState([]);
    const [result, setResults] = useState([]);
    const [maxFileSizeExceededError, setMaxFileSizeExceededError] = useState(false);
    useEffect(() => {
        if (preSelectedFile === null || preSelectedFile === void 0 ? void 0 : preSelectedFile.length) {
            setFiles(preSelectedFile);
        }
        setResults([]);
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
            let uploadedFiles = result.filter((file) => file);
            if (uploadedFiles.length === files.length) {
                onUpload(uploadedFiles);
            }
            if (files.length < uploadedFiles.length) {
                let uploadedData = uploadedFiles.filter((item) => { var _a, _b; return (_a = files.map((file) => file === null || file === void 0 ? void 0 : file.name)) === null || _a === void 0 ? void 0 : _a.includes((_b = item === null || item === void 0 ? void 0 : item.file) === null || _b === void 0 ? void 0 : _b.name); });
                onUpload(uploadedData);
            }
        }
    }, [result]);
    //Function called when file is selected
    const onDrop = useCallback((acceptedFiles) => {
        setMaxFileSizeExceededError(false);
        let allFiles = [];
        if (maxFiles > 1) {
            const prevFileObj = new Set();
            for (let item of files) {
                prevFileObj.add(item.name);
            }
            const modifiedAcceptedFiles = acceptedFiles.map((item) => {
                if (prevFileObj.has(item === null || item === void 0 ? void 0 : item.name)) {
                    const currDateTime = new Date().toISOString();
                    const extractName = item.name.split('.');
                    const newName = extractName.slice(0, extractName.length - 1).join('.') + '_' + `${currDateTime}` + '.' + extractName.slice(-1).join('.');
                    const myNewFile = new File([item], newName, { type: item.type });
                    return myNewFile;
                }
                else {
                    return item;
                }
            });
            allFiles = [...files, ...modifiedAcceptedFiles];
        }
        else {
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
            setFiles((old) => [...allFiles]);
        }
        else {
            setMaxFileSizeExceededError(true);
        }
    }, [files]);
    //Function called when file is deleted
    const onDelete = (file) => {
        if (maxFileSizeExceededError) {
            setMaxFileSizeExceededError(false);
        }
        setFiles((old) => old.filter((item) => (item === null || item === void 0 ? void 0 : item.name) !== (file === null || file === void 0 ? void 0 : file.name)));
        setResults((old) => old.filter((item) => { var _a; return ((_a = item === null || item === void 0 ? void 0 : item.file) === null || _a === void 0 ? void 0 : _a.name) !== (file === null || file === void 0 ? void 0 : file.name); }));
        onDeleteFile();
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
    return (_jsx(_Fragment, { children: _jsx(Box, Object.assign({ ref: ref, height: '100%', width: '100%' }, { children: !files.length ? (_jsxs(Box, Object.assign({}, getRootProps(), { height: '100%', width: '100%' }, { children: [_jsx("input", Object.assign({ type: "file" }, getInputProps())), _jsxs(Box, Object.assign({ p: 2, height: '100%', width: '100%', border: '1px solid', borderColor: borderColor, borderRadius: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", sx: { cursor: 'pointer' } }, { children: [_jsx(Box, Object.assign({ width: '100%', textAlign: "center", m: 0.5 }, { children: _jsx(BodyXS, Object.assign({ limit: false }, { children: placeholder })) })), _jsx(Box, Object.assign({ my: 0.5 }, { children: _jsx(Avatar, { children: _jsx(UploadIcon, {}) }) })), _jsx(Box, Object.assign({ m: 0.5 }, { children: _jsx(BodyXS, { children: "Browse" }) }))] })), error && (_jsx(Box, Object.assign({ mt: 1 }, { children: _jsx(BodyXS, Object.assign({ color: "error" }, { children: error })) }))), helperText && (_jsx(Box, Object.assign({ mt: 1 }, { children: _jsx(BodyXS, Object.assign({ color: "secondary" }, { children: helperText })) }))), maxFileSizeExceededError && (_jsx(Box, Object.assign({ mt: 1 }, { children: _jsx(BodyXS, Object.assign({ color: "error", limit: false, lines: 2 }, { children: maxTotalFileSizeAllowed.errorText })) })))] }))) : (_jsxs(Box, Object.assign({ height: '100%', width: '100%' }, { children: [_jsx(Box, { children: files.map((file, index) => (_jsx(Box, Object.assign({ my: 1 }, { children: _jsx(SelectedFile, { file: file, onDelete: onDelete, url: url, index: index, handleResults: handleResults, isLoading: isLoading }, file.name) })))) }), showUploaderAlways && (_jsxs(Box, Object.assign({}, getRootProps(), { children: [_jsx("input", Object.assign({ type: "file" }, getInputProps())), _jsxs(Box, Object.assign({ p: 2, height: '100%', width: '100%', border: '1px solid', borderColor: borderColor, borderRadius: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", sx: { cursor: 'pointer' } }, { children: [_jsx(Box, Object.assign({ width: '100%', textAlign: "center", m: 0.5 }, { children: _jsx(BodyXS, Object.assign({ limit: false }, { children: placeholder })) })), _jsx(Box, Object.assign({ my: 0.5 }, { children: _jsx(Avatar, { children: _jsx(UploadIcon, {}) }) })), _jsx(Box, Object.assign({ m: 0.5 }, { children: _jsx(BodyXS, { children: "Browse" }) }))] }))] }))), error && (_jsx(Box, Object.assign({ mt: 1 }, { children: _jsx(BodyXS, Object.assign({ color: "error" }, { children: error })) }))), helperText && (_jsx(Box, Object.assign({ mt: 1 }, { children: _jsx(BodyXS, Object.assign({ color: "secondary" }, { children: helperText })) }))), maxFileSizeExceededError && (_jsx(Box, Object.assign({ mt: 1 }, { children: _jsx(BodyXS, Object.assign({ color: "error", limit: false, lines: 2 }, { children: maxTotalFileSizeAllowed.errorText })) })))] }))) })) }));
});
FileSelector.defaultProps = {
    borderColor: 'secondary'
};
//# sourceMappingURL=index.js.map