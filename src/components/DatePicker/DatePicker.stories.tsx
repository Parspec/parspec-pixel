import React from 'react';
import dayjs from 'dayjs';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomDatePicker } from './';

export default {
    title: 'CustomDatePicker',
    component: CustomDatePicker
} as ComponentMeta<typeof CustomDatePicker>;

export const Basic: ComponentStory<typeof CustomDatePicker> = (args) => <CustomDatePicker {...args} />;

Basic.args = {
    onChange: (currentDate) => console.log(currentDate),
    defaultValue: dayjs('2022-04-17'),
    label: 'DatePicker'
};
