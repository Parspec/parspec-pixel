"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Checkbox_1 = require("../Checkbox");
const Box_1 = require("../Box");
const Button_1 = __importDefault(require("@mui/material/Button"));
const CheckboxGroup = function ({ label, size, options, onChange, error, helperText, color, disabled, required, maxHeight, showSelectAll = false, onSelectAll }) {
    function handleCheckboxChange(name) {
        return (event) => {
            onChange(name, event.target.checked);
        };
    }
    return ((0, jsx_runtime_1.jsxs)(material_1.FormControl, Object.assign({ error: error, fullWidth: true }, { children: [(0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(material_1.FormLabel, Object.assign({ component: "legend", required: required }, { children: label })), showSelectAll && ((0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ size: "xs", variant: "outlined", color: "secondary", sx: { height: '24px', whiteSpace: 'nowrap' }, onClick: onSelectAll }, { children: "Select All" })) }))] })), (0, jsx_runtime_1.jsx)(material_1.FormGroup, Object.assign({ sx: { width: '100%', flexWrap: 'nowrap', maxHeight, overflow: 'auto' } }, { children: options.map((checkboxInfo) => ((0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { checked: checkboxInfo.checked, disabled: disabled, onChange: handleCheckboxChange(checkboxInfo.name), name: checkboxInfo.name, label: checkboxInfo.label, size: size, color: color }))) })), helperText && (0, jsx_runtime_1.jsx)(material_1.FormHelperText, Object.assign({ sx: { marginLeft: 0 } }, { children: helperText }))] })));
};
exports.CheckboxGroup = CheckboxGroup;
exports.CheckboxGroup.defaultProps = {
    size: 'small',
    error: false,
    color: 'primary',
    disabled: false
};
//# sourceMappingURL=index.js.map