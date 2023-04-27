"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
const Box_1 = require("../Box");
const Typography_1 = require("../Typography");
const ProgressBar = (props) => {
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ position: "relative", display: "inline-flex" }, { children: [(0, jsx_runtime_1.jsx)(CircularProgress_1.default, Object.assign({ variant: "determinate" }, props, { value: props.progress })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyXS, { children: `${props.progress}%` }) }))] })));
};
exports.default = ProgressBar;
//# sourceMappingURL=index.js.map