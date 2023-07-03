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
exports.sortOptions = exports.ListboxComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_window_1 = require("react-window");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const Checkbox_1 = require("../Checkbox");
const CheckBox_1 = __importDefault(require("@mui/icons-material/CheckBox"));
const IndeterminateCheckBox_1 = __importDefault(require("@mui/icons-material/IndeterminateCheckBox"));
const CheckBoxOutlineBlank_1 = __importDefault(require("@mui/icons-material/CheckBoxOutlineBlank"));
const theme_1 = require("../../theme");
const Box_1 = require("../Box");
const Typography_1 = require("../Typography");
const LISTBOX_PADDING = 8;
function renderRow(props) {
    const { data, index, style } = props;
    const currentRowData = data[index];
    const _a = currentRowData[0], { color, optionlabelkeyname, firstOptionIndex, selectedOptions, selectedGroup, optionsWithType } = _a, rowProp = __rest(_a, ["color", "optionlabelkeyname", "firstOptionIndex", "selectedOptions", "selectedGroup", "optionsWithType"]);
    const option = currentRowData[1];
    const isSelectedOption = (option) => {
        return Boolean(selectedOptions.find((selectedOption) => selectedOption.title === option.title));
    };
    const isSelectedGroup = (group) => {
        return Boolean(selectedGroup.find((selectedGroup) => selectedGroup[String(group.title)]));
    };
    const getCheckedIcon = (option) => {
        const actualOptionCount = optionsWithType.filter((optionObj) => Array.isArray(optionObj.group) && optionObj.group.includes(Number(option.value))).length;
        const currentGroup = selectedGroup.filter((group) => String(option.title) in group)[0];
        if (!currentGroup)
            return (0, jsx_runtime_1.jsx)(CheckBoxOutlineBlank_1.default, {});
        if (currentGroup[String(option.title)] === 0)
            return (0, jsx_runtime_1.jsx)(CheckBoxOutlineBlank_1.default, {});
        else if (currentGroup[String(option.title)] < actualOptionCount)
            return (0, jsx_runtime_1.jsx)(IndeterminateCheckBox_1.default, {});
        return (0, jsx_runtime_1.jsx)(CheckBox_1.default, {});
    };
    const getGroupOptionLabel = (option) => {
        const actualOptionCount = optionsWithType.filter((optionObj) => Array.isArray(optionObj.group) && optionObj.group.includes(Number(option.value))).length;
        return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex', gap: 1, alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(Typography_1.BodySmall, { children: option[optionlabelkeyname] }), (0, jsx_runtime_1.jsx)(Typography_1.BodyXS, { children: `(${actualOptionCount})` })] })));
    };
    const inlineStyle = Object.assign(Object.assign({}, style), { top: style.top + LISTBOX_PADDING, borderTop: index === firstOptionIndex ? `1px solid ${theme_1.theme.palette.neutral.main}` : 'none' });
    return ((0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "li" }, rowProp, { noWrap: true, style: inlineStyle }, { children: option.type === 'options' ? ((0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { style: { marginRight: 8 }, checked: isSelectedOption(option), label: String(option[optionlabelkeyname]), color: rowProp.color, icon: (0, jsx_runtime_1.jsx)(CheckBoxOutlineBlank_1.default, {}), checkedIcon: (0, jsx_runtime_1.jsx)(CheckBox_1.default, {}) })) : ((0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { style: { marginRight: 8 }, checked: isSelectedGroup(option), label: getGroupOptionLabel(option), checkedIcon: getCheckedIcon(option), color: rowProp.color })) })));
}
const OuterElementContext = (0, react_1.createContext)({});
const OuterElementType = (0, react_1.forwardRef)((props, ref) => {
    const outerProps = (0, react_1.useContext)(OuterElementContext);
    return (0, jsx_runtime_1.jsx)("div", Object.assign({ ref: ref }, props, outerProps));
});
function useResetCache(data) {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current != null) {
            ref.current.resetAfterIndex(0, true);
        }
    }, [data]);
    return ref;
}
// Adapter for react-window
exports.ListboxComponent = (0, react_1.forwardRef)(function ListboxComponent(props, ref) {
    const { children } = props, other = __rest(props, ["children"]);
    const itemData = [];
    children.forEach((item) => {
        itemData.push(item);
        itemData.push(...(item.children || []));
    });
    const theme = (0, styles_1.useTheme)();
    const smUp = (0, material_1.useMediaQuery)(theme.breakpoints.up('sm'), {
        noSsr: true
    });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;
    const getChildSize = () => {
        return itemSize;
    };
    const getHeight = () => {
        if (itemCount > 8) {
            return 8 * itemSize;
        }
        return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };
    const gridRef = useResetCache(itemCount);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ ref: ref }, { children: (0, jsx_runtime_1.jsx)(OuterElementContext.Provider, Object.assign({ value: other }, { children: (0, jsx_runtime_1.jsx)(react_window_1.VariableSizeList, Object.assign({ itemData: itemData, height: getHeight() + 2 * LISTBOX_PADDING, width: "100%", ref: gridRef, outerElementType: OuterElementType, innerElementType: "ul", itemSize: getChildSize, overscanCount: 5, itemCount: itemCount }, { children: renderRow })) })) })));
});
function sortOptions(options, optionlabelkeyname, values) {
    let selected = new Set();
    for (let value of values || []) {
        selected.add(value[optionlabelkeyname]);
    }
    return [...options].sort((option1, option2) => {
        const isOption1Selected = selected.has(option1[optionlabelkeyname]);
        const isOption2Selected = selected.has(option2[optionlabelkeyname]);
        if (isOption1Selected && !isOption2Selected) {
            return -1;
        }
        else if (!isOption1Selected && isOption2Selected) {
            return 1;
        }
        const option1Label = String(option1[optionlabelkeyname]).toLowerCase();
        const option2Label = String(option2[optionlabelkeyname]).toLowerCase();
        if (option1Label < option2Label) {
            return -1;
        }
        else if (option1Label > option2Label) {
            return 1;
        }
        return 0;
    });
}
exports.sortOptions = sortOptions;
//# sourceMappingURL=Virtualisation.js.map