import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Status } from './';
import { BodyMedium } from '../Typography';

export default {
    title: 'Status',
    component: Status
} as ComponentMeta<typeof Status>;

interface StageType {
    status: string;
    color: string;
}
interface StatusStoryProps {
    stages: StageType[];
}

export const Basic = ({ stages }) => {
    return stages.map((item) => (
        <>
            <Status color={item.color}>
                <BodyMedium color="inherit">{item.status}</BodyMedium>
            </Status>
            <br />
        </>
    ));
};
Basic.args = {
    stages: [
        { status: 'Quoting Stage', color: 'tertiary' },
        { status: 'Submittal Stage', color: 'info' },
        { status: 'O&M Stage', color: 'primary' },
        { status: 'Complete', color: 'success' },
        { status: 'Closed Lost', color: 'error' }
    ]
};
