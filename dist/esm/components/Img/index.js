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
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { CircularProgress } from '../CircularProgress';
import { Box } from '../Box';
export const Img = (_a) => {
    var { src, width, height } = _a, rest = __rest(_a, ["src", "width", "height"]);
    const [imgSrc, setImgSrc] = useState('');
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImgSrc(src);
        };
    }, [src]);
    if (!imgSrc) {
        return (_jsx(Box, Object.assign({ width: width, height: height, display: "flex", justifyContent: "center", alignItems: "center" }, { children: _jsx(CircularProgress, {}) })));
    }
    return _jsx("img", Object.assign({ src: imgSrc }, rest));
};
//# sourceMappingURL=index.js.map