// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { Radio } from './';

// export default {
//     title: 'Radio',
//     component: Radio,
//     argTypes: { onChange: { action: 'onChange' } }
// } as ComponentMeta<typeof Radio>;

// export const Basic: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

// Basic.args = {
//     size: 'small'
// };

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
    // color: 'tertiary.main',
    size: 'small',
    defaultValue: 70,
    name: 'slider',
    onChange: (event) => console.log(event.target)
};
