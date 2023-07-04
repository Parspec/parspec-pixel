import { forwardRef, useState, useEffect, useMemo } from 'react';

import { TextField } from '../TextField';
import { AutocompleteProps, default as MUIAutocomplete, autocompleteClasses, createFilterOptions } from '@mui/material/Autocomplete';
import { Popper, TextFieldProps, styled } from '@mui/material';
import { ListboxComponent, sortOptions } from './Virtualisation';

export type GroupedOptionType = {
    [index: string]: string | number | number[] | string[] | boolean | {};
};

export type GroupType = {
    [index: string]: number;
};

export interface GroupedAutoCompleteProps extends Omit<AutocompleteProps<GroupedOptionType, true, boolean | undefined, false>, 'renderInput'> {
    staticFilters: GroupedOptionType[];
    selectedOptions: GroupedOptionType[];
    helperText?: string;
    error?: boolean;
    variant?: TextFieldProps['variant'];
    color?: TextFieldProps['color'];
    label: string;
    placeholder?: TextFieldProps['placeholder'];
    fieldSize?: 'small' | 'medium';
    optionlabelkeyname: string;
    onChange: (event: React.SyntheticEvent<Element, Event>, value: GroupedOptionType[]) => void;
    filterOptionsCallBack?: (options: GroupedOptionType[], params: any) => GroupedOptionType[];
    onTextFieldChange?: (e: React.SyntheticEvent<Element, Event>, value: string) => void;
}

const filter = createFilterOptions<GroupedOptionType>();

const StyledPopper = styled(Popper)({
    [`& .${autocompleteClasses.listbox}`]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0
        }
    }
});

