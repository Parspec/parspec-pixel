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
const Link_1 = __importDefault(require("./Link"));
const Typography_1 = require("../Typography");
const Breadcrumb = (_a) => {
    var { options, component } = _a, rest = __rest(_a, ["options", "component"]);
    return ((0, jsx_runtime_1.jsx)(Breadcrumbs_1.default, Object.assign({ separator: ">" }, rest, { children: options.map((item, index) => {
            if (index === options.length - 1) {
                return ((0, jsx_runtime_1.jsx)(Typography_1.BodyXS, Object.assign({ color: 'secondary' }, { children: item.displaytext }), index));
            }
            return ((0, jsx_runtime_1.jsx)(Link_1.default, Object.assign({ fontWeight: "400", fontFamily: "Inter", fontSize: '12px', color: "secondary", underline: 'hover', to: item.href, component: component }, { children: item.displaytext }), index));
        }) })));
};
exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=index.js.map