import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './index';
export default {
    title: 'Stepper',
    component: Header,
    parameters: {
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Stepperheader = Template.bind({});
Stepperheader.args = {
    stepLabels: [{
        id:1,
        step:'Step1',
        disable:false,
    },{
        id:2,
        step:'Step2',
        disable:false,
    },{
        id:3,
        step:'Step3',
        disable:false,
    },{
        id:4,
        step:'Step4',
        disable:true,
    }],
    project: {
        name: 'Header Title Here',
        description: 'Description'
    },
    active: 2
};