export const GroupedAutoComplete = forwardRef<HTMLDivElement, GroupedAutoCompleteProps>(
    (
        {
            id,
            label,
            placeholder,
            color,
            variant,
            onChange,
            optionlabelkeyname,
            freeSolo,
            fieldSize,
            onBlur = () => {},
            helperText,
            error,
            options,
            onTextFieldChange,
            limitTags,
            value,
            staticFilters,
            selectedOptions,
            filterOptionsCallBack = (options: GroupedOptionType[], params: any) => {
                let filteredOptions = filter(options, params);
                filteredOptions = options.filter((option: GroupedOptionType) => String(option[optionlabelkeyname]).toLowerCase().includes(params.inputValue.toLowerCase()));
                return filteredOptions;
            },
            ...props
        },
        ref
    ) => {
        const [selectedGroup, setSelectedGroup] = useState<GroupType[]>([]);

        let optionsWithType: GroupedOptionType[] = [];

        const sortedOptions = useMemo(() => sortOptions(options, optionlabelkeyname, selectedOptions), [options, optionlabelkeyname, selectedOptions]);

        const handleOnChange = (event: any, newValue: GroupedOptionType[], reason: string) => {
            if (newValue.length && newValue[newValue.length - 1].type === 'filters') {
                const filterObj = newValue.find((value: GroupedOptionType) => value.type === 'filters');
                const filterName = String(filterObj?.[optionlabelkeyname]) || '';
                const filterValue = Number(filterObj?.value);
                if (!selectedGroup.find((group) => group[filterName] > 0)) {
                    console.log(getFilteredOptions(filterValue));
                    newValue = [...newValue, ...getFilteredOptions(filterValue)];
                    newValue = newValue.filter((el: GroupedOptionType) => el.type !== 'filters');
                } else {
                    newValue = [...newValue.filter((value: GroupedOptionType) => Array.isArray(value.group) && !value.group.includes(filterValue) && value.type !== 'filters')];
                }
            } else if (newValue.length && newValue[newValue.length - 1].type === 'options' && reason === 'selectOption') {
                const lastEl = newValue[newValue.length - 1];
                const alreadySelected = Boolean(selectedOptions.find((option: GroupedOptionType) => option[optionlabelkeyname] === lastEl[optionlabelkeyname]));
                if (alreadySelected) {
                    newValue = newValue.filter((value: GroupedOptionType) => value[optionlabelkeyname] !== lastEl[optionlabelkeyname]);
                }
            }

            if (reason === 'clear') setSelectedGroup([]);
            onChange(event, newValue);
        };

        useEffect(() => {
            const groupCount: GroupType[] = [];
            staticFilters.map((filter) => {
                const eleInFilter = selectedOptions.filter((selectedOption: GroupedOptionType) => Array.isArray(selectedOption.group) && selectedOption.group.includes(Number(filter.value))).length;
                groupCount.push({ [String(filter[optionlabelkeyname])]: eleInFilter });
            });
            setSelectedGroup(groupCount);
        }, [selectedOptions]);

        const getFilteredOptions = (filterValue: number) => {
            return optionsWithType.filter((option: GroupedOptionType) => option.type !== 'filters' && Array.isArray(option.group) && option.group.includes(filterValue));
        };

        const getAutoCompleteOptions = () => {
            const groupedOptions = sortedOptions.map((option) => {
                return {
                    type: 'options',
                    ...option
                };
            });

            const groupedStaticFilterOptions = staticFilters.map((option) => {
                return {
                    type: 'filters',
                    ...option
                };
            });

            optionsWithType = [...groupedStaticFilterOptions, ...groupedOptions] as GroupedOptionType[];

            return optionsWithType;
        };

        const handleOnInputChange = (event: React.SyntheticEvent<Element, Event>, value: string) => {
            if (onTextFieldChange) {
                onTextFieldChange(event, value);
            }
        };

        const filterOptions = (options: GroupedOptionType[], params: any) => {
            if (!params.inputValue) return options;
            const searchResults = filterOptionsCallBack(options, params);
            return searchResults.filter((result) => result.type !== 'filters');
        };

        return (
            <>
                <MUIAutocomplete
                    {...props}
                    fullWidth
                    multiple
                    options={getAutoCompleteOptions()}
                    ref={ref}
                    id={id}
                    onBlur={onBlur}
                    onChange={handleOnChange}
                    ListboxComponent={ListboxComponent}
                    PopperComponent={StyledPopper}
                    disableCloseOnSelect
                    getOptionLabel={(option: GroupedOptionType | string): string => {
                        if (typeof option === 'object') {
                            return `${option[optionlabelkeyname]}`;
                        }

                        return option;
                    }}
                    value={selectedOptions}
                    limitTags={limitTags}
                    filterOptions={filterOptions}
                    onInputChange={handleOnInputChange}
                    freeSolo={freeSolo}
                    renderInput={({ size: _fieldSize, ...params }) => {
                        const { InputProps: _InputProps, ...restParams } = params;
                        const { startAdornment, ...restInputProps } = _InputProps;
                        return (
                            <TextField
                                helperText={helperText}
                                error={error}
                                size={fieldSize}
                                {...restParams}
                                InputProps={{
                                    ...restInputProps,
                                    startAdornment: (
                                        <div
                                            style={{
                                                maxHeight: '140px',
                                                overflowY: 'auto'
                                            }}
                                        >
                                            {startAdornment}
                                        </div>
                                    )
                                }}
                                variant={variant}
                                color={color}
                                label={label}
                                placeholder={placeholder}
                            />
                        );
                    }}
                    renderOption={(props, option, state) =>
                        [{ ...props, color, optionlabelkeyname, firstOptionIndex: staticFilters.length, selectedOptions, selectedGroup, optionsWithType }, option, state] as React.ReactNode
                    }
                />
            </>
        );
    }
);

GroupedAutoComplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    fieldSize: 'small',
    helperText: '',
    error: false
};
/**
 * renderOption={(props, option) => (
                        <OptionsListItem {...props}>
                            {option.type === 'options' ? (
                                <Checkbox style={{ marginRight: 8 }} checked={isSelectedOption(option)} label={String(option[optionlabelkeyname])} />
                            ) : (
                                <Checkbox style={{ marginRight: 8 }} checked={isSelectedGroup(option)} label={getGroupOptionLabel(option)} checkedIcon={getCheckedIcon(option)} />
                            )}
                        </OptionsListItem>
                    )}
 * 
 */
