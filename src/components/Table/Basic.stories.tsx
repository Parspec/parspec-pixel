import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Basic } from './Basic';

export default {
    title: 'Table',
    component: Basic
} as ComponentMeta<typeof Basic>;

const Template: ComponentStory<typeof Basic> = (args) => {
    return <Basic />;
};

export const basic = Template.bind({});
basic.args = {};
