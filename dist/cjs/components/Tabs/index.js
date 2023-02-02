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
exports.Tabs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Tabs_1 = __importDefault(require("@mui/material/Tabs"));
const material_1 = require("@mui/material");
const Box_1 = require("../Box");
function TabPanel(props) {
    const { children, value, index } = props, other = __rest(props, ["children", "value", "index"]);
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ role: "tabpanel", hidden: value !== index, id: `simple-tabpanel-${index}`, "aria-labelledby": `simple-tab-${index}` }, other, { children: value === index && (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ sx: { p: 3 } }, { children: children })) })));
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}
const Tabs = ({ tabLabelList, tabPannelList }) => {
    const [value, setValue] = (0, react_1.useState)(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ sx: { borderBottom: 1, borderColor: 'divider' } }, { children: (0, jsx_runtime_1.jsx)(Tabs_1.default, Object.assign({ value: value, onChange: handleChange, "aria-label": "pixel basic tabs" }, { children: tabLabelList.map((item, index) => ((0, jsx_runtime_1.jsx)(material_1.Tab, Object.assign({ label: item }, a11yProps(index))))) })) })), tabPannelList.map((item, index) => ((0, jsx_runtime_1.jsx)(TabPanel, Object.assign({ value: value, index: index }, { children: item }))))] }));
};
exports.Tabs = Tabs;
//# sourceMappingURL=index.js.map