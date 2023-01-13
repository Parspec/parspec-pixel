import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BodyBig } from './';

export default {
    title: 'Typography/BodyBig',
    component: BodyBig,
    argTypes: {
        fontWeight: { type: 'number' }
    }
} as ComponentMeta<typeof BodyBig>;

const Template: ComponentStory<typeof BodyBig> = (args) => <BodyBig {...args} />;

export const bodyBig = Template.bind({});
bodyBig.args = {
    children: 'Body Big',
    textTransform: 'capitalize'
};
