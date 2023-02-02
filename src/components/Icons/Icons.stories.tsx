import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ParspecLogoIcon, TrendingUpIcon, SearchIcon, UnfoldMoreIcon, CloseIcon, DragIndicatorIcon, DeleteIcon, UploadIcon } from './index';
import { Grid } from '../Grid';
import { Box } from '../Box';

export default {
    title: 'Icons',
    component: SearchIcon
} as ComponentMeta<typeof SearchIcon>;

const Template: ComponentStory<any> = (args) => {
    return Array.isArray(args.icons) ? (
        <Grid container>
            {args.icons.map((element) => {
                return (
                    <Grid item xs={4} sm={3} md={2} gap={5}>
                        <>
                            <element.icon fontSize={args.fontSize} />
                            <Box>{element.name}</Box>
                        </>
                    </Grid>
                );
            })}
        </Grid>
    ) : (
        <args.icons fontSize={args.fontSize} />
    );
};

export const AllIcons = Template.bind({});
AllIcons.args = {
    icons: [
        { icon: ParspecLogoIcon, name: 'ParspecLogoIcon' },
        { icon: TrendingUpIcon, name: 'TrendingUpIcon' },
        { icon: SearchIcon, name: 'SearchIcon' },
        { icon: UnfoldMoreIcon, name: 'UnfoldMoreIcon' },
        { icon: CloseIcon, name: 'CloseIcon' },
        { icon: DragIndicatorIcon, name: 'DragIndicatorIcon' },
        { icon: DeleteIcon, name: 'DeleteIcon' },
        { icon: UploadIcon, name: 'UploadIcon' }
    ],
    fontSize: 'medium'
};

export const ParspecLogo = Template.bind({});
ParspecLogo.args = {
    icons: ParspecLogoIcon,
    fontSize: 'large'
};
