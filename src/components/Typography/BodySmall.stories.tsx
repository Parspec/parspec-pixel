import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BodySmall } from './';

export default {
    title: 'Typography/BodySmall',
    component: BodySmall,
    argTypes: {
        fontWeight: { type: 'number' }
    }
} as ComponentMeta<typeof BodySmall>;

const Template: ComponentStory<typeof BodySmall> = (args) => <BodySmall {...args} />;

export const bodySmall = Template.bind({});
bodySmall.args = {
    children: 'Body Small',
    textTransform: 'capitalize'
};
