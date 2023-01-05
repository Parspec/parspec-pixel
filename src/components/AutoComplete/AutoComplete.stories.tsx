import React, { useState } from 'react';
import { topFilms as top100Films } from './topfilm';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Autocomplete } from './index';

export default {
    title: 'Autocomplete/Autocomplete',
    component: Autocomplete,
    argTypes: {
        onChange: { action: 'onChange' },
        onClose: { action: 'onClose' },
        onHighlightChange: { action: 'onHighlightChange' },
        onInputChange: { action: 'onInputChange' }
    }
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: any, newInputValue: React.SetStateAction<string>) => {
        setInputValue(newInputValue);
    };

    /**
     * 'value' state represents the value selected by the user, for instance when pressing Enter.
     *
     * 'inputValue' state represents the value displayed in the textbox.
     */

    return <Autocomplete {...args} inputValue={inputValue} onInputChange={handleInputChange} />;
};

const groupedOptions = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        ...option
    };
});

export const autoComplete = Template.bind({});

autoComplete.args = {
    options: top100Films.map((item) => item.title),
    id: 'autocomplete-demo',
    label: 'Movies',
    color: 'secondary',
    variant: 'outlined'
};

export const groupBy = Template.bind({});

groupBy.args = {
    options: groupedOptions.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter)),
    groupBy: (option: { firstLetter: string }) => option.firstLetter,
    getOptionLabel: (option: { title: string }) => option.title,
    id: 'grouped-demo',
    label: 'GroupBy',
    color: 'secondary',
    variant: 'outlined'
};

export const multiSelect = Template.bind({});

multiSelect.args = {
    id: 'multiselect-demo',
    label: 'MultiSelect',
    color: 'primary',
    variant: 'outlined',
    multiple: true,
    options: top100Films,
    getOptionLabel: (option: { title: string }) => option.title,
    defaultValue: [top100Films[0]]
};
