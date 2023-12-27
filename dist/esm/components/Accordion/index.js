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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { default as MUIAccordion } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '../Box';
import { IconButton } from '../IconButton';
export const Accordion = forwardRef((_a, ref) => {
    var { options, getPanel } = _a, rest = __rest(_a, ["options", "getPanel"]);
    const [expanded, setExpanded] = useState(options[0]['labelId']);
    const handleAccordionOnChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        if (getPanel) {
            getPanel(panel);
        }
    };
    return (_jsx(_Fragment, { children: options.map((item, index) => {
            return (_jsxs(MUIAccordion, Object.assign({ ref: ref, TransitionProps: { unmountOnExit: true } }, rest, { expanded: expanded === item.labelId, onChange: handleAccordionOnChange(item.labelId) }, { children: [_jsx(AccordionSummary, Object.assign({ sx: {
                            flexDirection: 'row-reverse',
                            borderBottom: '1px solid',
                            borderColor: 'neutral.main',
                            pointerEvents: 'none'
                        }, expandIcon: _jsx(IconButton, { children: _jsx(ExpandMoreIcon, { sx: { pointerEvents: 'auto' } }) }) }, { children: _jsx(Box, Object.assign({ sx: {
                                pointerEvents: 'auto'
                            }, onClick: (e) => e.stopPropagation() }, { children: item.summary })) })), _jsx(AccordionDetails, { children: item.details })] }), index));
        }) }));
});
//# sourceMappingURL=index.js.map