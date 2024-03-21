"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSelector = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_dropzone_1 = require("react-dropzone");
const material_1 = require("@mui/material");
const Box_1 = require("../Box");
const Typography_1 = require("../Typography");
const Icons_1 = require("../Icons");
const fileFormats_1 = require("./fileFormats");
const SelectedFile_1 = __importDefault(require("./SelectedFile"));
exports.FileSelector = (0, react_1.forwardRef)(({ maxFiles = 1, acceptedFormats = [], onUpload = () => { }, url = '', error = '', helperText = '', onSelect = () => { }, placeholder = '', borderColor, preSelectedFile, onDeleteFile = () => { }, isLoading = false, showUploaderAlways = false, maxTotalFileSizeAllowed = { size_in_bytes: Infinity, errorText: '' } }, ref) => {
    const [files, setFiles] = (0, react_1.useState)([]);
    const [result, setResults] = (0, react_1.useState)([]);
    const [maxFileSizeExceededError, setMaxFileSizeExceededError] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (preSelectedFile === null || preSelectedFile === void 0 ? void 0 : preSelectedFile.length) {
            setFiles(preSelectedFile);
        }
    }, [preSelectedFile]);
    //To give the information of selected files to the main component.
    (0, react_1.useEffect)(() => {
        onSelect(files);
        if (!files.length) {
            setResults([]);
            onUpload([]);
        }
    }, [files]);
    //To call the callback when uploading of all files is done
    (0, react_1.useEffect)(() => {
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
    const onDrop = (0, react_1.useCallback)((acceptedFiles) => {
        setMaxFileSizeExceededError(false);
        let allFiles = [];
        if (maxFiles > 1) {
            let prevFileObj = {};
            for (let item of files) {
                prevFileObj[item.name] = item;
            }
            const prevFileNamesArr = Object.keys(prevFileObj);
            const modifiedAcceptedFiles = acceptedFiles.map((item) => {
                if (prevFileNamesArr === null || prevFileNamesArr === void 0 ? void 0 : prevFileNamesArr.includes(item === null || item === void 0 ? void 0 : item.name)) {
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
    const { getRootProps, getInputProps } = (0, react_dropzone_1.useDropzone)({
        onDrop,
        maxFiles,
        accept: acceptedFormats.length ? (0, fileFormats_1.getAcceptedFormats)(acceptedFormats) : {}
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ ref: ref, height: '100%', width: '100%' }, { children: !files.length ? ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({}, getRootProps(), { height: '100%', width: '100%' }, { children: [(0, jsx_runtime_1.jsx)("input", Object.assign({ type: "file" }, getInputProps())), (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ p: 2, height: '100%', width: '100%', border: '1px solid', borderColor: borderColor, borderRadius: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", sx: { cursor: 'pointer' } }, { children: [(0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: '100%', textAlign: "center", m: 0.5 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyXS, Object.assign({ limit: false }, { children: placeholder })) })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ my: 0.5 }, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { children: (0, jsx_runtime_1.jsx)(Icons_1.UploadIcon, {}) }) })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ m: 0.5 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyXS, { children: "Browse" }) }))] })), error && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mt: 1 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyXS, Object.assign({ color: "error" }, { children: error })) }))), helperText && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mt: 1 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyXS, Object.assign({ color: "secondary" }, { children: helperText })) }))), maxFileSizeExceededError && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mt: 1 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyXS, Object.assign({ color: "error", limit: false, lines: 2 }, { children: maxTotalFileSizeAllowed.errorText })) })))] }))) : ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ height: '100%', width: '100%' }, { children: [(0, jsx_runtime_1.jsx)(Box_1.Box, { children: files.map((file, index) => ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ my: 1 }, { children: (0, jsx_runtime_1.jsx)(SelectedFile_1.default, { file: file, onDelete: onDelete, url: url, index: index, handleResults: handleResults, isLoading: isLoading }, file.name) })))) }), showUploaderAlways && ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({}, getRootProps(), { children: [(0, jsx_runtime_1.jsx)("input", Object.assign({ type: "file" }, getInputProps())), (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ p: 2, height: '100%', width: '100%', border: '1px solid', borderColor: borderColor, borderRadius: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", sx: { cursor: 'pointer' } }, { children: [(0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: '100%', textAlign: "center", m: 0.5 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyXS, Object.assign({ limit: false }, { children: placeholder })) })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ my: 0.5 }, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { children: (0, jsx_runtime_1.jsx)(Icons_1.UploadIcon, {}) }) })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ m: 0.5 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyXS, { children: "Browse" }) }))] }))] }))), error && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mt: 1 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyXS, Object.assign({ color: "error" }, { children: error })) }))), helperText && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mt: 1 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyXS, Object.assign({ color: "secondary" }, { children: helperText })) }))), maxFileSizeExceededError && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mt: 1 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyXS, Object.assign({ color: "error", limit: false, lines: 2 }, { children: maxTotalFileSizeAllowed.errorText })) })))] }))) })) }));
});
exports.FileSelector.defaultProps = {
    borderColor: 'secondary'
};
//# sourceMappingURL=index.js.map