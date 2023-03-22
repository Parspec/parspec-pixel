import React from 'react';
import dayjs from 'dayjs';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomInputDatePicker } from './';

export default {
    title: 'CustomInputDatePicker',
    component: CustomInputDatePicker,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof CustomInputDatePicker>;

export const CustomInput: ComponentStory<typeof CustomInputDatePicker> = (args) => <CustomInputDatePicker {...args} />;

CustomInput.args = {
    defaultValue: dayjs(new Date()),
    label: 'Custom Input Datepicker'
};
