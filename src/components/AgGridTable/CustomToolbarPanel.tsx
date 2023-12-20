import { useState } from 'react';

import { AddIcon, AddKitIcon, CloseIcon, DeleteOutlineIcon, MoveDownIcon, SearchIcon, VisibilityOffIcon, ControlPointDuplicateIcon } from '../Icons';
import { IconButton } from '../IconButton';
import { Box } from '../Box';
import { BodySmall } from '../Typography';
import { TextField } from '../TextField';
import { Tooltip } from '../Tooltip';

export type ToolBarT = 'delete' | 'search' | 'clearFilters' | 'hide' | 'unhide' | 'selectedItems' | 'duplicate' | 'add' | 'createKit' | 'move';

interface ICustomToolBarPanel {
    toolBarPanelOptions: ToolBarT[];
    onTextSearch?: (searchString: string) => void;
    onAdd?: () => void;
    onAddDuplicates?: () => void;
    onDelete?: () => void;
    onHideUnhide?: () => void;
    onCreateKit?: () => void;
    onMove?: () => void;
    onCloseBanner?: () => void;
    selectedRowCount: number;
    disabledToolBarButton: boolean;
    title?: string;
    isToolbarLoading?: boolean;
    toolbarRightSection?: React.ReactNode;
}
export const CustomToolBarPanel = (props: ICustomToolBarPanel) => {
    const {
        toolBarPanelOptions,
        onTextSearch,
        onAdd,
        onAddDuplicates,
        onDelete,
        onHideUnhide,
        onCreateKit,
        onMove,
        onCloseBanner,
        selectedRowCount,
        disabledToolBarButton,
        title,
        isToolbarLoading,
        toolbarRightSection
    } = props;

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
        if (onTextSearch) onTextSearch(event.target.value.toLowerCase());
    };

    return (
        <Box display={'flex'} justifyContent="space-between" alignItems={'flex-end'} mb={2} sx={isToolbarLoading ? { PointerEvent: 'none' } : {}}>
            <Box width={'100%'} height={'100%'} display="flex" alignItems="center" gap={1}>
                {title && <BodySmall color="neutral.dark">{title}</BodySmall>}

                {/* For filtering of table */}
                {toolBarPanelOptions?.includes('search') && (
                    <Box width={300}>
                        <TextField label="" placeholder="Search..." startIcon={<SearchIcon fontSize="small" />} size="small" value={searchText} onChange={handleSearchChange} />
                    </Box>
                )}

                {/* For addition of row */}
                {toolBarPanelOptions?.includes('add') && (
                    <Tooltip title={'Add'}>
                        <Box>
                            <IconButton
                                onClick={() => {
                                    if (onAdd) onAdd();
                                }}
                            >
                                <AddIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                    </Tooltip>
                )}

                {/* For creating kit */}
                {toolBarPanelOptions?.includes('createKit') && (
                    <Tooltip title={'Create Kit'}>
                        <Box data-testid="create-kit-btn">
                            <IconButton onClick={() => onCreateKit!()}>
                                <AddKitIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                    </Tooltip>
                )}

                {/* For duplicating selected row */}
                {toolBarPanelOptions?.includes('duplicate') && (
                    <Tooltip title={disabledToolBarButton ? 'Select Item(s) First' : 'Duplicate'}>
                        <Box>
                            <IconButton
                                onClick={() => {
                                    if (onAddDuplicates) onAddDuplicates();
                                }}
                                disabled={disabledToolBarButton}
                            >
                                <ControlPointDuplicateIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                    </Tooltip>
                )}

                {/* For changing the section */}
                {toolBarPanelOptions?.includes('move') && (
                    <Tooltip title={disabledToolBarButton ? 'Select Item(s) First' : 'Change Section'}>
                        <Box data-testid="move-btn">
                            <IconButton onClick={() => onMove!()} disabled={disabledToolBarButton}>
                                <MoveDownIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                    </Tooltip>
                )}

                {/* For hiding and unhiding rows */}
                {toolBarPanelOptions?.includes('hide') && (
                    <Tooltip title={disabledToolBarButton ? 'Select Item(s) First' : 'Hide / Unhide'}>
                        <Box>
                            <IconButton
                                onClick={() => {
                                    if (onHideUnhide) onHideUnhide();
                                }}
                                disabled={disabledToolBarButton}
                            >
                                <VisibilityOffIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                    </Tooltip>
                )}

                {/* For deleting row */}
                {toolBarPanelOptions?.includes('delete') && (
                    <Tooltip title={disabledToolBarButton ? 'Select Item(s) First' : 'Delete'}>
                        <Box>
                            <IconButton
                                disabled={disabledToolBarButton}
                                onClick={() => {
                                    if (onDelete) onDelete();
                                }}
                            >
                                <DeleteOutlineIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                    </Tooltip>
                )}

                {/* For showing banner of, number of rows selected */}
                {toolBarPanelOptions?.includes('selectedItems') && selectedRowCount > 0 && <SelectedItemsCount count={selectedRowCount} closeBanner={onCloseBanner!} />}
            </Box>
            <Box>{toolbarRightSection}</Box>
        </Box>
    );
};

export default CustomToolBarPanel;

interface SelectedItemsCountProps {
    count: number;
    closeBanner: () => void;
}
const SelectedItemsCount = (props: SelectedItemsCountProps) => {
    const { count, closeBanner } = props;
    return (
        <Box p={1} pl={3} pr={2} bgcolor={'primary.main'} color={'secondary.contrastText'} display="flex" alignItems="center" gap={2}>
            <BodySmall color="secondary.contrastText" limit={false}>
                {count} item(s) selected
            </BodySmall>
            <IconButton onClick={closeBanner} sx={{ color: 'secondary.contrastText', margin: 0, padding: 0 }}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </Box>
    );
};
