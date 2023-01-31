import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ParspecLogoIcon,
    TrendingUpIcon,
    SearchIcon,
    UnfoldMoreIcon,
    CloseIcon,
    DragIndicatorIcon,
    FirstPageIcon,
    KeyboardArrowLeftIcon,
    LastPageIcon,
    ArrowCircleLeftIcon,
    ArrowUpwardIcon,
    ArrowCircleRightIcon,
    ArrowDownwardIcon,
    CheckCircleOutlineIcon,
    PanToolIcon,
    AddIcon,
    RemoveIcon,
    EditIcon,
    KeyboardArrowRightIcon,
    CircularProgressIcon
} from './index';
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
                    <Grid item xs={4} sm={3} md={2} gap={5} mb={12}>
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
        { icon: CircularProgressIcon, name: 'CircularProgressIcon' },
        { icon: TrendingUpIcon, name: 'TrendingUpIcon' },
        { icon: SearchIcon, name: 'SearchIcon' },
        { icon: UnfoldMoreIcon, name: 'UnfoldMoreIcon' },
        { icon: CloseIcon, name: 'CloseIcon' },
        { icon: DragIndicatorIcon, name: 'DragIndicatorIcon' },
        { icon: KeyboardArrowLeftIcon, name: 'KeyboardArrowLeftIcon' },
        { icon: KeyboardArrowRightIcon, name: 'KeyboardArrowRightIcon' },
        { icon: FirstPageIcon, name: 'FirstPageIcon' },
        { icon: LastPageIcon, name: 'LastPageIcon' },
        { icon: ArrowCircleLeftIcon, name: 'ArrowCircleLeftIcon' },
        { icon: ArrowCircleRightIcon, name: 'ArrowCircleRightIcon' },
        { icon: ArrowUpwardIcon, name: 'ArrowUpwardIcon' },
        { icon: ArrowDownwardIcon, name: 'ArrowDownwardIcon' },
        { icon: CheckCircleOutlineIcon, name: 'CheckCircleOutlineIcon' },
        { icon: PanToolIcon, name: 'PanToolIcon' },
        { icon: AddIcon, name: 'AddIcon' },
        { icon: RemoveIcon, name: 'RemoveIcon' },
        { icon: EditIcon, name: 'EditIcon' }
    ],
    fontSize: 'medium'
};

export const ParspecLogo = Template.bind({});
ParspecLogo.args = {
    icons: ParspecLogoIcon,
    fontSize: 'large'
};
