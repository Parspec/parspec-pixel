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
import { forwardRef, useState, useEffect, useMemo } from 'react';
import { TextField } from '../TextField';
import { default as MUIAutocomplete, autocompleteClasses, createFilterOptions } from '@mui/material/Autocomplete';
import { Popper, styled, Chip } from '@mui/material';
import { ListboxComponent, sortOptions } from './Virtualisation';
const filter = createFilterOptions();
const StyledPopper = styled(Popper)({
    [`& .${autocompleteClasses.listbox}`]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0
        }
    }
});
export const GroupedAutoComplete = forwardRef((_a, ref) => {
    var { id, label, placeholder, color, variant, onChange, optionlabelkeyname, freeSolo, size, onBlur = () => { }, helperText, error, options, onTextFieldChange, limitTags, value, staticFilters, selectedOptions, filterOptionsCallBack = (options, params) => {
        let filteredOptions = filter(options, params);
        filteredOptions = options.filter((option) => String(option[optionlabelkeyname]).toLowerCase().includes(params.inputValue.toLowerCase()));
        return filteredOptions;
    } } = _a, props = __rest(_a, ["id", "label", "placeholder", "color", "variant", "onChange", "optionlabelkeyname", "freeSolo", "size", "onBlur", "helperText", "error", "options", "onTextFieldChange", "limitTags", "value", "staticFilters", "selectedOptions", "filterOptionsCallBack"]);
    const [selectedGroup, setSelectedGroup] = useState([]);
    let optionsWithType = [];
    const sortedOptions = useMemo(() => sortOptions(options, optionlabelkeyname, selectedOptions), [options, optionlabelkeyname, selectedOptions]);
    const handleOnChange = (event, newValue, reason) => {
        if (newValue.length && newValue[newValue.length - 1].type === 'filters') {
            const filterObj = newValue.find((value) => value.type === 'filters');
            const filterName = String(filterObj === null || filterObj === void 0 ? void 0 : filterObj[optionlabelkeyname]) || '';
            const filterValue = Number(filterObj === null || filterObj === void 0 ? void 0 : filterObj.value);
            if (!selectedGroup.find((group) => group[filterName] > 0)) {
                console.log(getFilteredOptions(filterValue));
                newValue = [...newValue, ...getFilteredOptions(filterValue)];
                newValue = newValue.filter((el) => el.type !== 'filters');
            }
            else {
                newValue = [...newValue.filter((value) => Array.isArray(value.group) && !value.group.includes(filterValue) && value.type !== 'filters')];
            }
        }
        else if (newValue.length && newValue[newValue.length - 1].type === 'options' && reason === 'selectOption') {
            const lastEl = newValue[newValue.length - 1];
            const alreadySelected = Boolean(selectedOptions.find((option) => option[optionlabelkeyname] === lastEl[optionlabelkeyname]));
            if (alreadySelected) {
                newValue = newValue.filter((value) => value[optionlabelkeyname] !== lastEl[optionlabelkeyname]);
            }
        }
        if (reason === 'clear')
            setSelectedGroup([]);
        onChange(event, newValue, reason);
    };
    useEffect(() => {
        const groupCount = [];
        staticFilters.map((filter) => {
            const eleInFilter = selectedOptions.filter((selectedOption) => Array.isArray(selectedOption.group) && selectedOption.group.includes(Number(filter.value))).length;
            groupCount.push({ [String(filter[optionlabelkeyname])]: eleInFilter });
        });
        setSelectedGroup(groupCount);
    }, [selectedOptions]);
    const getFilteredOptions = (filterValue) => {
        return optionsWithType.filter((option) => option.type !== 'filters' && Array.isArray(option.group) && option.group.includes(filterValue));
    };
    const getAutoCompleteOptions = () => {
        const groupedOptions = sortedOptions.map((option) => {
            return Object.assign({ type: 'options' }, option);
        });
        const groupedStaticFilterOptions = staticFilters.map((option) => {
            return Object.assign({ type: 'filters' }, option);
        });
        optionsWithType = [...groupedStaticFilterOptions, ...groupedOptions];
        return optionsWithType;
    };
    const handleOnInputChange = (event, value) => {
        if (onTextFieldChange) {
            onTextFieldChange(event, value);
        }
    };
    const filterOptions = (options, params) => {
        if (!params.inputValue)
            return options;
        const searchResults = filterOptionsCallBack(options, params);
        return searchResults.filter((result) => result.type !== 'filters');
    };
    return (_jsx(_Fragment, { children: _jsx(MUIAutocomplete, Object.assign({}, props, { fullWidth: true, multiple: true, options: getAutoCompleteOptions(), ref: ref, id: id, onBlur: onBlur, onChange: handleOnChange, ListboxComponent: ListboxComponent, PopperComponent: StyledPopper, disableCloseOnSelect: true, getOptionLabel: (option) => {
                if (typeof option === 'object') {
                    return `${option[optionlabelkeyname]}`;
                }
                return option;
            }, value: selectedOptions, limitTags: limitTags, filterOptions: filterOptions, onInputChange: handleOnInputChange, freeSolo: freeSolo, renderInput: (_a) => {
                var { size: _fieldSize } = _a, params = __rest(_a, ["size"]);
                const { InputProps: _InputProps } = params, restParams = __rest(params, ["InputProps"]);
                const { startAdornment } = _InputProps, restInputProps = __rest(_InputProps, ["startAdornment"]);
                return (_jsx(TextField, Object.assign({ helperText: helperText, error: error, size: size }, restParams, { InputProps: Object.assign(Object.assign({}, restInputProps), { startAdornment: startAdornment ? (_jsx("div", Object.assign({ style: {
                                maxHeight: size === 'medium' ? '114px' : '84px',
                                overflowY: 'auto'
                            } }, { children: startAdornment }))) : (startAdornment) }), variant: variant, color: color, label: label, placeholder: placeholder })));
            }, renderOption: (props, option, state) => [Object.assign(Object.assign({}, props), { color, optionlabelkeyname, lastFilterIndex: staticFilters.length - 1, selectedOptions, selectedGroup, optionsWithType }), option, state], renderTags: (value, getTagProps, ownerState) => {
                const { focused, ChipProps, limitTags = -1 } = ownerState;
                const limit = 50;
                const valueGreaterThanLimit = value.length > limit;
                const optionsToShow = valueGreaterThanLimit ? value.slice(0, limit) : value;
                const tagsArray = optionsToShow.map((option, index) => _jsx(Chip, Object.assign({ label: `${option[optionlabelkeyname]}`, size: size }, getTagProps({ index }), ChipProps)));
                if (valueGreaterThanLimit && (limitTags === -1 || (limitTags > -1 && focused))) {
                    tagsArray.push(_jsxs("span", Object.assign({ className: `MuiAutocomplete-tag MuiAutocomplete-tagSize${size === null || size === void 0 ? void 0 : size.toUpperCase()}` }, { children: ["+", value.length - limit] })));
                }
                if (limitTags > -1 && !focused && valueGreaterThanLimit) {
                    tagsArray.push(...Array(value.length - tagsArray.length).fill(null));
                }
                return tagsArray;
            } })) }));
});
GroupedAutoComplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    size: 'small',
    helperText: '',
    error: false
};
//# sourceMappingURL=GroupedAutoComplete.js.map