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
import { forwardRef, useMemo, useRef, useEffect, createContext, useContext } from 'react';
import { Autocomplete, Box, Checkbox, Popper, Typography, autocompleteClasses, styled } from '@mui/material';
import { CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon } from '@mui/icons-material';
import { CheckBox as CheckBoxIcon } from '@mui/icons-material';
import { VariableSizeList } from 'react-window';
import { TextField } from '../TextField';
const icon = _jsx(CheckBoxOutlineBlankIcon, { fontSize: "small" });
const checkedIcon = _jsx(CheckBoxIcon, { fontSize: "small" });
const LISTBOX_PADDING = 8;
function renderRow(props) {
    const { data, index, style } = props;
    const currentRowData = data[index];
    const _a = currentRowData[0], { color } = _a, rowProp = __rest(_a, ["color"]);
    const option = currentRowData[1];
    const optionState = currentRowData[2];
    const inlineStyle = Object.assign(Object.assign({}, style), { top: style.top + LISTBOX_PADDING });
    return (_jsxs(Typography, Object.assign({ component: "li" }, rowProp, { noWrap: true, style: inlineStyle, fontSize: "14px" }, { children: [_jsx(Checkbox, { color: rowProp.color, icon: icon, checkedIcon: checkedIcon, sx: { marginRight: 2, paddingLeft: 0 }, checked: optionState.selected }), option.label] })));
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
const ListboxComponent = forwardRef(function ListboxComponent(props, ref) {
    const { children } = props, other = __rest(props, ["children"]);
    const itemData = [];
    children.forEach((item) => {
        itemData.push(item);
        itemData.push(...(item.children || []));
    });
    const itemCount = itemData.length;
    const itemSize = 32.56;
    const getChildSize = () => {
        return itemSize;
    };
    const getHeight = () => {
        if (itemCount > 10) {
            return 10 * itemSize;
        }
        return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };
    const gridRef = useResetCache(itemCount);
    return (_jsx("div", Object.assign({ ref: ref }, { children: _jsx(OuterElementContext.Provider, Object.assign({ value: other }, { children: _jsx(VariableSizeList, Object.assign({ itemData: itemData, height: getHeight() + 2 * LISTBOX_PADDING, width: "100%", ref: gridRef, outerElementType: OuterElementType, innerElementType: "ul", itemSize: getChildSize, overscanCount: 5, itemCount: itemCount }, { children: renderRow })) })) })));
});
const StyledPopper = styled(Popper)({
    [`& .${autocompleteClasses.listbox}`]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0
        }
    }
});
function sortOptions(options, values) {
    let selected = new Set();
    for (let value of values || []) {
        selected.add(value.label);
    }
    return [...options].sort((option1, option2) => {
        const isOption1Selected = selected.has(option1.label);
        const isOption2Selected = selected.has(option2.label);
        if (isOption1Selected && !isOption2Selected) {
            return -1;
        }
        else if (!isOption1Selected && isOption2Selected) {
            return 1;
        }
        const option1Label = option1.label.toLowerCase();
        const option2Label = option2.label.toLowerCase();
        if (option1Label < option2Label) {
            return -1;
        }
        else if (option1Label > option2Label) {
            return 1;
        }
        return 0;
    });
}
export const MultiSelect = forwardRef(function (_a, ref) {
    var { value, size, helperText, error, options, variant, color, label, placeholder, id, filterOptions } = _a, restParams = __rest(_a, ["value", "size", "helperText", "error", "options", "variant", "color", "label", "placeholder", "id", "filterOptions"]);
    const sortedOptions = useMemo(() => sortOptions(options, value), [options, value]);
    function getDefaultFilterOption(options, state) {
        return options.filter((option) => option.label.toLowerCase().includes(state.inputValue.toLowerCase()));
    }
    return (_jsx(Autocomplete, Object.assign({}, restParams, { open: true, fullWidth: true, value: value, options: sortedOptions, multiple: true, size: size, ref: ref, filterOptions: filterOptions ? filterOptions : getDefaultFilterOption, getOptionLabel: (option) => option.label, isOptionEqualToValue: (option, value) => option.label === value.label, ListboxComponent: ListboxComponent, PopperComponent: StyledPopper, renderInput: (_a) => {
            var { size: _fieldSize } = _a, params = __rest(_a, ["size"]);
            const { InputProps: _InputProps } = params, restParams = __rest(params, ["InputProps"]);
            const { startAdornment } = _InputProps, restInputProps = __rest(_InputProps, ["startAdornment"]);
            return (_jsx(TextField, Object.assign({ helperText: helperText, error: error, size: size }, restParams, { InputProps: Object.assign(Object.assign({}, restInputProps), { startAdornment: (_jsx(Box, Object.assign({ style: {
                            maxHeight: size === 'medium' ? '114px' : '84px',
                            overflowY: 'auto'
                        } }, { children: startAdornment }))) }), variant: variant, color: color, label: label, placeholder: placeholder })));
        }, renderOption: (props, option, state) => [Object.assign(Object.assign({}, props), { color }), option, state] })));
});
MultiSelect.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    size: 'small',
    error: false
};
//# sourceMappingURL=MultiSelect.js.map