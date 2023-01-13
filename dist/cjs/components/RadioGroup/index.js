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
exports.RadioGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
const FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const Radio_1 = require("../Radio");
const RadioGroup = (_a) => {
    var { options, label, name } = _a, rest = __rest(_a, ["options", "label", "name"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(FormLabel_1.default, { children: label }), (0, jsx_runtime_1.jsx)(RadioGroup_1.default, Object.assign({}, rest, { name: name }, { children: options.map((item, index) => ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: item.value, control: (0, jsx_runtime_1.jsx)(Radio_1.Radio, {}), label: item.label }, index))) }))] }));
};
exports.RadioGroup = RadioGroup;
exports.RadioGroup.defaultProps = {
    label: 'Radio Group',
    name: 'radio-group-name-control'
};
//# sourceMappingURL=index.js.map