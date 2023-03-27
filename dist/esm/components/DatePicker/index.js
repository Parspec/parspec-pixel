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
import { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
export { Dayjs, dayjs };
export const CustomDatePicker = (_a) => {
    var { size } = _a, props = __rest(_a, ["size"]);
    return (_jsx(LocalizationProvider, Object.assign({ dateAdapter: AdapterDayjs }, { children: _jsx(DatePicker, Object.assign({ sx: {
                width: '100%'
            }, slotProps: { textField: { size } } }, props)) })));
};
CustomDatePicker.defaultProps = {
    size: 'small'
};
//# sourceMappingURL=index.js.map