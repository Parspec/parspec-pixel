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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { default as MUIAccordion } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const Accordion = (_a) => {
    var { summary, details, variant } = _a, rest = __rest(_a, ["summary", "details", "variant"]);
    return (_jsxs(MUIAccordion, Object.assign({ TransitionProps: { unmountOnExit: true } }, rest, { children: [_jsx(AccordionSummary, Object.assign({ sx: {
                    flexDirection: 'row-reverse'
                }, expandIcon: _jsx(ExpandMoreIcon, {}) }, { children: summary })), _jsx(AccordionDetails, { children: details })] })));
};
Accordion.defaultProps = {
    variant: 'outlined'
};
//# sourceMappingURL=index.js.map