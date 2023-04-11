import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BodyBig, BodyMedium, BodyXS, H6 } from '.';

export default {
    title: 'Typography/Limiting',
    component: BodyBig
} as ComponentMeta<typeof BodyBig>;

export const Limiting: ComponentStory<typeof BodyBig> = (args) => {
    return (
        <>
            {' '}
            <H6>{`• Resize Window forcing text to overflow to 2nd line`}</H6>
            <H6 ml={2}>{`(ellipsis will be added with a tooltip showing complete text) =>`}</H6>
            {/* <H6></H6> */}
            <br />
            <BodyMedium {...args}>{`
Lorem ipsum dolor sit amet, consectetur adipisicing elit.`}</BodyMedium>
            <br />
            <br />
            <H6>{`• Default props => limit=true, lines=1`}</H6>
            <br />
            <BodyBig {...args} />
            <br />
            <br />
            <H6>{`• props => lines=3`}</H6>
            <br />
            <BodyBig {...args} lines={3} />
            <br />
            <br />
            <H6>{`• props => limit=false`}</H6>
            <br />
            <BodyBig {...args} limit={false} />
        </>
    );
};

Limiting.args = {
    children:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,',
    textTransform: 'capitalize'
};
