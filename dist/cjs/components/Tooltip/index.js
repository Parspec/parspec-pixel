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
exports.Tooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
const Tooltip = (_a) => {
    var { children, title, placement } = _a, rest = __rest(_a, ["children", "title", "placement"]);
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, Object.assign({ title: title, placement: placement, arrow: true }, rest, { children: children })));
};
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map