import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BodySmall } from '../Typography';

import { Info } from './index';

export default {
    title: 'Info',
    component: Info
} as ComponentMeta<typeof Info>;

export const Basic: ComponentStory<typeof Info> = (args) => (
    <Info>
        <BodySmall color="inherit">Information</BodySmall>
    </Info>
);
