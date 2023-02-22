import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PixelTable } from './PixelTable';

export default {
    title: 'PixelTable',
    component: PixelTable
} as ComponentMeta<typeof PixelTable>;

export const Table: ComponentStory<typeof PixelTable> = (args) => {
    return <PixelTable />;
};

Table.args = {};
