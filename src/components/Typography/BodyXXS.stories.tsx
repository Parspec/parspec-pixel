import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BodyXXS } from './';

export default {
    title: 'Typography/BodyXXS',
    component: BodyXXS,
    argTypes: {
        fontWeight: { type: 'number' }
    }
} as ComponentMeta<typeof BodyXXS>;

const Template: ComponentStory<typeof BodyXXS> = (args) => <BodyXXS {...args} />;

export const bodyXXS = Template.bind({});
bodyXXS.args = {
    children: 'Body Double-Extra Small',
    textTransform: 'capitalize'
};
