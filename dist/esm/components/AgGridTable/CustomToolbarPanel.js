import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AddIcon, AddKitIcon, CloseIcon, DeleteOutlineIcon, MoveDownIcon, SearchIcon, VisibilityOffIcon, ControlPointDuplicateIcon } from '../Icons';
import { IconButton } from '../IconButton';
import { Box } from '../Box';
import { BodySmall } from '../Typography';
import { TextField } from '../TextField';
import { Tooltip } from '../Tooltip';
export const CustomToolBarPanel = (props) => {
    const { toolBarPanelOptions, onTextSearch, onAdd, onAddDuplicates, onDelete, onHideUnhide, onCreateKit, onMove, onCloseBanner, selectedRowCount, disabledToolBarButton, title, isToolbarLoading, toolbarRightSection } = props;
    const [searchText, setSearchText] = useState('');
    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        if (onTextSearch)
            onTextSearch(event.target.value.toLowerCase());
    };
    return (_jsxs(Box, Object.assign({ display: 'flex', justifyContent: "space-between", alignItems: 'flex-end', mb: 2, sx: isToolbarLoading ? { PointerEvent: 'none' } : {} }, { children: [_jsxs(Box, Object.assign({ width: '100%', height: '100%', display: "flex", alignItems: "center", gap: 1 }, { children: [title && _jsx(BodySmall, Object.assign({ color: "neutral.dark" }, { children: title })), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('search')) && (_jsx(Box, Object.assign({ width: 300 }, { children: _jsx(TextField, { label: "", placeholder: "Search...", startIcon: _jsx(SearchIcon, { fontSize: "small" }), size: "small", value: searchText, onChange: handleSearchChange }) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('add')) && (_jsx(Tooltip, Object.assign({ title: 'Add' }, { children: _jsx(Box, { children: _jsx(IconButton, Object.assign({ onClick: () => {
                                    if (onAdd)
                                        onAdd();
                                } }, { children: _jsx(AddIcon, { fontSize: "medium" }) })) }) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('createKit')) && (_jsx(Tooltip, Object.assign({ title: 'Create Kit' }, { children: _jsx(Box, Object.assign({ "data-testid": "create-kit-btn" }, { children: _jsx(IconButton, Object.assign({ onClick: () => onCreateKit() }, { children: _jsx(AddKitIcon, { fontSize: "medium" }) })) })) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('duplicate')) && (_jsx(Tooltip, Object.assign({ title: disabledToolBarButton ? 'Select Item(s) First' : 'Duplicate' }, { children: _jsx(Box, { children: _jsx(IconButton, Object.assign({ onClick: () => {
                                    if (onAddDuplicates)
                                        onAddDuplicates();
                                }, disabled: disabledToolBarButton }, { children: _jsx(ControlPointDuplicateIcon, { fontSize: "medium" }) })) }) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('move')) && (_jsx(Tooltip, Object.assign({ title: disabledToolBarButton ? 'Select Item(s) First' : 'Change Section' }, { children: _jsx(Box, Object.assign({ "data-testid": "move-btn" }, { children: _jsx(IconButton, Object.assign({ onClick: () => onMove(), disabled: disabledToolBarButton }, { children: _jsx(MoveDownIcon, { fontSize: "medium" }) })) })) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('hide')) && (_jsx(Tooltip, Object.assign({ title: disabledToolBarButton ? 'Select Item(s) First' : 'Hide / Unhide' }, { children: _jsx(Box, { children: _jsx(IconButton, Object.assign({ onClick: () => {
                                    if (onHideUnhide)
                                        onHideUnhide();
                                }, disabled: disabledToolBarButton }, { children: _jsx(VisibilityOffIcon, { fontSize: "medium" }) })) }) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('delete')) && (_jsx(Tooltip, Object.assign({ title: disabledToolBarButton ? 'Select Item(s) First' : 'Delete' }, { children: _jsx(Box, { children: _jsx(IconButton, Object.assign({ disabled: disabledToolBarButton, onClick: () => {
                                    if (onDelete)
                                        onDelete();
                                } }, { children: _jsx(DeleteOutlineIcon, { fontSize: "medium" }) })) }) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('selectedItems')) && selectedRowCount > 0 && _jsx(SelectedItemsCount, { count: selectedRowCount, closeBanner: onCloseBanner })] })), _jsx(Box, { children: toolbarRightSection })] })));
};
export default CustomToolBarPanel;
const SelectedItemsCount = (props) => {
    const { count, closeBanner } = props;
    return (_jsxs(Box, Object.assign({ p: 1, pl: 3, pr: 2, bgcolor: 'primary.main', color: 'secondary.contrastText', display: "flex", alignItems: "center", gap: 2 }, { children: [_jsxs(BodySmall, Object.assign({ color: "secondary.contrastText", limit: false }, { children: [count, " item(s) selected"] })), _jsx(IconButton, Object.assign({ onClick: closeBanner, sx: { color: 'secondary.contrastText', margin: 0, padding: 0 } }, { children: _jsx(CloseIcon, { fontSize: "small" }) }))] })));
};
//# sourceMappingURL=CustomToolbarPanel.js.map