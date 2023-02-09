"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const react_1 = require("react");
exports.TextField = (0, react_1.forwardRef)((props, ref) => (0, jsx_runtime_1.jsx)(TextField_1.default, Object.assign({ ref: ref }, props)));
exports.TextField.defaultProps = {
    variant: 'outlined',
    color: 'primary'
};
//# sourceMappingURL=index.js.map