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
exports.Breadcrumb = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Breadcrumbs_1 = __importDefault(require("@mui/material/Breadcrumbs"));
const Link_1 = require("../Link");
const skeleton_1 = require("../skeleton");
const Typography_1 = require("../Typography");
const Box_1 = require("../Box");
const MUIBreadCrumbText = (props) => ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ maxWidth: "160px" }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyXS, Object.assign({}, props, { limit: true, lines: 1 })) })));
const Breadcrumb = (_a) => {
    var { options, component, isLoading = false } = _a, rest = __rest(_a, ["options", "component", "isLoading"]);
    return ((0, jsx_runtime_1.jsx)(Breadcrumbs_1.default, Object.assign({ separator: ">" }, rest, { children: options.map((item, index) => {
            if (isLoading) {
                return (0, jsx_runtime_1.jsx)(skeleton_1.Skeleton, { variant: "rectangular", width: "116px", height: "16px" }, index);
            }
            if (index === options.length - 1) {
                return ((0, jsx_runtime_1.jsx)(MUIBreadCrumbText, Object.assign({ color: 'secondary' }, { children: item.displaytext }), index));
            }
            return ((0, jsx_runtime_1.jsx)(Link_1.Link, Object.assign({ color: "secondary", underline: 'hover', to: item.href, component: component }, { children: (0, jsx_runtime_1.jsx)(MUIBreadCrumbText, Object.assign({ sx: { '&:hover': { color: 'inherit' } } }, { children: item.displaytext })) }), index));
        }) })));
};
exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=index.js.map