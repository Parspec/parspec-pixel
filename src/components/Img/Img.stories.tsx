import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import { Img } from './';

export default {
    title: 'Img',
    component: Img
};

export const Basic: ComponentStory<typeof Img> = (props) => {
    return <Img {...props} />;
};
Basic.args = {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzwy6VxbPiiGqzsNndB5HarWfGalTCWHEYD-uwKrukdC9eD5Z1YH5huQMzPQcHu6oLyp0&usqp=CAU'
};
