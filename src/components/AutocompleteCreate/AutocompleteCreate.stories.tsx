import React, { useState } from 'react';
import { topFilms as top100Films } from '../AutoComplete/topfilm';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AutocompleteCreate, createFilterOptions } from './index';

export default {
    title: 'AutocompleteCreate',
    component: AutocompleteCreate,
    argTypes: {
        onChange: { action: 'onChange' },
        onClose: { action: 'onClose' },
        onHighlightChange: { action: 'onHighlightChange' },
        onInputChange: { action: 'onInputChange' }
    }
} as ComponentMeta<typeof AutocompleteCreate>;

interface FilmOptionType {
    inputValue?: string;
    title: string;
}

const filter = createFilterOptions<FilmOptionType>();

const Template: ComponentStory<typeof AutocompleteCreate> = (args) => {
    const [value, setValue] = useState<FilmOptionType | null>(null);

    const onChangeEventHandler = (event, newValue) => {
        if (typeof newValue === 'string') {
            setValue({
                title: newValue
            });
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
                title: newValue.inputValue
            });
        } else {
            setValue(newValue);
        }
    };

    const filterOptionHandler = (options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
            filtered.push({
                inputValue,
                title: `${inputValue} (New Project)`
            });
        }

        return filtered;
    };

    return <AutocompleteCreate value={value} {...args} onChange={onChangeEventHandler} filterOptions={filterOptionHandler} />;
};

export const autoCompleteCreate = Template.bind({});

autoCompleteCreate.args = {
    options: top100Films.map((item) => {
        return {
            title: item.title
        };
    }),
    id: 'autocomplete-create-demo',
    label: 'Movies',
    color: 'primary',
    variant: 'outlined',
    selectOnFocus: true,
    clearOnBlur: true,
    handleHomeEndKeys: true,
    getOptionLabel: (option: FilmOptionType) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
            return option;
        }

        // Add "xxx" option created dynamically
        if (option.inputValue) {
            return option.inputValue;
        }

        // regular option
        return option.title;
    },

    renderOption: (props: any, option: FilmOptionType) => <li {...props}>{option.title}</li>,
    freeSolo: true
};
