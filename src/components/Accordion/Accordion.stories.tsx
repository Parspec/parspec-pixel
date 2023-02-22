import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from './';
import { BodyBig, BodyMedium } from '../Typography';

export default {
    title: 'Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Basic = Template.bind({});

Basic.args = {
    options: [
        {
            summary: <BodyBig>Accordion 1</BodyBig>,
            details: (
                <BodyMedium>
                    In culpa velit nulla dolore enim proident commodo. Ullamco aliqua anim duis laboris pariatur aute minim excepteur. Pariatur amet pariatur anim velit Lorem ipsum ipsum id. Ad esse
                    laborum enim pariatur culpa id occaecat ea eiusmod nulla ipsum in.
                </BodyMedium>
            ),
            labelId: 'panel1'
        },
        {
            summary: <BodyBig>Accordion 2</BodyBig>,
            details: (
                <BodyMedium>
                    Deserunt velit culpa aliqua velit magna laboris id ex in proident veniam nostrud pariatur. Consequat est et laboris incididunt incididunt Lorem do ullamco est magna. Dolor est
                    aliqua nulla quis sint nisi aliquip consectetur ullamco est excepteur nostrud reprehenderit minim. Eiusmod esse consectetur do duis minim qui eu quis. Excepteur reprehenderit
                    adipisicing pariatur ea ex.
                </BodyMedium>
            ),
            labelId: 'panel2'
        },
        {
            summary: <BodyBig>Accordion 3</BodyBig>,
            details: (
                <BodyMedium>
                    Elit velit officia voluptate adipisicing do id magna id veniam. Amet non consequat fugiat velit cupidatat mollit adipisicing do ut. Officia sunt dolore ex culpa mollit pariatur est
                    minim quis in nisi est.
                </BodyMedium>
            ),
            labelId: 'panel3'
        }
    ]
};
