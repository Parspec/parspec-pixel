import { forwardRef, useMemo, useRef, useEffect, createContext, useContext } from 'react';

import { Autocomplete, AutocompleteProps, Box, Checkbox, FilterOptionsState, Popper, TextFieldProps, Typography, autocompleteClasses, styled } from '@mui/material';
import { CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon } from '@mui/icons-material';
import { CheckBox as CheckBoxIcon } from '@mui/icons-material';
import { VariableSizeList, ListChildComponentProps } from 'react-window';

import { TextField } from '../TextField';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export interface MultiSelectOptionType {
    label: string;
    [index: string]: string | number;
}

const LISTBOX_PADDING = 8;

function renderRow(props: ListChildComponentProps) {
    const { data, index, style } = props;
    const currentRowData = data[index];
    const { color, ...rowProp } = currentRowData[0];
    const option = currentRowData[1];
    const optionState = currentRowData[2];

    const inlineStyle = {
        ...style,
        top: (style.top as number) + LISTBOX_PADDING
    };

    return (
        <Typography component="li" {...rowProp} noWrap style={inlineStyle} fontSize="14px">
            <Checkbox color={rowProp.color} icon={icon} checkedIcon={checkedIcon} sx={{ marginRight: 2, paddingLeft: 0 }} checked={optionState.selected} />
            {option.label}
        </Typography>
    );
}

const OuterElementContext = createContext({});

const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
    const outerProps = useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: any) {
    const ref = useRef<VariableSizeList>(null);
    useEffect(() => {
        if (ref.current != null) {
            ref.current.resetAfterIndex(0, true);
        }
    }, [data]);
    return ref;
}

// Adapter for react-window
const ListboxComponent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>(function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData: React.ReactChild[] = [];
    (children as React.ReactChild[]).forEach((item: React.ReactChild & { children?: React.ReactChild[] }) => {
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

    return (
        <div ref={ref}>
            <OuterElementContext.Provider value={other}>
                <VariableSizeList
                    itemData={itemData}
                    height={getHeight() + 2 * LISTBOX_PADDING}
                    width="100%"
                    ref={gridRef}
                    outerElementType={OuterElementType}
                    innerElementType="ul"
                    itemSize={getChildSize}
                    overscanCount={5}
                    itemCount={itemCount}
                >
                    {renderRow}
                </VariableSizeList>
            </OuterElementContext.Provider>
        </div>
    );
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

function sortOptions(options: readonly MultiSelectOptionType[], values?: MultiSelectOptionType[]) {
    let selected = new Set();
    for (let value of values || []) {
        selected.add(value.label);
    }

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

interface MultiSelectProps extends Omit<AutocompleteProps<MultiSelectOptionType, true, boolean | undefined, false>, 'renderInput'> {
    helperText?: string;
    error?: boolean;
    variant?: TextFieldProps['variant'];
    color?: TextFieldProps['color'];
    label: string;
    placeholder?: TextFieldProps['placeholder'];
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
            open
            fullWidth
            value={value}
            options={sortedOptions}
            multiple
            size={size}
            ref={ref}
            filterOptions={filterOptions ? filterOptions : getDefaultFilterOption}
            getOptionLabel={(option: MultiSelectOptionType) => option.label}
            isOptionEqualToValue={(option: MultiSelectOptionType, value: MultiSelectOptionType) => option.label === value.label}
            ListboxComponent={ListboxComponent}
            PopperComponent={StyledPopper}
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
            renderOption={(props, option, state) => [{ ...props, color }, option, state] as React.ReactNode}
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
