import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BodySmall } from '../Typography';

import { ContentInfoCard } from './index';

export default {
    title: 'ContentInfoCard',
    component: ContentInfoCard
} as ComponentMeta<typeof ContentInfoCard>;

export const Basic: ComponentStory<typeof ContentInfoCard> = (args) => (
    <ContentInfoCard>
        <BodySmall>Information</BodySmall>
    </ContentInfoCard>
);
