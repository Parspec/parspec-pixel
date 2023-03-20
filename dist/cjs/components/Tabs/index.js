"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Tabs_1 = __importDefault(require("@mui/material/Tabs"));
const material_1 = require("@mui/material");
const Box_1 = require("../Box");
const Tabs = ({ selectedTab, options, onChange }) => {
    const handleChange = (event, newValue) => {
        onChange(newValue);
    };
    return (jsx_runtime_1.jsx(Box_1.Box, Object.assign({ sx: { borderBottom: 1, borderColor: 'divider' } }, { children: jsx_runtime_1.jsx(Tabs_1.default, Object.assign({ value: selectedTab, onChange: handleChange }, { children: options.map((item, index) => (jsx_runtime_1.jsx(material_1.Tab, { label: item.label, value: item.value }, index))) }), void 0) }), void 0));
};
exports.Tabs = Tabs;
//# sourceMappingURL=index.js.map