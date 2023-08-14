var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, forwardRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Avatar } from '@mui/material';
import { Box } from '../Box';
import { BodySmall } from '../Typography';
import { UploadIcon } from '../Icons';
import { getAcceptedFormats } from './fileFormats';
import SelectedFile from './SelectedFile';
import { validateImage } from "image-validator";
export const FileSelector = forwardRef(({ maxFiles = 1, acceptedFormats = [], onUpload = () => { }, url = '', error = '', helperText = '', onSelect = () => { }, placeholder = '', borderColor, preSelectedFile, onDeleteFile = () => { }, isLoading = false }, ref) => {
    const [files, setFiles] = useState([]);
    const [result, setResults] = useState([]);
    const [isFileCorrupted, setIsFileCorrupted] = useState(false);
    useEffect(() => {
        if (preSelectedFile === null || preSelectedFile === void 0 ? void 0 : preSelectedFile.length) {
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
                let uploadedData = uploadedFiles.filter((item) => files.map((file) => file.name).includes(item.file.name));
                onUpload(uploadedData);
            }
        }
    }, [result]);
    // To validate a file
    const fileValidation = (file) => __awaiter(void 0, void 0, void 0, function* () {
        const isValidImage = yield validateImage(file);
        return isValidImage;
        // expected output ==> true or false
    });
    //Function called when file is selected
    const onDrop = (acceptedFiles) => __awaiter(void 0, void 0, void 0, function* () {
        const isFileCorrupted = yield fileValidation(acceptedFiles[0]);
        if (!isFileCorrupted) {
            error = "Uploaded File is corrupted.";
            setIsFileCorrupted(true);
            return;
        }
        setFiles(acceptedFiles);
    });
    //Function called when file is deleted
    const onDelete = (file) => {
        setFiles((old) => old.filter((item) => item.name !== file.name));
        setResults((old) => old.filter((item) => item.file.name !== file.name));
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
    return (_jsxs(Box, Object.assign({ ref: ref, height: '100%' }, { children: [!files.length ? (_jsxs(Box, Object.assign({}, getRootProps(), { height: '100%' }, { children: [_jsx("input", Object.assign({ type: "file" }, getInputProps())), _jsxs(Box, Object.assign({ p: 6, width: 1, border: '1px solid', borderColor: borderColor, borderRadius: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", sx: { cursor: 'pointer' }, height: '100%', gap: "16px" }, { children: [_jsx(Box, Object.assign({ width: '100%', textAlign: "center" }, { children: _jsx(BodySmall, Object.assign({ limit: false }, { children: placeholder })) })), _jsx(Avatar, { children: _jsx(UploadIcon, {}) }), _jsx(BodySmall, { children: "Browse" })] }))] }))) : (_jsx(Box, { children: files.map((file, index) => (_jsx(SelectedFile, { file: file, onDelete: onDelete, url: url, index: index, handleResults: handleResults, isLoading: isLoading }, file.name))) })), error && (_jsx(Box, Object.assign({ mt: 1 }, { children: _jsx(BodySmall, Object.assign({ color: "error" }, { children: error })) }))), isFileCorrupted && (_jsx(Box, Object.assign({ mt: 1 }, { children: _jsx(BodySmall, Object.assign({ color: "error" }, { children: "Uploaded File is Corrupt." })) }))), helperText && (_jsx(Box, Object.assign({ mt: 2 }, { children: _jsx(BodySmall, Object.assign({ color: "secondary" }, { children: helperText })) })))] })));
});
FileSelector.defaultProps = {
    borderColor: 'secondary'
};
//# sourceMappingURL=index.js.map