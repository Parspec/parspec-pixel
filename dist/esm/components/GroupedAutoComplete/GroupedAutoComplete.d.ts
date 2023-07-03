/// <reference types="react" />
import { AutocompleteProps } from '@mui/material/Autocomplete';
import { TextFieldProps } from '@mui/material';
export type GroupedOptionType = {
    [index: string]: string | number | number[];
};
export type GroupType = {
    [index: string]: number;
};
export interface GroupedAutoCompleteProps extends Omit<AutocompleteProps<GroupedOptionType, true, boolean | undefined, false>, 'renderInput'> {
    staticFilters: GroupedOptionType[];
    helperText?: string;
    error?: boolean;
    variant?: TextFieldProps['variant'];
    color?: TextFieldProps['color'];
    label: string;
    placeholder?: TextFieldProps['placeholder'];
    fieldSize?: 'small' | 'medium';
    optionlabelkeyname: string;
    onChange: (event: React.SyntheticEvent<Element, Event>) => void;
    filterOptionsCallBack?: (options: GroupedOptionType[], params: any) => GroupedOptionType[];
    onTextFieldChange?: (e: React.SyntheticEvent<Element, Event>, value: string) => void;
}
export declare const GroupedAutoComplete: import("react").ForwardRefExoticComponent<Omit<GroupedAutoCompleteProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
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
