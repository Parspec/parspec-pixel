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
exports.Accordion = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Accordion_1 = __importDefault(require("@mui/material/Accordion"));
const AccordionSummary_1 = __importDefault(require("@mui/material/AccordionSummary"));
const AccordionDetails_1 = __importDefault(require("@mui/material/AccordionDetails"));
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const Box_1 = require("../Box");
const IconButton_1 = require("../IconButton");
const commonSxStyles = {
    pointerEvents: 'auto'
};
exports.Accordion = (0, react_1.forwardRef)((_a, ref) => {
    var { options, getPanel } = _a, rest = __rest(_a, ["options", "getPanel"]);
    const [expanded, setExpanded] = (0, react_1.useState)(options[0]['labelId']);
    const handleAccordionOnChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        if (getPanel) {
            getPanel(panel);
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: options.map((item, index) => {
            return ((0, jsx_runtime_1.jsxs)(Accordion_1.default, Object.assign({ ref: ref, TransitionProps: { unmountOnExit: true } }, rest, { expanded: expanded === item.labelId, onChange: handleAccordionOnChange(item.labelId) }, { children: [(0, jsx_runtime_1.jsx)(AccordionSummary_1.default, Object.assign({ sx: {
                            flexDirection: 'row-reverse',
                            borderBottom: '1px solid',
                            borderColor: 'neutral.main',
                            pointerEvents: 'none'
                        }, expandIcon: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, { children: (0, jsx_runtime_1.jsx)(ExpandMore_1.default, { sx: commonSxStyles }) }) }, { children: (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex', justifyContent: 'space-between', width: '100%', onClick: (e) => e.stopPropagation() }, { children: [(0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ sx: commonSxStyles }, { children: item.summary })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ sx: commonSxStyles }, { children: item.rightSummary }))] })) })), (0, jsx_runtime_1.jsx)(AccordionDetails_1.default, { children: item.details })] }), index));
        }) }));
});
//# sourceMappingURL=index.js.map