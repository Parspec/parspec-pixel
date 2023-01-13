import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BodyXS } from './';

export default {
    title: 'Typography/BodyXS',
    component: BodyXS,
    argTypes: {
        fontWeight: { type: 'number' }
    }
} as ComponentMeta<typeof BodyXS>;

const Template: ComponentStory<typeof BodyXS> = (args) => <BodyXS {...args} />;

export const bodyXS = Template.bind({});
bodyXS.args = {
    children: 'Body Extra Small',
    textTransform: 'capitalize'
};
