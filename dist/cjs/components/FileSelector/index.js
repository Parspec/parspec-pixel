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
const FileSelector = ({ maxFiles, acceptedFormats, onUpload, url, error, helperText, onSelect }) => {
    const [files, setFiles] = (0, react_1.useState)([]);
    const [result, setResults] = (0, react_1.useState)([]);
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
                let uploadedData = uploadedFiles.filter((item) => files.map((file) => file.name).includes(item.file.name));
                onUpload(uploadedData);
            }
        }
    }, [result]);
    //Function called when file is selected
    const onDrop = (0, react_1.useCallback)((acceptedFiles) => {
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
    const { getRootProps, getInputProps } = (0, react_dropzone_1.useDropzone)({
        onDrop,
        maxFiles,
        accept: acceptedFormats.length ? (0, fileFormats_1.getAcceptedFormats)(acceptedFormats) : {}
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!files.length ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getRootProps(), { children: [(0, jsx_runtime_1.jsx)("input", Object.assign({}, getInputProps())), (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ p: 6, bgcolor: "#f3f5fa", width: 1, borderRadius: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", sx: { cursor: 'pointer' } }, { children: [(0, jsx_runtime_1.jsx)(Typography_1.BodySmall, { children: "Drag and drop files here, or:" }), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mt: 6, mb: 3 }, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { children: (0, jsx_runtime_1.jsx)(Icons_1.UploadIcon, {}) }) })), (0, jsx_runtime_1.jsx)(Typography_1.BodySmall, { children: "Browse" })] }))] }))) : ((0, jsx_runtime_1.jsx)(Box_1.Box, { children: files.map((file, index) => ((0, jsx_runtime_1.jsx)(SelectedFile_1.default, { file: file, onDelete: onDelete, url: url, index: index, handleResults: handleResults }, file.name))) })), error && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mt: 1 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodySmall, Object.assign({ color: "error" }, { children: error })) }))), helperText && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mt: 2 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodySmall, Object.assign({ color: "secondary" }, { children: helperText })) })))] }));
};
exports.FileSelector = FileSelector;
exports.FileSelector.defaultProps = {
    maxFiles: 1,
    acceptedFormats: [],
    onUpload: () => { },
    error: '',
    helperText: '',
    onSelect: () => { },
    url: ''
};
//# sourceMappingURL=index.js.map