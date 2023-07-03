import { forwardRef, useState, useEffect } from 'react';

import { TextField } from '../TextField';
import { default as MUIAutocomplete, createFilterOptions } from '@mui/material/Autocomplete';
import { styled } from '@mui/system';
import { Checkbox } from '../Checkbox';
import { theme } from '../../theme';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export type OptionType = {
    [index: string]: string | number | number[];
};

export type GroupType = {
    [index: string]: number;
};

export interface GroupedAutoCompleteProps {
    id: string;
    label: string;
    placeholder?: string;
    optionlabelkeyname: string;
    options: OptionType[];
    staticFilters: OptionType[];
    color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
    variant?: 'outlined' | 'filled' | 'standard';
    onChange: (event: React.SyntheticEvent<Element, Event>) => void;
    freeSolo?: boolean;
    fieldSize?: 'small' | 'medium';
    multiple?: boolean;
    value?: string | OptionType | null;
    defaultValue?: string | OptionType | (string | OptionType)[] | null;
    onBlur?: (params: OptionType | string) => void;
    helperText?: string;
    error?: boolean;
    onTextFieldChange?: (e: React.SyntheticEvent<Element, Event>, value: string) => void;
    limitTags?: number;
}

const filter = createFilterOptions<OptionType>();

const GroupItems = styled('ul')({
    padding: 0,
    borderBottom: `1px solid ${theme.palette.neutral.main}`
});

const OptionsListItem = styled('li')({
    display: 'flex',
    alignItems: 'center'
});

