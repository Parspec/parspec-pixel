var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { default as MUISelect } from '@mui/material/Select';
import styled from '@mui/material/styles/styled';
import { Box, InputLabel } from '@mui/material';
const StyledFormControl = styled(FormControl, {
    shouldForwardProp(propName) {
        return !(propName === 'borderColor');
    }
})(({ theme, colorType }) => {
    var _a, _b, _c, _d;
    const bgColorValFromTheme = (_b = (_a = theme.palette) === null || _a === void 0 ? void 0 : _a[colorType]) === null || _b === void 0 ? void 0 : _b.light;
    const colorValFromTheme = (_d = (_c = theme.palette) === null || _c === void 0 ? void 0 : _c[colorType]) === null || _d === void 0 ? void 0 : _d.dark;
    return {
        '& .MuiOutlinedInput-root': {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px'
        },
        '& .MuiSelect-select': {
            '& .optionLabel': {
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: bgColorValFromTheme,
                color: colorValFromTheme
            }
        },
        '& .MuiSelect-icon': {
            width: '16px',
            height: '16px',
            top: 'calc(50% - 0.35em)'
        }
    };
});
const StyledMenuItem = styled(MenuItem)(({ theme, type }) => {
    var _a, _b, _c, _d, _e;
    return ({
        fontSize: '12px',
        lineHeight: '16px',
        color: (_a = theme.palette) === null || _a === void 0 ? void 0 : _a[type].dark,
        '& .optionLabel': {
            backgroundColor: (_b = theme.palette) === null || _b === void 0 ? void 0 : _b[type].light
        },
        '&.Mui-selected': {
            backgroundColor: (_c = theme.palette) === null || _c === void 0 ? void 0 : _c[type].light,
            color: (_d = theme.palette) === null || _d === void 0 ? void 0 : _d[type].dark
        },
        '&.Mui-selected:hover, &.MuiMenuItem-root:hover': {
            backgroundColor: (_e = theme.palette) === null || _e === void 0 ? void 0 : _e.neutral.light
        }
    });
});
const getFormControlColorType = (value, options) => {
    const selectedOption = options === null || options === void 0 ? void 0 : options.find((option) => option.value == value);
    return selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.type;
};
export const StatusSelect = forwardRef((_a, ref) => {
    var { id, options, optionLabelKeyname = 'label', optionValueKeyname = 'value', type = 'primary', optionColorKeyName = 'type', value, label, labelId, size = 'small' } = _a, rest = __rest(_a, ["id", "options", "optionLabelKeyname", "optionValueKeyname", "type", "optionColorKeyName", "value", "label", "labelId", "size"]);
    return (_jsxs(StyledFormControl, Object.assign({ fullWidth: true, ref: ref, size: size, colorType: getFormControlColorType(value, options) }, { children: [_jsx(InputLabel, Object.assign({ id: labelId }, { children: label })), _jsx(MUISelect, Object.assign({}, rest, { id: id, value: value, label: label, labelId: labelId }, { children: options.map((item, index) => (_jsx(StyledMenuItem, Object.assign({ value: item[optionValueKeyname], type: item[optionColorKeyName] }, { children: _jsx(Box, Object.assign({ pr: 2, pl: 2, pt: 1, pb: 1, borderRadius: 1, className: "optionLabel" }, { children: item[optionLabelKeyname] })) }), index))) }))] })));
});
StatusSelect.defaultProps = {
    id: 'demo-status-select'
};
//# sourceMappingURL=index.js.map