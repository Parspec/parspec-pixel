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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const material_2 = require("@mui/material");
const StyledLink = (0, material_2.styled)(material_1.Link)(({ theme }) => ({
    '&:hover': {
        color: theme.palette.primary.main
    }
}));
function Link(_a) {
    var { children, component } = _a, restProps = __rest(_a, ["children", "component"]);
    return ((0, jsx_runtime_1.jsx)(StyledLink, Object.assign({ component: component }, restProps, { children: children })));
}
exports.Link = Link;
//# sourceMappingURL=index.js.map