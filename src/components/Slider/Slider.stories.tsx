import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Slider } from './';

export default {
    title: 'Slider',
    component: Slider,
    argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof Slider>;

export const Basic: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

Basic.args = {
    size: 'small',
    defaultValue: 50,
    name: 'slider',
    onChange: (event) => console.log(event.target)
};

export const RangeSlider: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

RangeSlider.args = {
    size: 'small',
    defaultValue: [10, 60],
    min: 0,
    max: 100,
    name: 'slider',
    onChange: (event) => console.log(event.target)
};

export const StepRangeSlider: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

StepRangeSlider.args = {
    size: 'small',
    defaultValue: [20, 60],
    name: 'slider',
    onChange: (event) => console.log(event.target),
    step: 10,
    marks: true,
    min: 0,
    max: 100
};
