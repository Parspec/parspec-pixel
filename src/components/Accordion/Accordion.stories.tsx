import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from './';
import { BodyBig, BodySmall } from '../Typography/';
import { Switch } from '../Switch';

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
    const [state, setstate] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setstate(event.target.checked);
    };

    return (
        <>
            <Accordion {...args} summary={'title1'} />
            <Accordion {...args} summary={<Switch checked={state} label="title 2" onChange={handleChange} />} />
            <Accordion {...args} summary={<Switch label="title 3" />} />
        </>
    );
};

export const Basic = Template.bind({});

Basic.args = {
    details: (
        <>
            <BodyBig>
                Dolor duis quis laboris consequat minim officia do ad minim Lorem ut excepteur. Quis consectetur consequat occaecat pariatur culpa excepteur laborum labore exercitation esse
                reprehenderit sint. Non nulla fugiat ipsum sunt aliquip eu et. Culpa qui quis nulla reprehenderit ad tempor incididunt qui reprehenderit veniam. Duis fugiat aliquip ex minim ullamco
                excepteur eiusmod proident sunt anim labore irure quis. Labore pariatur consequat proident sit nulla amet sint quis officia fugiat sit exercitation id eu.
            </BodyBig>
            <Switch label={<BodySmall>settings 1</BodySmall>} />
            <Switch label={<BodySmall>settings 2</BodySmall>} />
        </>
    )
};
