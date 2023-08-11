import React, { useState } from 'react';
import { mockOptions } from './mockOptions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GroupedAutoComplete, GroupedOptionType } from './GroupedAutoComplete';

export default {
    title: 'GroupedAutoComplete/GroupedAutoComplete',
    component: GroupedAutoComplete,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof GroupedAutoComplete>;

export const MultiSelectWithGroups: ComponentStory<typeof GroupedAutoComplete> = (args) => {
    const [selectedOptions, setSelectedOptions] = useState<GroupedOptionType[]>([]);
    return (
        <GroupedAutoComplete
            {...args}
            selectedOptions={selectedOptions}
            onChange={(e: any, value) => {
                setSelectedOptions(value);
            }}
        />
    );
};

MultiSelectWithGroups.args = {
    id: 'multiselect-demo',
    label: 'MultiSelect',
    defaultValue: undefined,
    multiple: true,
    color: 'primary',
    options: JSON.parse(JSON.stringify(mockOptions)),
    optionlabelkeyname: 'label',
    limitTags: 10,
    staticFilters: [
        {
            label: 'group1',
            value: 1
        },
        {
            label: 'group2',
            value: 2
        },
        {
            label: 'group3',
            value: 3
        },
        {
            label: 'group4',
            value: 4
        }
    ]
};
