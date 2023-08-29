import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RangeSlider } from './RangeSlider';
import { Box } from '../Box';
import { BodySmall } from '../Typography';

export default {
    title: 'Range Slider',
    component: RangeSlider,
    argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof RangeSlider>;

export const Basic: ComponentStory<typeof RangeSlider> = (args) => {
    const [rangeValue, setRangeValue] = useState<[number, number]>([25, 30]);

    useEffect(() => {
        setRangeValue(() => [50, 60]);
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
    max: 150,
    headerTitle: 'Range Slider Example',
    showPlus: true
};

export const VariableWidth: ComponentStory<typeof RangeSlider> = (args) => {
    const [rangeValue, setRangeValue] = useState<[number, number]>([25, 300]);

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
        <Box width={'100%'} display={'flex'} alignItems={'center'}>
            <RangeSlider
                {...args}
                onChange={changeHandler}
                onRangeBlur={onBlurHandler}
                value={rangeValue}
                onSliderMouseUp={onSliderMouseUpHandler}
                onTextfieldBlur={onTextfieldBlurHandler}
                onTextfieldEnterKeyDown={onTextfieldEnterKeyDownHandler}
            />
            <Box width={'70%'} ml={2}>
                <BodySmall>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur eligendi, molestias a placeat, voluptates magni sunt dolorum iure quisquam, accusantium id? Nostrum,
                    necessitatibus molestiae distinctio tempore nisi in recusandae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio et magnam nulla iusto, tenetur temporibus esse est,
                    consequatur officia quibusdam perspiciatis ipsam ea expedita voluptatem sint recusandae illo dicta ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus
                    voluptas velit, illo dolorem voluptatum, provident hic odit non mollitia porro corrupti doloremque, quo sed reiciendis distinctio sapiente dolorum adipisci.
                </BodySmall>
            </Box>
        </Box>
    );
};

VariableWidth.args = {
    size: 'medium',
    min: 45,
    max: 1500,
    headerTitle: 'Range Slider Example',
    leftTextfieldWidth: 50,
    rightTextfieldWidth: 80,
    showPlus: true
};
