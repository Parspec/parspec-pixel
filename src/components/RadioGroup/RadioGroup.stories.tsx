import React, { useState } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from '../Radio/index';

import { RadioGroup } from './index';

import { ThemeProvider } from '../../theme/ThemeProvider';

export default {
    title: 'RadioGroup',
    component: RadioGroup,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = ({ children, ...rest }) => {
    const [selectedValue, setSelectedValue] = useState('male');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(() => event.target.value);
        alert(selectedValue);
    };
    return (
        <ThemeProvider>
            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
            <RadioGroup {...rest} onChange={handleOnChange} value={selectedValue}>
                {children && children}
            </RadioGroup>
        </ThemeProvider>
    );
};

export const radioGroup = Template.bind({});

radioGroup.args = {
    name: 'test-feature',
    row: true,
    children: (
        <>
            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
            <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
        </>
    )
};
