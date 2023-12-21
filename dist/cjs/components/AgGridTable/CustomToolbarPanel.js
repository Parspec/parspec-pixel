"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomToolBarPanel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Icons_1 = require("../Icons");
const IconButton_1 = require("../IconButton");
const Box_1 = require("../Box");
const Typography_1 = require("../Typography");
const TextField_1 = require("../TextField");
const Tooltip_1 = require("../Tooltip");
const CustomToolBarPanel = (props) => {
    const { toolBarPanelOptions, onTextSearch, onAdd, onAddDuplicates, onDelete, onHideUnhide, onCreateKit, onMove, onCloseBanner, selectedRowCount, disabledToolBarButton, title, isToolbarLoading, toolbarRightSection } = props;
    const [searchText, setSearchText] = (0, react_1.useState)('');
    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        if (onTextSearch)
            onTextSearch(event.target.value.toLowerCase());
    };
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex', justifyContent: "space-between", alignItems: 'flex-end', mb: 2, sx: isToolbarLoading ? { PointerEvent: 'none' } : {} }, { children: [(0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ width: '100%', height: '100%', display: "flex", alignItems: "center", gap: 1 }, { children: [title && (0, jsx_runtime_1.jsx)(Typography_1.BodySmall, Object.assign({ color: "neutral.dark" }, { children: title })), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('search')) && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: 300 }, { children: (0, jsx_runtime_1.jsx)(TextField_1.TextField, { label: "", placeholder: "Search...", startIcon: (0, jsx_runtime_1.jsx)(Icons_1.SearchIcon, { fontSize: "small" }), size: "small", value: searchText, onChange: handleSearchChange }) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('add')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: 'Add' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => {
                                    if (onAdd)
                                        onAdd();
                                } }, { children: (0, jsx_runtime_1.jsx)(Icons_1.AddIcon, { fontSize: "medium" }) })) }) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('createKit')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: 'Create Kit' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ "data-testid": "create-kit-btn" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onCreateKit() }, { children: (0, jsx_runtime_1.jsx)(Icons_1.AddKitIcon, { fontSize: "medium" }) })) })) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('duplicate')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabledToolBarButton ? 'Select Item(s) First' : 'Duplicate' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => {
                                    if (onAddDuplicates)
                                        onAddDuplicates();
                                }, disabled: disabledToolBarButton }, { children: (0, jsx_runtime_1.jsx)(Icons_1.ControlPointDuplicateIcon, { fontSize: "medium" }) })) }) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('move')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabledToolBarButton ? 'Select Item(s) First' : 'Change Section' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ "data-testid": "move-btn" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onMove(), disabled: disabledToolBarButton }, { children: (0, jsx_runtime_1.jsx)(Icons_1.MoveDownIcon, { fontSize: "medium" }) })) })) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('hide')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabledToolBarButton ? 'Select Item(s) First' : 'Hide / Unhide' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => {
                                    if (onHideUnhide)
                                        onHideUnhide();
                                }, disabled: disabledToolBarButton }, { children: (0, jsx_runtime_1.jsx)(Icons_1.VisibilityOffIcon, { fontSize: "medium" }) })) }) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('delete')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabledToolBarButton ? 'Select Item(s) First' : 'Delete' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ disabled: disabledToolBarButton, onClick: () => {
                                    if (onDelete)
                                        onDelete();
                                } }, { children: (0, jsx_runtime_1.jsx)(Icons_1.DeleteOutlineIcon, { fontSize: "medium" }) })) }) }))), (toolBarPanelOptions === null || toolBarPanelOptions === void 0 ? void 0 : toolBarPanelOptions.includes('selectedItems')) && selectedRowCount > 0 && (0, jsx_runtime_1.jsx)(SelectedItemsCount, { count: selectedRowCount, closeBanner: onCloseBanner })] })), (0, jsx_runtime_1.jsx)(Box_1.Box, { children: toolbarRightSection })] })));
};
exports.CustomToolBarPanel = CustomToolBarPanel;
exports.default = exports.CustomToolBarPanel;
const SelectedItemsCount = (props) => {
    const { count, closeBanner } = props;
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ p: 1, pl: 3, pr: 2, bgcolor: 'primary.main', color: 'secondary.contrastText', display: "flex", alignItems: "center", gap: 2 }, { children: [(0, jsx_runtime_1.jsxs)(Typography_1.BodySmall, Object.assign({ color: "secondary.contrastText", limit: false }, { children: [count, " item(s) selected"] })), (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: closeBanner, sx: { color: 'secondary.contrastText', margin: 0, padding: 0 } }, { children: (0, jsx_runtime_1.jsx)(Icons_1.CloseIcon, { fontSize: "small" }) }))] })));
};
//# sourceMappingURL=CustomToolbarPanel.js.map