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
exports.TextLimiter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_1 = __importDefault(require("@mui/material/styles/styled"));
const Tooltip_1 = require("@mui/material/Tooltip");
const Box_1 = require("../Box");
const Tooltip_2 = require("../Tooltip");
const StyledToolTip = (0, styled_1.default)((_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (0, jsx_runtime_1.jsx)(Tooltip_2.Tooltip, Object.assign({}, props, { classes: { popper: className } }));
})({
    [`& .${Tooltip_1.tooltipClasses.tooltip}`]: {
        maxWidth: '60%',
        wordBreak: 'break-word'
    }
});
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
    return ((0, jsx_runtime_1.jsx)(StyledToolTip, Object.assign({ title: props.tooltip, disableHoverListener: !hoverStatus }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ ref: textElementRef, height: "100%", width: "100%", style: {
                maxWidth: '100%',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: props.lines,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: props.lines > 1 ? 'break-word' : 'break-all'
            } }, { children: props.text })) })));
};
exports.TextLimiter = TextLimiter;
//# sourceMappingURL=TextLimiter.js.map