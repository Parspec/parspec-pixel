"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDatePicker = exports.dayjs = exports.Dayjs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const dayjs_1 = require("dayjs");
Object.defineProperty(exports, "Dayjs", { enumerable: true, get: function () { return dayjs_1.Dayjs; } });
const DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
const AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
const LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
const dayjs_2 = __importDefault(require("dayjs"));
exports.dayjs = dayjs_2.default;
const CustomDatePicker = (_a) => {
    var { size, color } = _a, props = __rest(_a, ["size", "color"]);
    return ((0, jsx_runtime_1.jsx)(LocalizationProvider_1.LocalizationProvider, Object.assign({ dateAdapter: AdapterDayjs_1.AdapterDayjs }, { children: (0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, Object.assign({ sx: {
                width: '100%'
            }, slotProps: { textField: { size, color } } }, props)) })));
};
exports.CustomDatePicker = CustomDatePicker;
exports.CustomDatePicker.defaultProps = {
    size: 'small',
    color: 'secondary'
};
//# sourceMappingURL=index.js.map