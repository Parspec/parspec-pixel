import React, { useState } from 'react';
import { topFilms as top100Films } from './topfilm';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MultiSelect, MultiSelectOptionType } from './';

export const Basic: ComponentStory<typeof MultiSelect> = (args) => {
    const [values, setValues] = useState<MultiSelectOptionType[]>([]);
    function handleOnChange(_event: React.SyntheticEvent<Element, Event>, value: MultiSelectOptionType[]) {
        setValues(value);
    }
    return <MultiSelect value={values} onChange={handleOnChange} {...args} />;
};

Basic.args = {
    id: 'multiselect-demo',
    label: 'MultiSelect',
    options: top100Films
};

export default {
    component: MultiSelect,
    title: 'MultiSelect'
} as ComponentMeta<typeof MultiSelect>;
