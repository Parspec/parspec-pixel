"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Checkbox_1 = require("../Checkbox");
const CheckboxGroup = function ({ label, size, options, onChange, error, helperText, color, disabled }) {
    function handleCheckboxChange(name) {
        return (event) => {
            onChange(name, event.target.checked);
        };
    }
    return ((0, jsx_runtime_1.jsxs)(material_1.FormControl, Object.assign({ error: error }, { children: [(0, jsx_runtime_1.jsx)(material_1.FormLabel, Object.assign({ component: "legend" }, { children: label })), (0, jsx_runtime_1.jsx)(material_1.FormGroup, { children: options.map((checkboxInfo) => ((0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { checked: checkboxInfo.checked, disabled: disabled, onChange: handleCheckboxChange(checkboxInfo.name), name: checkboxInfo.name, label: checkboxInfo.label, size: size, color: color }))) }), helperText && (0, jsx_runtime_1.jsx)(material_1.FormHelperText, Object.assign({ sx: { marginLeft: 0 } }, { children: helperText }))] })));
};
exports.CheckboxGroup = CheckboxGroup;
exports.CheckboxGroup.defaultProps = {
    size: 'small',
    error: false,
    color: 'primary',
    disabled: false
};
//# sourceMappingURL=index.js.map