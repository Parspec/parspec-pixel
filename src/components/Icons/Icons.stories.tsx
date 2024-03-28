import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ParspecLogoIcon,
    TrendingUpIcon,
    SearchIcon,
    UnfoldMoreIcon,
    CloseIcon,
    CheckIcon,
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
    SyncIcon,
    FileDownloadOutlinedIcon,
    SyncProblemIcon,
    ContentCopyIcon,
    TuneIcon,
    DeleteIcon,
    VisibilityOffOutlinedIcon,
    ClockIcon,
    LanguageIcon,
    DatasheetSelectInfoIcon,
    InfoIcon,
    ShareIcon,
    NotificationsOffOutlinedIcon,
    TableHeaderMenuIcon,
    SignalCellular0BarIcon,
    SignalCellular1BarIcon,
    SignalCellular2BarIcon,
    SignalCellular3BarIcon,
    SignalCellular4BarIcon,
    OpenInNewIcon,
    WarningIcon,
    ErrorIcon,
    SadFaceIcon,
    TroubleshootIcon,
    NoProductFoundIcon,
    SettingsIcon,
    LogoutIcon,
    WarningOutlinedIcon,
    SortIcon,
    HistoryOutlinedIcon,
    InfoOutlinedIcon,
    ThumbDownOffAltIcon,
    MoveIcon,
    FileUploadIcon,
    MoveDownIcon,
    AddKitIcon,
    LinkIcon,
    AttachFileIcon,
    FormatBoldIcon,
    FormatItalicIcon,
    FormatListNumberedIcon,
    FormatListBulletedIcon,
    FormatUnderlinedIcon,
    KeyboardArrowDownIcon,
    FormatTextColorIcon,
    HighlightOutlinedIcon
} from './index';
import { Grid } from '../Grid';
import { BodySmall } from '../Typography';

export default {
    title: 'Icons',
    component: SearchIcon,
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'tertiary', 'neutral'],
            control: { type: 'select' }
        },
        fontSize: {
            options: ['xs', 'small', 'medium', 'large', 'xl', 'xxl'],
            control: { type: 'select' }
        }
    }
} as ComponentMeta<typeof SearchIcon>;

export const MUIImportedIcons = ({ icons, fontSize, color }) => {
    return (
        <Grid container>
            {icons.map((element) => {
                return (
                    <Grid item xs={4} sm={3} md={2} gap={5} mb={12}>
                        <>
                            <element.icon fontSize={fontSize} color={color} />
                            <BodySmall>{element.name}</BodySmall>
                        </>
                    </Grid>
                );
            })}
        </Grid>
    );
};
MUIImportedIcons.args = {
    icons: [
        { icon: TrendingUpIcon, name: 'TrendingUpIcon' },
        { icon: SearchIcon, name: 'SearchIcon' },
        { icon: UnfoldMoreIcon, name: 'UnfoldMoreIcon' },
        { icon: CloseIcon, name: 'CloseIcon' },
        { icon: CheckIcon, name: 'CheckIcon' },
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
        { icon: FileDownloadOutlinedIcon, name: 'FileDownloadOutlinedIcon' },
        { icon: SyncProblemIcon, name: 'SyncProblemIcon' },
        { icon: ContentCopyIcon, name: 'ContentCopyIcon' },
        { icon: TuneIcon, name: 'TuneIcon' },
        { icon: SyncIcon, name: 'SyncIcon' },
        { icon: DeleteIcon, name: 'DeleteIcon' },
        { icon: VisibilityOffOutlinedIcon, name: 'VisibilityOffOutlinedIcon' },
        { icon: LanguageIcon, name: 'LanguageIcon' },
        { icon: InfoIcon, name: 'InfoIcon' },
        { icon: ShareIcon, name: 'ShareIcon' },
        { icon: NotificationsOffOutlinedIcon, name: 'NotificationsOffOutlinedIcon' },
        { icon: SignalCellular0BarIcon, name: 'SignalCellular0BarIcon' },
        { icon: SignalCellular1BarIcon, name: 'SignalCellular1BarIcon' },
        { icon: SignalCellular2BarIcon, name: 'SignalCellular2BarIcon' },
        { icon: SignalCellular3BarIcon, name: 'SignalCellular3BarIcon' },
        { icon: SignalCellular4BarIcon, name: 'SignalCellular4BarIcon' },
        { icon: OpenInNewIcon, name: 'OpenInNewIcon' },
        { icon: WarningIcon, name: 'WarningIcon' },
        { icon: ErrorIcon, name: 'ErroIcon' },
        { icon: SadFaceIcon, name: 'SadFaceIcon' },
        { icon: TroubleshootIcon, name: 'TroubleshootIcon' },
        { icon: NoProductFoundIcon, name: 'NoProductFoundIcon' },
        { icon: WarningOutlinedIcon, name: 'WarningOutlinedIcon' },
        { icon: SettingsIcon, name: 'SettingsIcon' },
        { icon: LogoutIcon, name: 'LogoutIcon' },
        { icon: SortIcon, name: 'SortIcon' },
        { icon: HistoryOutlinedIcon, name: 'HistoryOutlinedIcon' },
        { icon: InfoOutlinedIcon, name: 'InfoOutlinedIcon' },
        { icon: ThumbDownOffAltIcon, name: 'ThumbDownOffAltIcon' },
        { icon: MoveIcon, name: 'MoveIcon' },
        { icon: FileUploadIcon, name: 'FileUploadIcon' },
        { icon: MoveDownIcon, name: 'MoveDownIcon' },
        { icon: LinkIcon, name: 'LinkIcon' },
        { icon: AttachFileIcon, name: 'AttachFileIcon' },
        { icon: FormatBoldIcon, name: 'FormatBoldIcon' },
        { icon: FormatItalicIcon, name: 'FormatItalicIcon' },
        {
            icon: FormatListBulletedIcon,
            name: 'FormatListBulletedIcon'
        },
        {
            icon: FormatListNumberedIcon,
            name: 'FormatListNumberedIcon'
        },
        {
            icon: FormatUnderlinedIcon,
            name: 'FormatUnderlinedIcon'
        },
        { icon: KeyboardArrowDownIcon, name: 'KeyboardArrowDownIcon' },
        { icon: FormatTextColorIcon, name: 'FormatTextColorIcon' },
        { icon: HighlightOutlinedIcon, name: 'HighlightOutlinedIcon' }
    ],
    fontSize: 'medium',
    color: 'tertiary'
};

export const SvgIcons = ({ icons, fontSize, color, fill, stroke }) => {
    return (
        <Grid container>
            {icons.map((element) => {
                return (
                    <Grid item xs={4} sm={3} md={2} gap={5} mb={12}>
                        <>
                            <element.icon fontSize={fontSize} color={color} fill={fill} stroke={stroke} />
                            <BodySmall>{element.name}</BodySmall>
                        </>
                    </Grid>
                );
            })}
        </Grid>
    );
};
SvgIcons.args = {
    icons: [
        { icon: ParspecLogoIcon, name: 'ParspecLogoIcon' },
        { icon: ClockIcon, name: 'ClockIcon' },
        { icon: DatasheetSelectInfoIcon, name: 'DatasheetSelectInfoIcon' },
        { icon: TableHeaderMenuIcon, name: 'TableHeaderMenuIcon' },
        { icon: AddKitIcon, name: 'AddKitIcon' }
    ],
    fontSize: 'xxl',
    color: 'tertiary'
};
