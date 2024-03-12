import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomDatePicker, dayjs } from './';

export default {
    title: 'CustomDatePicker',
    component: CustomDatePicker,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof CustomDatePicker>;

export const datePicker: ComponentStory<typeof CustomDatePicker> = (args) => <CustomDatePicker {...args} />;

datePicker.args = {
    defaultValue: dayjs(new Date()),
    label: 'DatePicker',
    size: 'small',
    color: 'secondary'
};
