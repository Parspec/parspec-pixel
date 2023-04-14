"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextLimiter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Box_1 = require("../Box");
const Tooltip_1 = require("../Tooltip");
const TextLimiter = (props) => {
    const textElementRef = (0, react_1.useRef)(null);
    const [hoverStatus, setHover] = (0, react_1.useState)(false);
    const compareSize = () => {
        var _a, _b, _c, _d;
        const compare = ((_a = textElementRef === null || textElementRef === void 0 ? void 0 : textElementRef.current) === null || _a === void 0 ? void 0 : _a.scrollWidth) > ((_b = textElementRef === null || textElementRef === void 0 ? void 0 : textElementRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth) || ((_c = textElementRef === null || textElementRef === void 0 ? void 0 : textElementRef.current) === null || _c === void 0 ? void 0 : _c.scrollHeight) > ((_d = textElementRef === null || textElementRef === void 0 ? void 0 : textElementRef.current) === null || _d === void 0 ? void 0 : _d.clientHeight);
        setHover(compare);
    };
    (0, react_1.useEffect)(() => {
        compareSize();
        window.addEventListener('resize', compareSize);
    }, []);
    (0, react_1.useEffect)(() => () => {
        window.removeEventListener('resize', compareSize);
    }, []);
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: props.tooltip, disableHoverListener: !hoverStatus }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ ref: textElementRef, height: "100%", width: "100%", style: {
                maxWidth: '100%',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: props.lines,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: 'break-all'
            } }, { children: props.text })) })));
};
exports.TextLimiter = TextLimiter;
//# sourceMappingURL=TextLimiter.js.map