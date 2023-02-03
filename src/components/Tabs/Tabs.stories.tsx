import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TrendingUpIcon } from '../Icons';
import { Box } from '../Box';
import { Button } from '../Button';
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
    const handleTabChange = (newValue: string) => {
        setSelectedTab(newValue);
    };
    return <Tabs {...args} selectedTab={selectedTab} handleTabChange={handleTabChange} />;
};

export const Basic = Template.bind({});
Basic.args = {
    selectedTab: 'buttonsTab',
    tabs: [
        {
            label: (
                <Box display={'flex'}>
                    One
                    <TrendingUpIcon />
                </Box>
            ),
            value: 'buttonsTab',
            content: (
                <Box display={'flex'} justifyContent={'space-between'} flexDirection={'column'} height="300px">
                    <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                        <Button>one</Button>
                        <Button>two</Button>
                    </Box>
                    <Box width={'100%'} display={'flex'} justifyContent={'center'}>
                        <Button>three</Button>
                    </Box>
                    <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                        <Button>four</Button>
                        <Button>five</Button>
                    </Box>
                </Box>
            )
        },
        {
            label: 'Two',
            value: 'two',
            content: 'Two'
        },
        {
            label: 'Three',
            value: 'three',
            content: 'Three'
        }
    ],
    handleTabChange: (newValue: string) => {}
};
