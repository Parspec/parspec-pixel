import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormGroup, FormHelperText, FormLabel } from '@mui/material';
import { Checkbox } from '../Checkbox';
import { Box } from '../Box';
import Button from '@mui/material/Button';
export const CheckboxGroup = function ({ label, size, options, onChange, error, helperText, color, disabled, required, maxHeight, showSelectAll = false, onSelectAll }) {
    function handleCheckboxChange(name) {
        return (event) => {
            onChange(name, event.target.checked);
        };
    }
    return (_jsxs(FormControl, Object.assign({ error: error, fullWidth: true }, { children: [_jsxs(Box, Object.assign({ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }, { children: [_jsx(FormLabel, Object.assign({ component: "legend", required: required }, { children: label })), showSelectAll && (_jsx(Box, { children: _jsx(Button, Object.assign({ size: "xs", variant: "outlined", color: "secondary", sx: { height: '24px' }, onClick: onSelectAll }, { children: "Select All" })) }))] })), _jsx(FormGroup, Object.assign({ sx: { width: '100%', flexWrap: 'nowrap', maxHeight, overflow: 'auto' } }, { children: options.map((checkboxInfo) => (_jsx(Checkbox, { checked: checkboxInfo.checked, disabled: disabled, onChange: handleCheckboxChange(checkboxInfo.name), name: checkboxInfo.name, label: checkboxInfo.label, size: size, color: color }))) })), helperText && _jsx(FormHelperText, Object.assign({ sx: { marginLeft: 0 } }, { children: helperText }))] })));
};
CheckboxGroup.defaultProps = {
    size: 'small',
    error: false,
    color: 'primary',
    disabled: false
};
//# sourceMappingURL=index.js.map