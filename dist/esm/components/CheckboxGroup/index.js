import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormGroup, FormHelperText, FormLabel } from '@mui/material';
import { Checkbox } from '../Checkbox';
export const CheckboxGroup = function ({ label, size, options, onChange, error, helperText, color, disabled }) {
    function handleCheckboxChange(name) {
        return (event) => {
            onChange(name, event.target.checked);
        };
    }
    return (_jsxs(FormControl, Object.assign({ error: error }, { children: [_jsx(FormLabel, Object.assign({ component: "legend" }, { children: label })), _jsx(FormGroup, { children: options.map((checkboxInfo) => (_jsx(Checkbox, { checked: checkboxInfo.checked, disabled: disabled, onChange: handleCheckboxChange(checkboxInfo.name), name: checkboxInfo.name, label: checkboxInfo.label, size: size, color: color }))) }), helperText && _jsx(FormHelperText, Object.assign({ sx: { marginLeft: 0 } }, { children: helperText }))] })));
};
CheckboxGroup.defaultProps = {
    size: 'small',
    error: false,
    color: 'primary',
    disabled: false
};
//# sourceMappingURL=index.js.map