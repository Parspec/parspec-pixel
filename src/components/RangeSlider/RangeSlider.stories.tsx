import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RangeSlider } from './RangeSlider';

export default {
    title: 'Range Slider',
    component: RangeSlider,
    argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof RangeSlider>;

export const Basic: ComponentStory<typeof RangeSlider> = (args) => {
    const [rangeValue, setRangeValue] = useState<[number, number]>([25, 30]);

    const changeHandler = (data: [number, number]) => {
        console.log(data);
        setRangeValue(() => data);
    };

    const onBlurHandler = (event: any) => {
        console.log(event);
    };
    return <RangeSlider {...args} onChange={changeHandler} onBlur={onBlurHandler} value={rangeValue} />;
};

Basic.args = {
    size: 'medium',
    min: 10,
    max: 50,
    headerTitle: 'Range Slider Example',
    textfieldWidth: 100
};
