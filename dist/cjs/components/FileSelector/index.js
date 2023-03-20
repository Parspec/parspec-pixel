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
exports.FileSelector = react_1.forwardRef(({ maxFiles = 1, acceptedFormats = [], onUpload = () => { }, url = '', error = '', helperText = '', onSelect = () => { } }, ref) => {
    const [files, setFiles] = react_1.useState([]);
    const [result, setResults] = react_1.useState([]);
    //To give the information of selected files to the main component.
    react_1.useEffect(() => {
        onSelect(files);
        if (!files.length) {
            setResults([]);
            onUpload([]);
        }
    }, [files]);
    //To call the callback when uploading of all files is done
    react_1.useEffect(() => {
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
    const onDrop = react_1.useCallback((acceptedFiles) => {
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
    const { getRootProps, getInputProps } = react_dropzone_1.useDropzone({
        onDrop,
        maxFiles,
        accept: acceptedFormats.length ? fileFormats_1.getAcceptedFormats(acceptedFormats) : {}
    });
    return (jsx_runtime_1.jsxs(Box_1.Box, Object.assign({ ref: ref }, { children: [!files.length ? (jsx_runtime_1.jsxs("div", Object.assign({}, getRootProps(), { children: [jsx_runtime_1.jsx("input", Object.assign({}, getInputProps()), void 0), jsx_runtime_1.jsxs(Box_1.Box, Object.assign({ p: 6, bgcolor: "#f3f5fa", width: 1, borderRadius: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", sx: { cursor: 'pointer' } }, { children: [jsx_runtime_1.jsx(Typography_1.BodySmall, { children: "Drag and drop files here, or:" }, void 0), jsx_runtime_1.jsx(Box_1.Box, Object.assign({ mt: 6, mb: 3 }, { children: jsx_runtime_1.jsx(material_1.Avatar, { children: jsx_runtime_1.jsx(Icons_1.UploadIcon, {}, void 0) }, void 0) }), void 0), jsx_runtime_1.jsx(Typography_1.BodySmall, { children: "Browse" }, void 0)] }), void 0)] }), void 0)) : (jsx_runtime_1.jsx(Box_1.Box, { children: files.map((file, index) => (jsx_runtime_1.jsx(SelectedFile_1.default, { file: file, onDelete: onDelete, url: url, index: index, handleResults: handleResults }, file.name))) }, void 0)), error && (jsx_runtime_1.jsx(Box_1.Box, Object.assign({ mt: 1 }, { children: jsx_runtime_1.jsx(Typography_1.BodySmall, Object.assign({ color: "error" }, { children: error }), void 0) }), void 0)), helperText && (jsx_runtime_1.jsx(Box_1.Box, Object.assign({ mt: 2 }, { children: jsx_runtime_1.jsx(Typography_1.BodySmall, Object.assign({ color: "secondary" }, { children: helperText }), void 0) }), void 0))] }), void 0));
});
//# sourceMappingURL=index.js.map