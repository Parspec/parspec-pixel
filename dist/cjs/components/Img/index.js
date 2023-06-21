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
exports.Img = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CircularProgress_1 = require("../CircularProgress");
const Box_1 = require("../Box");
const Img = (_a) => {
    var { src, width, height } = _a, rest = __rest(_a, ["src", "width", "height"]);
    const [imgSrc, setImgSrc] = (0, react_1.useState)(src);
    (0, react_1.useEffect)(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImgSrc(src);
        };
    }, [src]);
    if (!imgSrc) {
        return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: width, height: height, display: "flex", justifyContent: "center", alignItems: "center" }, { children: (0, jsx_runtime_1.jsx)(CircularProgress_1.CircularProgress, {}) })));
    }
    return (0, jsx_runtime_1.jsx)("img", Object.assign({ src: imgSrc }, rest));
};
exports.Img = Img;
//# sourceMappingURL=index.js.map