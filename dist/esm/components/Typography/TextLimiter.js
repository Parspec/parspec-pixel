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
import { useEffect, useRef, useState } from 'react';
import styled from '@mui/material/styles/styled';
import { tooltipClasses } from '@mui/material/Tooltip';
import { Box } from '../Box';
import { Tooltip } from '../Tooltip';
const StyledToolTip = styled((_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return _jsx(Tooltip, Object.assign({}, props, { classes: { popper: className } }));
})({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: '60%',
        wordBreak: 'break-word'
    }
});
export const TextLimiter = (props) => {
    const textElementRef = useRef(null);
    const [hoverStatus, setHover] = useState(false);
    const compareSize = () => {
        var _a, _b, _c, _d;
        const compare = ((_a = textElementRef === null || textElementRef === void 0 ? void 0 : textElementRef.current) === null || _a === void 0 ? void 0 : _a.scrollWidth) > ((_b = textElementRef === null || textElementRef === void 0 ? void 0 : textElementRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth) || ((_c = textElementRef === null || textElementRef === void 0 ? void 0 : textElementRef.current) === null || _c === void 0 ? void 0 : _c.scrollHeight) > ((_d = textElementRef === null || textElementRef === void 0 ? void 0 : textElementRef.current) === null || _d === void 0 ? void 0 : _d.clientHeight);
        setHover(compare);
    };
    useEffect(() => {
        compareSize();
        window.addEventListener('resize', compareSize);
    }, []);
    useEffect(() => () => {
        window.removeEventListener('resize', compareSize);
    }, []);
    return (_jsx(StyledToolTip, Object.assign({ title: props.tooltip, disableHoverListener: !hoverStatus }, { children: _jsx(Box, Object.assign({ ref: textElementRef, height: "100%", width: "100%", style: {
                maxWidth: '100%',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: props.lines,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: props.lines > 1 ? 'break-word' : 'break-all'
            } }, { children: props.text })) })));
};
//# sourceMappingURL=TextLimiter.js.map