import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from './';
import { Button } from '../Button';

export default {
    title: 'Tooltip',
    component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
    return <Tooltip {...args} />;
};

export const tooltip = Template.bind({});
tooltip.args = {
    title: 'Tooltip',
    children: <Button>Hover Over Me</Button>,
    placement: 'right'
};
