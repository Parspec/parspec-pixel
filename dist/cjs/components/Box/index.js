"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = __importDefault(require("@mui/material/Box"));
const react_1 = require("react");
exports.Box = react_1.forwardRef((props, ref) => {
    return jsx_runtime_1.jsx(Box_1.default, Object.assign({ ref: ref }, props), void 0);
});
//# sourceMappingURL=index.js.map