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
exports.Modal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Modal_1 = __importDefault(require("@mui/material/Modal"));
const Box_1 = require("../Box");
const ModalStyles_1 = require("./ModalStyles");
const react_1 = require("react");
exports.Modal = (0, react_1.forwardRef)((_a, ref) => {
    var { open, onClose, children, header, footer } = _a, rest = __rest(_a, ["open", "onClose", "children", "header", "footer"]);
    return ((0, jsx_runtime_1.jsx)(Modal_1.default, Object.assign({ open: open, onClose: onClose }, rest, { ref: ref }, { children: (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ sx: ModalStyles_1.ModalContainerStyle }, { children: [(0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: "100%", pb: 2 }, { children: header })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: "100%", pb: 1 }, { children: children })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: "100%", mt: "auto", pt: 4 }, { children: footer }))] })) })));
});
exports.Modal.defaultProps = {
    header: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}),
    footer: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}),
    children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})
};
//# sourceMappingURL=Modal.js.map