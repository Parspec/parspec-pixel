import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ColorPicker, TransitionsColorPicker } from './index';

export default {
    title: 'ColorPicker',
    component: ColorPicker,
    argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof ColorPicker>;

export const Hex: ComponentStory<typeof ColorPicker> = ({ color, ...args }) => {
    const [colorState, setColorState] = useState(color);
    return <ColorPicker {...args} color={colorState} onChange={(color) => setColorState(color.hex)} />;
};

Hex.args = {
    color: '#37d67a'
};

export const Rgb: ComponentStory<typeof ColorPicker> = ({ color, ...args }) => {
    const [colorState, setColorState] = useState(color);

    return <ColorPicker {...args} color={colorState} onChange={(color) => setColorState(color.rgb)} />;
};

Rgb.args = {
    color: {
        r: 241,
        g: 112,
        b: 19,
        a: 1
    }
};

export const Transition: ComponentStory<typeof TransitionsColorPicker> = () => {
    const [colorState, setColorState] = useState('#37d67a');

    return <TransitionsColorPicker color={colorState} onChange={(color) => setColorState(color.hex)} />;
};

export const Transition2: ComponentStory<typeof TransitionsColorPicker> = () => {
    const [colorState, setColorState] = useState('#37d67a');

    return <TransitionsColorPicker color={colorState} onChange={(color) => setColorState(color.hex)} />;
};