export const GroupedAutoComplete: React.FC<GroupedAutoCompleteProps> = forwardRef<HTMLDivElement, GroupedAutoCompleteProps>(
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
            ...props
        },
        ref
    ) => {
        const [state, setState] = useState<OptionType | string>(value || '');
        const [selectedOptions, setSelectedOptions] = useState([]);
        const [selectedGroup, setSelectedGroup] = useState<GroupType[]>([]);

        let optionsWithType: OptionType[] = [];

        const handleOnChange = (event: any, newValue: any, reason: string) => {
            if (newValue.length && newValue[newValue.length - 1].type === 'filters') {
                const { title: filterName, value: filterValue } = newValue.find((value: OptionType) => value.type === 'filters');
                if (!selectedGroup.find((group) => group[filterName] > 0)) {
                    console.log(getFilteredOptions(filterValue));
                    newValue = [...newValue, ...getFilteredOptions(filterValue)];
                    newValue = newValue.filter((el: OptionType) => el.type !== 'filters');
                } else {
                    newValue = [...newValue.filter((value: OptionType) => Array.isArray(value.group) && !value.group.includes(filterValue) && value.type !== 'filters')];
                }
            } else if (newValue.length && newValue[newValue.length - 1].type === 'options' && reason === 'selectOption') {
                const lastEl = newValue[newValue.length - 1];
                const alreadySelected = Boolean(selectedOptions.find((option: OptionType) => option.title === lastEl.title));
                if (alreadySelected) {
                    newValue = newValue.filter((value: OptionType) => value.title !== lastEl.title);
                }
            }

            if (reason === 'clear') setSelectedGroup([]);
            setSelectedOptions(newValue);
            onChange({ ...event, target: { ...event.target, value: newValue } });
        };

        useEffect(() => {
            const groupCount: GroupType[] = [];
            staticFilters.map((filter) => {
                const eleInFilter = selectedOptions.filter((selectedOption: OptionType) => Array.isArray(selectedOption.group) && selectedOption.group.includes(Number(filter.value))).length;
                groupCount.push({ [String(filter.title)]: eleInFilter });
            });
            setSelectedGroup(groupCount);
        }, [selectedOptions]);

        const getFilteredOptions = (filterValue: number) => {
            return optionsWithType.filter((option: OptionType) => option.type !== 'filters' && Array.isArray(option.group) && option.group.includes(filterValue));
        };

        const getAutoCompleteOptions = () => {
            const groupedOptions = options.map((option) => {
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

            optionsWithType = [...groupedStaticFilterOptions, ...groupedOptions] as OptionType[];

            return optionsWithType;
        };

        useEffect(() => {
            if (value) {
                setState(value);
            }
        }, [value]);

        const filterOptions = (options: OptionType[], params: any) => {
            let filteredOptions = filter(options, params);
            if (typeof state === 'object') {
                filteredOptions = options.filter((option) => option.type !== 'filters' && option[optionlabelkeyname] === state[optionlabelkeyname]);
            }

            return filteredOptions;
        };

        const handleFocusOut = (event: any) => {
            let inputValue = event?.target?.value;

            if (inputValue) {
                for (let item of options) {
                    if (item[optionlabelkeyname] === inputValue) {
                        setState(item);
                        onBlur(item);
                        return;
                    }
                }
                setState(inputValue);
                onBlur(inputValue);
            }
        };

        const handleOnInputChange = (event: React.SyntheticEvent<Element, Event>, value: string) => {
            setState(value);
            if (onTextFieldChange) {
                onTextFieldChange(event, value);
            }
        };

        const isSelectedOption = (option: OptionType) => {
            return Boolean(selectedOptions.find((selectedOption: OptionType) => selectedOption.title === option.title));
        };

        const isSelectedGroup = (group: OptionType) => {
            return Boolean(selectedGroup.find((selectedGroup: GroupType) => selectedGroup[String(group.title)]));
        };

        const getCheckedIcon = (option: OptionType): React.ReactNode => {
            const actualOptionCount = optionsWithType.filter((optionObj: OptionType) => Array.isArray(optionObj.group) && optionObj.group.includes(Number(option.value))).length;
            const currentGroup = selectedGroup.filter((group: GroupType) => String(option.title) in group)[0];
            if (currentGroup[String(option.title)] === 0) return <CheckBoxOutlineBlankIcon />;
            else if (currentGroup[String(option.title)] < actualOptionCount) return <IndeterminateCheckBoxIcon />;
            return <CheckBoxIcon />;
        };

        return (
            <>
                <MUIAutocomplete
                    fullWidth
                    {...props}
                    options={getAutoCompleteOptions()}
                    ref={ref}
                    id={id}
                    onBlur={handleFocusOut}
                    onChange={handleOnChange}
                    disableCloseOnSelect
                    getOptionLabel={(option: OptionType | string): string => {
                        if (typeof option === 'object') {
                            return `${option[optionlabelkeyname]}`;
                        }

                        return option;
                    }}
                    groupBy={(option) => (typeof option.type === 'string' ? option.type : '')}
                    value={selectedOptions}
                    limitTags={limitTags}
                    filterOptions={filterOptions}
                    onInputChange={handleOnInputChange}
                    freeSolo={freeSolo}
                    renderInput={({ size, ...params }) => (
                        <TextField size={fieldSize} helperText={helperText} error={error} {...params} variant={variant} color={color} label={label} placeholder={placeholder} />
                    )}
                    renderOption={(props, option) => (
                        <OptionsListItem {...props}>
                            {option.type === 'options' ? (
                                <Checkbox style={{ marginRight: 8 }} checked={isSelectedOption(option)} label={String(option[optionlabelkeyname])} />
                            ) : (
                                <Checkbox style={{ marginRight: 8 }} checked={isSelectedGroup(option)} label={String(option[optionlabelkeyname])} checkedIcon={getCheckedIcon(option)} />
                            )}
                        </OptionsListItem>
                    )}
                    renderGroup={(params) => (
                        <li key={params.key}>
                            <GroupItems>{params.children}</GroupItems>
                        </li>
                    )}
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
    multiple: false,
    helperText: '',
    error: false
};
/**


        "manufacturer_id": 102155,
        "parspec_id": "1000 BULBS",
        "website": "https://www.1000bulbs.com/",
        "status": "Supported",
        "keywords": [
            "1000 BULBS",
            "1000BULBS"
        ]
        "manufacturer_name":"name/parspec_id",
        group:[1,2]
*/
