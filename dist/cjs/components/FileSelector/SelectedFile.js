"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const material_1 = require("@mui/material");
const Box_1 = require("../Box");
const Typography_1 = require("../Typography");
const Icons_1 = require("../Icons");
const ProgressBar_1 = __importDefault(require("../ProgressBar"));
const Paper_1 = require("../Paper");
const CircularProgress_1 = require("../CircularProgress");
const SelectedFile = (props) => {
    const { file, onDelete, url, handleResults, index, isLoading } = props;
    const [progress, setProgress] = (0, react_1.useState)(0);
    const [showProgress, setShowProgress] = (0, react_1.useState)(false);
    let source = axios_1.default.CancelToken.source();
    (0, react_1.useEffect)(() => {
        const token = localStorage.getItem('token');
        const onUpload = () => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            setShowProgress(true);
            try {
                let response = yield axios_1.default.post(url, {
                    file_name: file.name
                }, {
                    headers: {
                        authorization: `Token ${token || 'f7f124dc2a0e40000022e91c557dd302d4eca195'}`,
                        'content-type': 'application/json'
                    }
                });
                let urlForUploading = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.signed_url;
                yield axios_1.default.put(urlForUploading, file, {
                    onUploadProgress: (progressEvent) => {
                        let percentage = Math.ceil(((progressEvent === null || progressEvent === void 0 ? void 0 : progressEvent.progress) || 0) * 100);
                        setProgress(percentage);
                    },
                    // signal: controller?.signal,
                    cancelToken: source.token
                });
                setShowProgress(false);
                return handleResults({ file, progress: 100 }, index);
            }
            catch (err) {
                if ((err === null || err === void 0 ? void 0 : err.message) !== 'canceled')
                    return handleResults({ file, error: err.message }, index);
                setShowProgress(false);
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
    return ((0, jsx_runtime_1.jsx)(Paper_1.Paper, Object.assign({ variant: "outlined", sx: { padding: 2 } }, { children: (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsxs)(Box_1.Box, { children: [(0, jsx_runtime_1.jsx)(Typography_1.BodySmall, Object.assign({ fontWeight: 600 }, { children: file.name })), (file === null || file === void 0 ? void 0 : file.size) && (0, jsx_runtime_1.jsxs)(Typography_1.BodySmall, { children: [(file.size / 1000).toFixed(2), " kb"] })] }), (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ ml: "auto", display: "flex" }, { children: [url && showProgress ? (0, jsx_runtime_1.jsx)(ProgressBar_1.default, { progress: progress }) : null, (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ ml: 2, display: "flex", alignItems: "center", gap: "8px" }, { children: [!url && isLoading ? (0, jsx_runtime_1.jsx)(CircularProgress_1.CircularProgress, { color: "primary" }) : null, !isLoading && ((0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ onClick: handleDelete, size: "small" }, { children: (0, jsx_runtime_1.jsx)(Icons_1.DeleteIcon, {}) })))] }))] }))] })) })));
};
exports.default = SelectedFile;
//# sourceMappingURL=SelectedFile.js.map