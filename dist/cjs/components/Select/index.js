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
exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const Select_1 = __importDefault(require("@mui/material/Select"));
const Select = (_a) => {
    var { id, labelId, options, label } = _a, rest = __rest(_a, ["id", "labelId", "options", "label"]);
    return ((0, jsx_runtime_1.jsxs)(FormControl_1.default, Object.assign({ fullWidth: true }, { children: [(0, jsx_runtime_1.jsx)(InputLabel_1.default, Object.assign({ id: labelId }, { children: label })), (0, jsx_runtime_1.jsx)(Select_1.default, Object.assign({}, rest, { labelId: labelId, label: label, id: id }, { children: options.map((item, index) => ((0, jsx_runtime_1.jsx)(MenuItem_1.default, Object.assign({ value: item.value }, { children: item.label }), index))) }))] })));
};
exports.Select = Select;
exports.Select.defaultProps = {
    label: 'Select',
    options: [
        { value: 10, label: 'Ten' },
        { value: 20, label: 'Twenty' },
        { value: 30, label: 'Thirty' }
    ],
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select'
};
//# sourceMappingURL=index.js.map