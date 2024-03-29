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
exports.Info = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
function Info(_a) {
    var { children } = _a, otherProps = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({}, otherProps, { p: 2, border: "1px solid", borderColor: "primary.main", color: "primary.main", bgcolor: 'primary.light' }, { children: children })));
}
exports.Info = Info;
//# sourceMappingURL=index.js.map