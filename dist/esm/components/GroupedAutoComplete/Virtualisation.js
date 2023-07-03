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
import { createContext, forwardRef, useContext, useEffect, useRef } from 'react';
import { VariableSizeList } from 'react-window';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Checkbox } from '../Checkbox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { theme } from '../../theme';
import { Box } from '../Box';
import { BodySmall, BodyXS } from '../Typography';
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
            return _jsx(CheckBoxOutlineBlankIcon, {});
        if (currentGroup[String(option.title)] === 0)
            return _jsx(CheckBoxOutlineBlankIcon, {});
        else if (currentGroup[String(option.title)] < actualOptionCount)
            return _jsx(IndeterminateCheckBoxIcon, {});
        return _jsx(CheckBoxIcon, {});
    };
    const getGroupOptionLabel = (option) => {
        const actualOptionCount = optionsWithType.filter((optionObj) => Array.isArray(optionObj.group) && optionObj.group.includes(Number(option.value))).length;
        return (_jsxs(Box, Object.assign({ display: 'flex', gap: 1, alignItems: "center" }, { children: [_jsx(BodySmall, { children: option[optionlabelkeyname] }), _jsx(BodyXS, { children: `(${actualOptionCount})` })] })));
    };
    const inlineStyle = Object.assign(Object.assign({}, style), { top: style.top + LISTBOX_PADDING, borderTop: index === firstOptionIndex ? `1px solid ${theme.palette.neutral.main}` : 'none' });
    return (_jsx(Typography, Object.assign({ component: "li" }, rowProp, { noWrap: true, style: inlineStyle }, { children: option.type === 'options' ? (_jsx(Checkbox, { style: { marginRight: 8 }, checked: isSelectedOption(option), label: String(option[optionlabelkeyname]), color: rowProp.color, icon: _jsx(CheckBoxOutlineBlankIcon, {}), checkedIcon: _jsx(CheckBoxIcon, {}) })) : (_jsx(Checkbox, { style: { marginRight: 8 }, checked: isSelectedGroup(option), label: getGroupOptionLabel(option), checkedIcon: getCheckedIcon(option), color: rowProp.color })) })));
}
const OuterElementContext = createContext({});
const OuterElementType = forwardRef((props, ref) => {
    const outerProps = useContext(OuterElementContext);
    return _jsx("div", Object.assign({ ref: ref }, props, outerProps));
});
function useResetCache(data) {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current != null) {
            ref.current.resetAfterIndex(0, true);
        }
    }, [data]);
    return ref;
}
// Adapter for react-window
export const ListboxComponent = forwardRef(function ListboxComponent(props, ref) {
    const { children } = props, other = __rest(props, ["children"]);
    const itemData = [];
    children.forEach((item) => {
        itemData.push(item);
        itemData.push(...(item.children || []));
    });
    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
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
    return (_jsx("div", Object.assign({ ref: ref }, { children: _jsx(OuterElementContext.Provider, Object.assign({ value: other }, { children: _jsx(VariableSizeList, Object.assign({ itemData: itemData, height: getHeight() + 2 * LISTBOX_PADDING, width: "100%", ref: gridRef, outerElementType: OuterElementType, innerElementType: "ul", itemSize: getChildSize, overscanCount: 5, itemCount: itemCount }, { children: renderRow })) })) })));
});
export function sortOptions(options, optionlabelkeyname, values) {
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
//# sourceMappingURL=Virtualisation.js.map