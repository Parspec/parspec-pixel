import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Autocomplete } from './index';

export default {
    title: 'Autocomplete',
    component: Autocomplete,
    argTypes: {
        onChange: { action: 'onChange' },
        onClose: { action: 'onClose' },
        onHighlightChange: { action: 'onHighlightChange' },
        onInputChange: { action: 'onInputChange' }
    }
} as ComponentMeta<typeof Autocomplete>;

interface AutocompleteOption {
    label: string;
}

const Template: ComponentStory<typeof Autocomplete> = (args) => {
    const [value, setValue] = useState<AutocompleteOption | null>(null);
    const handleInputChange = (event: any, newValue: AutocompleteOption | null) => {
        setValue(newValue);
        console.log(value, newValue);
    };
    return <Autocomplete {...args} value={value} onInputChange={handleInputChange} />;
};

const top10Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 }
];

export const basic = Template.bind({});

basic.args = {
    options: top10Films.map((item) => item.label),
    id: 'basic-demo',
    disablePortal: true,
    label: 'Movies'
};

export const disableOnSelect = Template.bind({});

disableOnSelect.args = {
    options: ['awesome', 'i am awesome', 'i am the coolest'],
    id: 'disableonselect-demo',
    label: 'disableOnSelect',
    disableCloseOnSelect: true
};

export const clearOnEscape = Template.bind({});

clearOnEscape.args = {
    options: ['Twenty', 'Twenty one', 'Twenty one and half '],
    id: 'clearonescape-demo',
    label: 'clearOnEscape',
    clearOnEscape: true
};

export const disableListWrap = Template.bind({});

disableListWrap.args = {
    options: top10Films.map((item) => item.label),
    id: 'disablelistwrap-demo',
    label: 'disableListWrap',
    disableListWrap: true
};

export const selectOnFocus = Template.bind({});

selectOnFocus.args = {
    options: top10Films.map((item) => item.label),
    id: 'selectonfocus-demo',
    label: 'selectOnFocus',
    selectOnFocus: true
};
