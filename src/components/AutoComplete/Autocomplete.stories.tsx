import React, { useState } from 'react';
import { topFilms as top100Films } from './topfilm';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Autocomplete } from './';

export default {
    title: 'Autocomplete/Autocomplete',
    component: Autocomplete,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof Autocomplete>;

export const Basic: ComponentStory<typeof Autocomplete> = (args) => (
    <Autocomplete
        {...args}
        onChange={(value: any) => {
            console.log(value);
        }}
    />
);

Basic.args = {
    options: top100Films,
    id: 'autocomplete-demo',
    label: 'Movies',
    optionlabelkeyname: 'title',
    size: 'small',
    defaultValue: 'I am default'
};

export const MultiSelect: ComponentStory<typeof Autocomplete> = (args) => {
    const [selected, updateSelected] = useState<Array<any>>([]);
    return (
        <Autocomplete
            {...args}
            value={selected}
            onChange={(value: any) => {
                updateSelected([...(value as Array<any>)]);
            }}
        />
    );
};

MultiSelect.args = {
    id: 'multiselect-demo',
    label: 'MultiSelect',
    multiple: true,
    options: top100Films,
    optionlabelkeyname: 'title',
    size: 'medium'
};

export const AutocompleteWithCreateOption: ComponentStory<typeof Autocomplete> = (args) => (
    <Autocomplete
        {...args}
        onChange={(e: any) => {
            console.log(e);
        }}
        onBlur={(value: any) => console.log(`[on blur]`, value)}
    />
);

AutocompleteWithCreateOption.args = {
    options: top100Films,
    id: 'autocomplete-demo',
    label: 'Movies',
    optionlabelkeyname: 'title',
    freeSolo: true,
    value: { title: 'The Shawshank Redemption', year: 1994 }
};

export const MultiSelectWithChipLimit: ComponentStory<typeof Autocomplete> = (args) => (
    <Autocomplete
        {...args}
        onChange={(e: any) => {
            console.log(e);
        }}
    />
);

MultiSelectWithChipLimit.args = {
    id: 'multiselect-demo',
    label: 'MultiSelect',
    multiple: true,
    options: top100Films,
    optionlabelkeyname: 'title',
    defaultValue: ['Hello'],
    limitTags: 1
};
