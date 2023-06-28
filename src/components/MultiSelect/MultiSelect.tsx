import { forwardRef, useMemo } from 'react';

import { Autocomplete, AutocompleteProps, Box, Checkbox, FilterOptionsState, TextFieldProps } from '@mui/material';
import { CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon } from '@mui/icons-material';
import { CheckBox as CheckBoxIcon } from '@mui/icons-material';

import { TextField } from '../TextField';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export interface MultiSelectOptionType {
    label: string;
    [index: string]: string | number;
}

interface MultiSelectProps extends Omit<AutocompleteProps<MultiSelectOptionType, true, boolean | undefined, false>, 'renderInput'> {
    helperText?: string;
    error?: boolean;
    variant?: TextFieldProps['variant'];
    color?: TextFieldProps['color'];
    label: string;
    placeholder?: TextFieldProps['placeholder'];
}

function sortOptions(options: readonly MultiSelectOptionType[], values?: MultiSelectOptionType[]) {
    let selected = new Set();
    for (let value of values || []) {
        selected.add(value.label);
    }
    console.log(selected);
    return [...options].sort((option1, option2) => {
        const isOption1Selected = selected.has(option1.label);
        const isOption2Selected = selected.has(option2.label);

        if (isOption1Selected && !isOption2Selected) {
            return -1;
        } else if (!isOption1Selected && isOption2Selected) {
            return 1;
        }

        const option1Label = option1.label.toLowerCase();
        const option2Label = option2.label.toLowerCase();
        if (option1Label < option2Label) {
            return -1;
        } else if (option1Label > option2Label) {
            return 1;
        }

        return 0;
    });
}

export const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>(function (
    { value, size, helperText, error, options, variant, color, label, placeholder, id, filterOptions, ...restParams },
    ref
) {
    const sortedOptions = useMemo(() => sortOptions(options, value), [options, value]);

    function getDefaultFilterOption(options: MultiSelectOptionType[], state: FilterOptionsState<MultiSelectOptionType>): MultiSelectOptionType[] {
        return options.filter((option) => option.label.toLowerCase().includes(state.inputValue.toLowerCase()));
    }

    return (
        <Autocomplete
            {...restParams}
            fullWidth
            value={value}
            options={sortedOptions}
            multiple
            size={size}
            ref={ref}
            filterOptions={filterOptions ? filterOptions : getDefaultFilterOption}
            getOptionLabel={(option: MultiSelectOptionType) => option.label}
            isOptionEqualToValue={(option: MultiSelectOptionType, value: MultiSelectOptionType) => option.label === value.label}
            renderInput={({ size: _fieldSize, ...params }) => {
                const { InputProps: _InputProps, ...restParams } = params;
                const { startAdornment, ...restInputProps } = _InputProps;
                return (
                    <TextField
                        helperText={helperText}
                        error={error}
                        size={size}
                        {...restParams}
                        InputProps={{
                            ...restInputProps,
                            startAdornment: (
                                <Box
                                    style={{
                                        maxHeight: size === 'medium' ? '114px' : '84px',
                                        overflowY: 'auto'
                                    }}
                                >
                                    {startAdornment}
                                </Box>
                            )
                        }}
                        variant={variant}
                        color={color}
                        label={label}
                        placeholder={placeholder}
                    />
                );
            }}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox color={color} icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 2 }} checked={selected} />
                    {option.label}
                </li>
            )}
        />
    );
});

MultiSelect.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    size: 'small',
    error: false
};
