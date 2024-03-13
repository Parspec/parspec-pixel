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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
const icons_material_2 = require("@mui/icons-material");
const react_window_1 = require("react-window");
const TextField_1 = require("../TextField");
const Virtualisation_1 = require("../GroupedAutoComplete/Virtualisation");
const icon = (0, jsx_runtime_1.jsx)(icons_material_1.CheckBoxOutlineBlank, { fontSize: "small" });
const checkedIcon = (0, jsx_runtime_1.jsx)(icons_material_2.CheckBox, { fontSize: "small" });
const LISTBOX_PADDING = 8;
function renderRow(props) {
    const { data, index, style, customRow } = props;
    const currentRowData = data[index];
    const _a = currentRowData[0], { color, optionlabelkeyname } = _a, rowProp = __rest(_a, ["color", "optionlabelkeyname"]);
    const option = currentRowData[1];
    const optionState = currentRowData[2];
    const inlineStyle = Object.assign(Object.assign({}, style), { top: style.top + LISTBOX_PADDING });
    return ((0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ component: "li" }, rowProp, { noWrap: true, style: inlineStyle, fontSize: "14px" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Checkbox, { size: "small", sx: { marginRight: 2 }, icon: icon, checked: optionState.selected, checkedIcon: checkedIcon, color: rowProp.color }), customRow ? customRow(Object.assign(Object.assign({}, props), { label: option[optionlabelkeyname] })) : option[optionlabelkeyname]] })));
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
const ListboxComponent = (0, react_1.forwardRef)(function ListboxComponent(props, ref) {
    const { children, customRow } = props, other = __rest(props, ["children", "customRow"]);
    const itemData = [];
    children.forEach((item) => {
        itemData.push(item);
        itemData.push(...(item.children || []));
    });
    const theme = (0, material_1.useTheme)();
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
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ ref: ref }, { children: (0, jsx_runtime_1.jsx)(OuterElementContext.Provider, Object.assign({ value: other }, { children: (0, jsx_runtime_1.jsx)(react_window_1.VariableSizeList, Object.assign({ itemData: itemData, height: getHeight() + 2 * LISTBOX_PADDING, width: "100%", ref: gridRef, outerElementType: OuterElementType, innerElementType: "ul", itemSize: getChildSize, overscanCount: 5, itemCount: itemCount }, { children: (newProps) => renderRow(Object.assign(Object.assign({}, newProps), { customRow })) })) })) })));
});
const StyledPopper = (0, material_1.styled)(material_1.Popper)({
    [`& .${material_1.autocompleteClasses.listbox}`]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0
        }
    }
});
exports.MultiSelect = (0, react_1.forwardRef)(function (_a, ref) {
    var { value, size, helperText, error, options, variant, color, placeholder, id, filterOptions, label, optionlabelkeyname = 'label', customRow } = _a, restParams = __rest(_a, ["value", "size", "helperText", "error", "options", "variant", "color", "placeholder", "id", "filterOptions", "label", "optionlabelkeyname", "customRow"]);
    const sortedOptions = (0, react_1.useMemo)(() => (0, Virtualisation_1.sortOptions)(options, optionlabelkeyname, value), [options, value]);
    function getDefaultFilterOption(options, state) {
        return (0, material_1.createFilterOptions)()(options, state);
    }
    return ((0, jsx_runtime_1.jsx)(material_1.Autocomplete, Object.assign({}, restParams, { fullWidth: true, value: value, options: sortedOptions, multiple: true, size: size, ref: ref, disableCloseOnSelect: true, filterOptions: filterOptions ? filterOptions : getDefaultFilterOption, getOptionLabel: (option) => option[optionlabelkeyname], isOptionEqualToValue: (option, value) => option[optionlabelkeyname] === value[optionlabelkeyname], ListboxComponent: (listboxProps) => (0, jsx_runtime_1.jsx)(ListboxComponent, Object.assign({}, listboxProps, { customRow: customRow })), PopperComponent: StyledPopper, renderInput: (_a) => {
            var { size: _fieldSize } = _a, params = __rest(_a, ["size"]);
            const { InputProps: _InputProps } = params, restParams = __rest(params, ["InputProps"]);
            const { startAdornment } = _InputProps, restInputProps = __rest(_InputProps, ["startAdornment"]);
            return ((0, jsx_runtime_1.jsx)(TextField_1.TextField, Object.assign({ helperText: helperText, error: error, size: size }, restParams, { InputProps: Object.assign(Object.assign({}, restInputProps), { startAdornment: startAdornment ? ((0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ style: {
                            maxHeight: size === 'medium' ? '114px' : '84px',
                            overflowY: 'auto'
                        } }, { children: startAdornment }))) : (startAdornment) }), variant: variant, color: color, label: label, placeholder: placeholder })));
        }, renderOption: (props, option, state) => [Object.assign(Object.assign({}, props), { color, optionlabelkeyname }), option, state], renderTags: (value, getTagProps, ownerState) => {
            const { focused, ChipProps, limitTags = -1 } = ownerState;
            const limit = 50;
            const valueGreaterThanLimit = value.length > limit;
            const optionsToShow = valueGreaterThanLimit ? value.slice(0, limit) : value;
            const tagsArray = optionsToShow.map((option, index) => (0, jsx_runtime_1.jsx)(material_1.Chip, Object.assign({ label: `${option[optionlabelkeyname]}`, size: size }, getTagProps({ index }), ChipProps)));
            if (valueGreaterThanLimit && (limitTags === -1 || (limitTags > -1 && focused))) {
                tagsArray.push((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: `MuiAutocomplete-tag MuiAutocomplete-tagSize${size === null || size === void 0 ? void 0 : size.toUpperCase()}` }, { children: ["+", value.length - limit] })));
            }
            if (limitTags > -1 && !focused && valueGreaterThanLimit) {
                tagsArray.push(...Array(value.length - tagsArray.length).fill(null));
            }
            return tagsArray;
        } })));
});
exports.MultiSelect.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    size: 'small',
    error: false
};
//# sourceMappingURL=MultiSelect.js.map