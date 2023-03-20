import React from 'react';
import dayjs from 'dayjs';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomDatePicker } from './';

export default {
    title: 'CustomDatePicker',
    component: CustomDatePicker,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof CustomDatePicker>;

export const Basic: ComponentStory<typeof CustomDatePicker> = (args) => <CustomDatePicker {...args} />;

Basic.args = {
    defaultValue: dayjs('2022-04-17'),
    label: 'DatePicker'
};
