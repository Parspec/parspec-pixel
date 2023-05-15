import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BodyBig, BodyMedium, BodySmall, BodyXS, H6 } from '.';
import { Button } from '../Button';

export default {
    title: 'Typography/Limiting',
    component: BodyBig
} as ComponentMeta<typeof BodyBig>;

export const Limiting: ComponentStory<typeof BodyBig> = (args) => {
    const [text, setText] = React.useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, enim.');

    return (
        <>
            {' '}
            <H6>{`• Resize Window forcing text to overflow to 2nd line`}</H6>
            <H6 ml={2}>{`(ellipsis will be added with a tooltip showing complete text) =>`}</H6>
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
            <br />
            <BodySmall>{text}</BodySmall>
            <br />
            <Button
                onClick={() =>
                    setText(
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officiis, rem exercitationem minus deleniti in, inventore fugit cumque tenetur maiores facere accusamus expedita fuga omnis. Magni voluptatibus dolorem odit fuga maxime, dignissimos impedit consectetur! Expedita quam alias veniam, accusamus quisquam eaque explicabo labore enim sequi perferendis eos ex minus nesciunt.'
                    )
                }
            >
                Change Text
            </Button>
        </>
    );
};

Limiting.args = {
    children:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,',
    textTransform: 'capitalize'
};
