"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDatePicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
const LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
const DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
const CustomDatePicker = (props) => {
    return ((0, jsx_runtime_1.jsx)(LocalizationProvider_1.LocalizationProvider, Object.assign({ dateAdapter: AdapterDayjs_1.AdapterDayjs }, { children: (0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, Object.assign({ sx: {
                width: '100%'
            } }, props)) })));
};
exports.CustomDatePicker = CustomDatePicker;
//# sourceMappingURL=index.js.map