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
import { IconButton } from '@mui/material';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { DeleteIcon } from '../Icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProgressBar from '../ProgressBar';
const SelectedFile = (props) => {
    const { file, onDelete, url, handleResults, index } = props;
    const [progress, setProgress] = useState(0);
    // const controller = new AbortController();
    let source = axios.CancelToken.source();
    useEffect(() => {
        const token = localStorage.getItem('token');
        const uploadFile = () => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            try {
                let response = yield axios.post(url, {
                    s3_path: `media/temp_files/${file.name}`
                }, {
                    headers: {
                        authorization: `Token f7f124dc2a0e40000022e91c557dd302d4eca195`,
                        'content-type': 'application/json'
                    }
                });
                let urlForUploading = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.signed_url;
                yield axios.put(urlForUploading, file, {
                    onUploadProgress: (progressEvent) => {
                        let percentage = Math.ceil(((progressEvent === null || progressEvent === void 0 ? void 0 : progressEvent.progress) || 0) * 100);
                        setProgress(percentage);
                    },
                    // signal: controller?.signal,
                    cancelToken: source.token
                });
                return handleResults({ file, progress: 100 }, index);
            }
            catch (err) {
                if ((err === null || err === void 0 ? void 0 : err.message) !== 'canceled')
                    return handleResults({ file, error: err.message }, index);
            }
        });
        uploadFile();
        return () => {
            if (progress !== 1)
                source.cancel();
        };
    }, []);
    const handleDelete = () => {
        // if (progress !== 1) controller.abort();
        onDelete(file);
    };
    return (_jsxs(Box, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, { children: [_jsxs(Box, { children: [_jsx(Typography.BodySmall, Object.assign({ fontWeight: 600 }, { children: file.name })), _jsxs(Typography.BodySmall, { children: [(file.size / 1000).toFixed(2), " kb"] })] }), _jsx(Box, Object.assign({ ml: "auto", mr: 2 }, { children: _jsx(ProgressBar, { progress: progress }) })), _jsx(IconButton, Object.assign({ onClick: handleDelete, size: "small" }, { children: _jsx(DeleteIcon, {}) }))] })));
};
export default SelectedFile;
//# sourceMappingURL=SelectedFile.js.map