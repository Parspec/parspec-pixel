import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import { Img } from './';

export default {
    title: 'Img',
    component: Img
};

export const Basic: ComponentStory<typeof Img> = (args) => {
    return <Img {...args} />;
};
Basic.args = {
    src: 'https://c4.wallpaperflare.com/wallpaper/805/955/805/serrin-angel-warrior-rebirth-league-of-angels-play-free-online-games-desktop-wallpaper-hd-1920-1080-wallpaper-preview.jpg',
    width: '220px',
    height: '219px'
};
