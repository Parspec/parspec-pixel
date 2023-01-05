import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AllIcons } from '.';

export default {
    title: 'Icons',
    component: AllIcons,
} as ComponentMeta<typeof AllIcons>;

const Template: ComponentStory<typeof AllIcons> = (args) => (
        <AllIcons {...args} />
);

export const AllSmall = Template.bind({});
AllSmall.args = { 
  fontSize: 'small'
};
export const AllMedium = Template.bind({});
AllMedium.args = { 
  fontSize: 'medium'
};
export const AllLarge = Template.bind({});
AllLarge.args = { 
  fontSize: 'large'
};

