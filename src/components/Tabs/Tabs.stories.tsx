import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './';
import { TrendingUpIcon } from '../Icons';
import { Box } from '../Box';
import { Button } from '../Button';

export default {
    title: 'Tabs',
    component: Tabs,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
    return <Tabs {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
    tabLabelList: [
        <Box display={'flex'}>
            One
            <TrendingUpIcon />
        </Box>,
        'Two',
        'Three'
    ],
    tabPannelList: [
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
        </Box>,
        'Two',
        'Three'
    ]
};
