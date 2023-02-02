import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressBar from './index';

export default {
    title: 'Progress Bar',
    component: ProgressBar,
    argTypes: {}
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar progress={40} />;

export const Primary = Template.bind({});
