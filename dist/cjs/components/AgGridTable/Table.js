"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgGridTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ag_grid_react_1 = require("ag-grid-react");
const clipboard_1 = require("@ag-grid-enterprise/clipboard");
const charts_1 = require("@ag-grid-enterprise/charts");
const Box_1 = require("../Box");
require("./styles.css");
const CustomToolbarPanel_1 = require("./CustomToolbarPanel");
const modules = [clipboard_1.ClipboardModule, charts_1.GridChartsModule];
const toolBarPanelDefaultOptions = ['delete', 'search', 'clearFilters', 'hide', 'unhide', 'selectedItems', 'duplicate', 'add', 'createKit', 'move'];
exports.AgGridTable = (0, react_1.forwardRef)((props, ref) => {
    const { tableHeight, tableData, isTableLoading, getRowId, rowHeight, suppressRowClickSelection, enableRangeSelection, enableFillHandle, undoRedoCellEditing, enterNavigatesVerticallyAfterEdit, enterNavigatesVertically, rowDragManaged, rowSelection, suppressContextMenu, rowClassRules, getRowStyle, context, pinnedBottomRowData, columnDefs, defaultColDef, onCellValueChanged, onRowDragEnd, onSelectionChanged, tabToNextCell, processCellFromClipboard, loadingOverlayComponent, noRowsOverlayComponent, isTableHaveFooter = false, onGridReady, processCellForClipboard, quickFilterText, showToolbarPanel = false, isToolbarLoading = false, toolBarPanelOptions = toolBarPanelDefaultOptions, selectedRowCount = 0, disabledToolBarButton = false, onAdd, onDelete, onHideUnhide, onAddDuplicates, onMove, onCreateKit, onCloseBanner, onTextSearch, toolbarRightSection } = props;
    const gridRef = (0, react_1.useRef)(null);
    // Expose methods through the forwarded ref
    (0, react_1.useImperativeHandle)(ref, () => ({
        api: {
            showLoadingOverlay: () => {
                var _a, _b;
                (_b = (_a = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.showLoadingOverlay();
            },
            showNoRowsOverlay: () => {
                var _a, _b;
                (_b = (_a = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.showNoRowsOverlay();
            },
            hideOverlay: () => {
                var _a, _b;
                (_b = (_a = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.hideOverlay();
            }
        }
    }));
    (0, react_1.useEffect)(() => {
        var _a, _b, _c, _d;
        if (isTableLoading) {
            (_b = (_a = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.showLoadingOverlay();
        }
        else if (tableData && tableData.length === 0) {
            setTimeout(() => {
                var _a, _b;
                (_b = (_a = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.showNoRowsOverlay();
            }, 0);
        }
        else {
            (_d = (_c = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _c === void 0 ? void 0 : _c.api) === null || _d === void 0 ? void 0 : _d.hideOverlay();
        }
    }, [isTableLoading, tableData]);
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ zIndex: 1, width: '100%', position: 'relative' }, { children: [showToolbarPanel && ((0, jsx_runtime_1.jsx)(CustomToolbarPanel_1.CustomToolBarPanel, { toolBarPanelOptions: toolBarPanelOptions, selectedRowCount: selectedRowCount, disabledToolBarButton: disabledToolBarButton, onAdd: onAdd, onDelete: onDelete, onHideUnhide: onHideUnhide, onAddDuplicates: onAddDuplicates, onMove: onMove, onCreateKit: onCreateKit, onCloseBanner: onCloseBanner, onTextSearch: onTextSearch, isToolbarLoading: isToolbarLoading, toolbarRightSection: toolbarRightSection })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ sx: { height: tableHeight }, width: "100%", className: "ag-theme-alpine" }, { children: (0, jsx_runtime_1.jsx)(ag_grid_react_1.AgGridReact, { ref: gridRef, rowData: tableData, getRowId: getRowId, gridOptions: {
                        rowHeight,
                        suppressRowClickSelection,
                        enableRangeSelection,
                        enableFillHandle,
                        undoRedoCellEditing,
                        enterNavigatesVerticallyAfterEdit,
                        enterNavigatesVertically,
                        rowDragManaged,
                        rowSelection,
                        suppressContextMenu,
                        rowClassRules,
                        getRowStyle
                    }, context: context, pinnedBottomRowData: pinnedBottomRowData, columnDefs: columnDefs, modules: modules, defaultColDef: defaultColDef, onCellValueChanged: onCellValueChanged, onRowDragEnd: onRowDragEnd, onSelectionChanged: onSelectionChanged, tabToNextCell: tabToNextCell, processCellFromClipboard: processCellFromClipboard, loadingOverlayComponent: isTableLoading ? loadingOverlayComponent : null, noRowsOverlayComponent: noRowsOverlayComponent, noRowsOverlayComponentParams: {
                        isTableHaveFooter: isTableHaveFooter
                    }, onGridReady: onGridReady, processCellForClipboard: processCellForClipboard, quickFilterText: quickFilterText }) }))] })));
});
//# sourceMappingURL=Table.js.map