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
exports.Fade = exports.CustomPopper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Popper_1 = __importDefault(require("@mui/material/Popper"));
const material_1 = require("@mui/material");
Object.defineProperty(exports, "Fade", { enumerable: true, get: function () { return material_1.Fade; } });
const CustomPopper = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (0, jsx_runtime_1.jsx)(Popper_1.default, Object.assign({}, props, { children: children }));
};
exports.CustomPopper = CustomPopper;
//# sourceMappingURL=index.js.map