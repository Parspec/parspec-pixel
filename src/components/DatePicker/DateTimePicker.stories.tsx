import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomDateTimePicker, dayjs } from './';

export default {
    title: 'CustomDatePicker',
    component: CustomDateTimePicker,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof CustomDateTimePicker>;

export const dateTimePicker: ComponentStory<typeof CustomDateTimePicker> = (args) => <CustomDateTimePicker {...args} />;

dateTimePicker.args = {
    defaultValue: dayjs(new Date()),
    label: 'DateTimePicker',
    size: 'small',
    color: 'primary'
};
