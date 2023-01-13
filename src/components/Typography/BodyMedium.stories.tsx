import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './';

export default {
    title: 'Typography/BodyMedium',
    component: BodyMedium,
    argTypes: {
        fontWeight: { type: 'number' }
    }
} as ComponentMeta<typeof BodyMedium>;

const Template: ComponentStory<typeof BodyMedium> = (args) => <BodyMedium {...args} />;

export const bodyMedium = Template.bind({});
bodyMedium.args = {
    children: 'Body Medium',
    textTransform: 'capitalize'
};
