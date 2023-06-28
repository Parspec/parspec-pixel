import React, { useState } from 'react';
import { topFilms as top100Films } from './topfilm';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MultiSelect, MultiSelectOptionType } from './';
import { Box } from '../Box';

export const Basic: ComponentStory<typeof MultiSelect> = (args) => {
    const [values, setValues] = useState<MultiSelectOptionType[]>([]);
    function handleOnChange(_event: React.SyntheticEvent<Element, Event>, value: MultiSelectOptionType[]) {
        setValues(value);
    }
    return (
        <Box width="50%">
            <MultiSelect value={values} onChange={handleOnChange} {...args} />
        </Box>
    );
};

Basic.args = {
    id: 'multiselect-demo',
    label: 'MultiSelect',
    options: top100Films,
    size: 'medium'
};

export default {
    component: MultiSelect,
    title: 'MultiSelect'
} as ComponentMeta<typeof MultiSelect>;
