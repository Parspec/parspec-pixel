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
    MoreVertIcon,
    CheckCircleIcon,
    SwapHorizIcon,
    ChangeHistoryIcon,
    ViewArrayIcon,
    CancelIcon,
    FilterAltOffIcon,
    VisibilityIcon,
    VisibilityOffIcon,
    DeleteOutlineIcon,
    ControlPointDuplicateIcon,
    RedirectIcon,
    AnnotateIcon,
    SyncIcon,
    AnnotateColoredIcon,
    FileDownloadOutlinedIcon,
    SyncProblemIcon,
    ContentCopyIcon,
    TuneIcon,
    DeleteIcon,
    VisibilityOffOutlinedIcon,
    ClockIcon,
    InfoIcon
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
        { icon: EditIcon, name: 'EditIcon' },
        { icon: MoreVertIcon, name: 'MoreVertIcon' },
        { icon: CheckCircleIcon, name: 'CheckCircleIcon' },
        { icon: CancelIcon, name: 'CancelIcon' },
        { icon: SwapHorizIcon, name: 'SwapHorizIcon' },
        { icon: ChangeHistoryIcon, name: 'ChangeHistoryIcon' },
        { icon: ViewArrayIcon, name: 'ViewArrayIcon ' },
        { icon: ControlPointDuplicateIcon, name: 'ControlPointDuplicateIcon ' },
        { icon: DeleteOutlineIcon, name: 'DeleteOutlineIcon ' },
        { icon: VisibilityOffIcon, name: 'VisibilityOffIcon ' },
        { icon: VisibilityIcon, name: 'VisibilityIcon ' },
        { icon: FilterAltOffIcon, name: 'FilterAltOffIcon ' },
        { icon: SyncIcon, name: 'SyncIcon ' },
        { icon: RedirectIcon, name: 'RedirectIcon' },
        { icon: AnnotateIcon, name: 'AnnotateIcon' },
        { icon: AnnotateColoredIcon, name: 'AnnotateColoredIcon' },
        { icon: FileDownloadOutlinedIcon, name: 'FileDownloadOutlinedIcon' },
        { icon: SyncProblemIcon, name: 'SyncProblemIcon' },
        { icon: ContentCopyIcon, name: 'ContentCopyIcon' },
        { icon: TuneIcon, name: 'TuneIcon' },
        { icon: SyncIcon, name: 'SyncIcon' },
        { icon: DeleteIcon, name: 'DeleteIcon' },
        { icon: VisibilityOffOutlinedIcon, name: 'VisibilityOffOutlinedIcon' },
        { icon: ClockIcon, name: 'ClockIcon' },
        { icon: InfoIcon, name: 'InfoIcon' }
    ],
    fontSize: 'medium'
};

export const ParspecLogo = Template.bind({});
ParspecLogo.args = {
    icons: ParspecLogoIcon,
    fontSize: 'large'
};
