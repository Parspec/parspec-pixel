import { forwardRef, useMemo, useRef, useEffect, createContext, useContext } from 'react';

import {
    Autocomplete,
    AutocompleteProps,
    Box,
    Checkbox,
    Chip,
    FilterOptionsState,
    Popper,
    TextFieldProps,
    Typography,
    autocompleteClasses,
    createFilterOptions,
    styled,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon } from '@mui/icons-material';
import { CheckBox as CheckBoxIcon } from '@mui/icons-material';
import { VariableSizeList, ListChildComponentProps } from 'react-window';

import { TextField } from '../TextField';
import { sortOptions } from '../GroupedAutoComplete/Virtualisation';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export interface CustomRowProps extends ListChildComponentProps {
    option: {
        label: string;
        value: string | number;
    };
}

export interface MultiSelectOptionType {
    [index: string]: string | number;
}

interface RenderRowProps extends ListChildComponentProps {
    customRow?: (props: CustomRowProps) => JSX.Element;
}

const LISTBOX_PADDING = 8;

function renderRow(props: RenderRowProps) {
    const { data, index, style, customRow } = props;
    const currentRowData = data[index];
    const { color, optionlabelkeyname, ...rowProp } = currentRowData[0];
    const option = currentRowData[1];
    const optionState = currentRowData[2];

    const inlineStyle = {
        ...style,
        top: (style.top as number) + LISTBOX_PADDING
    };

    return (
        <Typography component="li" {...rowProp} noWrap style={inlineStyle} fontSize="14px">
            <Checkbox size="small" sx={{ marginRight: 2 }} icon={icon} checked={optionState.selected} checkedIcon={checkedIcon} color={rowProp.color} />
            {customRow ? customRow({ ...props, option: { label: option[optionlabelkeyname], value: option.value } }) : option[optionlabelkeyname]}
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

interface ListboxComponentProps extends React.HTMLAttributes<HTMLElement> {
    customRow?: (props: CustomRowProps) => JSX.Element;
}

// Adapter for react-window
const ListboxComponent = forwardRef<HTMLDivElement, ListboxComponentProps>(function ListboxComponent(props, ref) {
    const { children, customRow, ...other } = props;
    const itemData: React.ReactChild[] = [];
    (children as React.ReactChild[]).forEach((item: React.ReactChild & { children?: React.ReactChild[] }) => {
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
                    {(newProps: ListChildComponentProps) => renderRow({ ...newProps, customRow })}
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

interface MultiSelectProps extends Omit<AutocompleteProps<MultiSelectOptionType, true, boolean | undefined, false>, 'renderInput'> {
    helperText?: string;
    error?: boolean;
    variant?: TextFieldProps['variant'];
    color?: TextFieldProps['color'];
    label: string;
    placeholder?: TextFieldProps['placeholder'];
    optionlabelkeyname?: string;
    customRow?: (props: CustomRowProps) => JSX.Element;
    shouldSortOptions?: boolean;
}

export const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>(function (
    { value, size, helperText, error, options, variant, color, placeholder, id, filterOptions, label, optionlabelkeyname = 'label', customRow, shouldSortOptions = true, ...restParams },
    ref
) {
    const sortedOptions = useMemo(() => sortOptions(options, optionlabelkeyname, value), [options, value]);

    function getDefaultFilterOption(options: MultiSelectOptionType[], state: FilterOptionsState<MultiSelectOptionType>): MultiSelectOptionType[] {
        return createFilterOptions<MultiSelectOptionType>()(options, state);
    }

    return (
        <Autocomplete
            {...restParams}
            fullWidth
            value={value}
            options={shouldSortOptions ? sortedOptions : options}
            multiple
            size={size}
            ref={ref}
            disableCloseOnSelect
            filterOptions={filterOptions ? filterOptions : getDefaultFilterOption}
            getOptionLabel={(option: MultiSelectOptionType) => option[optionlabelkeyname] as string}
            isOptionEqualToValue={(option: MultiSelectOptionType, value: MultiSelectOptionType) => option[optionlabelkeyname] === value[optionlabelkeyname]}
            ListboxComponent={(listboxProps) => <ListboxComponent {...listboxProps} customRow={customRow} />}
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
                            startAdornment: startAdornment ? (
                                <Box
                                    style={{
                                        maxHeight: size === 'medium' ? '114px' : '84px',
                                        overflowY: 'auto'
                                    }}
                                >
                                    {startAdornment}
                                </Box>
                            ) : (
                                startAdornment
                            )
                        }}
                        variant={variant}
                        color={color}
                        label={label}
                        placeholder={placeholder}
                    />
                );
            }}
            renderOption={(props, option, state) => [{ ...props, color, optionlabelkeyname }, option, state] as React.ReactNode}
            renderTags={(value, getTagProps, ownerState) => {
                const { focused, ChipProps, limitTags = -1 } = ownerState;
                const limit = 50;
                const valueGreaterThanLimit = value.length > limit;
                const optionsToShow = valueGreaterThanLimit ? value.slice(0, limit) : value;

                const tagsArray = optionsToShow.map((option, index) => <Chip label={`${option[optionlabelkeyname]}`} size={size} {...getTagProps({ index })} {...ChipProps} />);
                if (valueGreaterThanLimit && (limitTags === -1 || (limitTags > -1 && focused))) {
                    tagsArray.push(<span className={`MuiAutocomplete-tag MuiAutocomplete-tagSize${size?.toUpperCase()}`}>+{value.length - limit}</span>);
                }
                if (limitTags > -1 && !focused && valueGreaterThanLimit) {
                    tagsArray.push(...Array(value.length - tagsArray.length).fill(null));
                }
                return tagsArray;
            }}
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
