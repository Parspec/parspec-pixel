import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Box } from '../Box';
import { Tooltip } from '../Tooltip';
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
    return (_jsx(Tooltip, Object.assign({ title: props.tooltip, disableHoverListener: !hoverStatus }, { children: _jsx(Box, Object.assign({ ref: textElementRef, height: "100%", width: "100%", style: {
                maxWidth: '100%',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: props.lines,
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            } }, { children: props.text })) })));
};
//# sourceMappingURL=TextLimiter.js.map