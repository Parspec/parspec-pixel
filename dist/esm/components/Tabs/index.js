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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { default as MUITabs } from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import { Box } from '../Box';
function TabPanel(props) {
    const { children, value, index } = props, other = __rest(props, ["children", "value", "index"]);
    return (_jsx(Box, Object.assign({ role: "tabpanel", hidden: value !== index, id: `simple-tabpanel-${index}`, "aria-labelledby": `simple-tab-${index}` }, other, { children: value === index && _jsx(Box, Object.assign({ sx: { p: 3 } }, { children: children })) })));
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}
export const Tabs = ({ tabLabelList, tabPannelList }) => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Box, Object.assign({ sx: { borderBottom: 1, borderColor: 'divider' } }, { children: _jsx(MUITabs, Object.assign({ value: value, onChange: handleChange, "aria-label": "pixel basic tabs" }, { children: tabLabelList.map((item, index) => (_jsx(Tab, Object.assign({ label: item }, a11yProps(index))))) })) })), tabPannelList.map((item, index) => (_jsx(TabPanel, Object.assign({ value: value, index: index }, { children: item }))))] }));
};
//# sourceMappingURL=index.js.map