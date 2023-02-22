"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Radio_1 = __importDefault(require("@mui/material/Radio"));
const Radio = (props) => {
    return (0, jsx_runtime_1.jsx)(Radio_1.default, Object.assign({}, props));
};
exports.Radio = Radio;
exports.Radio.defaultProps = {
    size: 'small',
    color: 'tertiary'
};
//# sourceMappingURL=index.js.map