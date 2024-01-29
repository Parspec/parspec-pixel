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
const SelectedFile = (props) => {
    const { file, onDelete, url, handleResults, index, isLoading } = props;
    const [progress, setProgress] = useState(0);
    const [showProgress, setShowProgress] = useState(true);
    let source = axios.CancelToken.source();
    useEffect(() => {
        console.log('0');
        const token = localStorage.getItem('token');
        const onUpload = () => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            console.log('1');
            try {
                console.log('2');
                let response = yield axios.post(url, {
                    file_name: uuidV4() + file.name
                }, {
                    headers: {
                        authorization: `Token ${token || 'f7f124dc2a0e40000022e91c557dd302d4eca195'}`,
                        'content-type': 'application/json'
                    }
                });
                console.log('3 - response-->', response);
                let urlForUploading = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.signed_url;
                const resp = yield axios.put(urlForUploading, file, {
                    onUploadProgress: (progressEvent) => {
                        let percentage = Math.ceil(((progressEvent === null || progressEvent === void 0 ? void 0 : progressEvent.progress) || 0) * 100);
                        console.log('percentage-->', percentage);
                        setProgress(percentage);
                    },
                    // signal: controller?.signal,
                    cancelToken: source.token
                });
                console.log('4 - resp-->', resp);
                setShowProgress(false);
                let s3_file_path = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.s3_file_path;
                return handleResults({ file, progress: 100, s3_file_path }, index);
            }
            catch (err) {
                console.log('5 - err-->', err);
                if ((err === null || err === void 0 ? void 0 : err.message) !== 'canceled')
                    return handleResults({ file, error: err.message }, index);
            }
        });
        if (url && !file.filepath)
            onUpload();
        else
            handleResults({ file, progress: 100 }, index);
        return () => {
            if (progress !== 1)
                source.cancel();
        };
    }, []);
    const handleDelete = () => {
        onDelete(file);
    };
    console.log('progress-->', progress);
    return (_jsx(Paper, Object.assign({ variant: "outlined", sx: { padding: 2 } }, { children: _jsxs(Box, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: "center" }, { children: [_jsxs(Box, { children: [_jsx(BodySmall, Object.assign({ fontWeight: 600 }, { children: file.name })), (file === null || file === void 0 ? void 0 : file.size) && _jsxs(BodySmall, { children: [(file.size / 1000).toFixed(2), " kb"] })] }), _jsxs(Box, Object.assign({ ml: "auto", display: "flex" }, { children: [url && showProgress ? _jsx(ProgressBar, { progress: progress }) : null, _jsxs(Box, Object.assign({ ml: 2, display: "flex", alignItems: "center", gap: "8px" }, { children: [!url && isLoading ? _jsx(CircularProgress, { color: "primary" }) : null, !isLoading && (_jsx(IconButton, Object.assign({ onClick: handleDelete, size: "small" }, { children: _jsx(DeleteIcon, {}) })))] }))] }))] })) })));
};
export default SelectedFile;
//# sourceMappingURL=SelectedFile.js.map