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
const Accordion_1 = __importDefault(require("@mui/material/Accordion"));
const AccordionSummary_1 = __importDefault(require("@mui/material/AccordionSummary"));
const AccordionDetails_1 = __importDefault(require("@mui/material/AccordionDetails"));
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const Accordion = (_a) => {
    var { summary, details, variant } = _a, rest = __rest(_a, ["summary", "details", "variant"]);
    return ((0, jsx_runtime_1.jsxs)(Accordion_1.default, Object.assign({ TransitionProps: { unmountOnExit: true } }, rest, { children: [(0, jsx_runtime_1.jsx)(AccordionSummary_1.default, Object.assign({ sx: {
                    flexDirection: 'row-reverse'
                }, expandIcon: (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}) }, { children: summary })), (0, jsx_runtime_1.jsx)(AccordionDetails_1.default, { children: details })] })));
};
exports.Accordion = Accordion;
exports.Accordion.defaultProps = {
    variant: 'outlined'
};
//# sourceMappingURL=index.js.map