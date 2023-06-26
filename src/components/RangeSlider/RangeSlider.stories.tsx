import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RangeSlider } from './RangeSlider';

export default {
    title: 'Range Slider',
    component: RangeSlider,
    argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof RangeSlider>;

export const Basic: ComponentStory<typeof RangeSlider> = (args) => {
    const [rangeValue, setRangeValue] = useState<[number, number]>([25, 30]);

    useEffect(() => {
        setRangeValue(() => [90, 60]);
    }, []);

    const changeHandler = (data: [number, number]) => {
        setRangeValue(() => data);
    };

    const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>, data: [number, number]) => {
        console.log('blur event');
    };
    const onSliderMouseUpHandler = (event: React.MouseEvent<HTMLButtonElement>, data: [number, number]) => {
        console.log('mouseup', data);
    };
    const onTextfieldBlurHandler = (event: React.FocusEvent<HTMLInputElement>, data: [number, number]) => {
        console.log('textfield blur', data);
    };
    const onTextfieldEnterKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>, data: [number, number]) => {
        console.log('textfield keydown enter', data);
    };

    return (
        <RangeSlider
            {...args}
            onChange={changeHandler}
            onRangeBlur={onBlurHandler}
            value={rangeValue}
            onSliderMouseUp={onSliderMouseUpHandler}
            onTextfieldBlur={onTextfieldBlurHandler}
            onTextfieldEnterKeyDown={onTextfieldEnterKeyDownHandler}
        />
    );
};

Basic.args = {
    size: 'medium',
    min: 45,
    max: 350,
    headerTitle: 'Range Slider Example',
    textfieldWidth: 100
};
