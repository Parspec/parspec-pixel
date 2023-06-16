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
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { default as MUISelect } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material';
const StyledFormControl = styled(FormControl, {
    shouldForwardProp(propName) {
        return !(propName === 'borderColor');
    }
})(({ theme, colorType }) => {
    var _a, _b, _c, _d;
    const bgColorValFromTheme = (_b = (_a = theme.palette) === null || _a === void 0 ? void 0 : _a[colorType]) === null || _b === void 0 ? void 0 : _b.light;
    const colorValFromTheme = (_d = (_c = theme.palette) === null || _c === void 0 ? void 0 : _c[colorType]) === null || _d === void 0 ? void 0 : _d.main;
    const selectRootCss = { backgroundColor: bgColorValFromTheme, color: colorValFromTheme };
    return {
        '& .MuiOutlinedInput-root': {
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '16px',
            '& fieldset': {
                borderColor: bgColorValFromTheme
            },
            '&:hover fieldset': {
                borderColor: bgColorValFromTheme
            },
            '&.Mui-focused fieldset': {
                borderColor: bgColorValFromTheme
            }
        },
        '& .MuiSelect-select': Object.assign(Object.assign({}, selectRootCss), { padding: '4px 8px', paddingRight: '24px !important' }),
        '& .MuiSelect-select:hover': selectRootCss,
        '& .MuiSelect-icon': {
            color: colorValFromTheme,
            width: '16px',
            height: '16px',
            top: 'calc(50% - 0.35em)'
        }
    };
});
const StyledMenuItem = styled(MenuItem)(({ theme, type }) => {
    var _a, _b;
    return ({
        fontSize: '12px',
        lineHeight: '16px',
        '&.Mui-selected': {
            backgroundColor: alpha((_a = theme.palette) === null || _a === void 0 ? void 0 : _a[type].main, 0.08)
        },
        '&.Mui-selected:hover, &.Mui-focusVisible.Mui-selected': {
            backgroundColor: alpha((_b = theme.palette) === null || _b === void 0 ? void 0 : _b[type].main, 0.12)
        }
    });
});
export const StatusSelect = forwardRef((_a, ref) => {
    var { id, options, optionLabelKeyname = 'label', optionValueKeyname = 'value', type = 'primary' } = _a, rest = __rest(_a, ["id", "options", "optionLabelKeyname", "optionValueKeyname", "type"]);
    return (_jsx(StyledFormControl, Object.assign({ fullWidth: true, ref: ref, colorType: type }, { children: _jsx(MUISelect, Object.assign({}, rest, { size: "small", id: id }, { children: options.map((item, index) => (_jsx(StyledMenuItem, Object.assign({ value: item[optionValueKeyname], type: type }, { children: item[optionLabelKeyname] }), index))) })) })));
});
StatusSelect.defaultProps = {
    id: 'demo-status-select'
};
//# sourceMappingURL=index.js.map