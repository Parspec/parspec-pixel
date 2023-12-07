import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TrendingUpIcon } from '../Icons';
import { Box } from '../Box';
import { Tabs } from './';

export default {
    title: 'Tabs',
    component: Tabs,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
    const [selectedTab, setSelectedTab] = useState(args.selectedTab);
    const onChange = (newValue: string) => {
        setSelectedTab(newValue);
    };
    return <Tabs {...args} selectedTab={selectedTab} onChange={onChange} />;
};

export const Basic = Template.bind({});
Basic.args = {
    selectedTab: 'buttonsTab',
    options: [
        {
            label: (
                <Box display={'flex'}>
                    One
                    <TrendingUpIcon />
                </Box>
            ),
            value: 'buttonsTab'
        },
        {
            label: 'Two',
            value: 'two',
            disabled: true
        },
        {
            label: 'Three',
            value: 'three'
        }
    ],
    onChange: (newValue: string) => {}
};
