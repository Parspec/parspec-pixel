import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import { GridChartsModule } from '@ag-grid-enterprise/charts';
import { Box } from '../Box';
import './agGridStyles.css';
import { CustomToolBarPanel } from './CustomToolbarPanel';
const modules = [ClipboardModule, GridChartsModule];
export const AgGridTable = forwardRef((props, ref) => {
    const { tableHeight, tableData, isTableLoading, getRowId, rowHeight, suppressRowClickSelection, enableRangeSelection, enableFillHandle, undoRedoCellEditing, enterNavigatesVerticallyAfterEdit, enterNavigatesVertically, rowDragManaged, rowSelection, suppressContextMenu, rowClassRules, getRowStyle, context, pinnedBottomRowData, columnDefs, defaultColDef, onCellValueChanged, onRowDragEnd, onSelectionChanged, tabToNextCell, processCellFromClipboard, loadingOverlayComponent, noRowsOverlayComponent, isTableHaveFooter = false, onGridReady, processCellForClipboard, quickFilterText, showToolbarPanel = false, isToolbarLoading = false, toolBarPanelOptions = [], selectedRowCount = 0, disabledToolBarButton = false, onAdd, onDelete, onHideUnhide, onAddDuplicates, onMove, onCreateKit, onCloseBanner, onTextSearch, toolbarRightSection } = props;
    const gridRef = useRef(null);
    // Expose methods through the forwarded ref
    useImperativeHandle(ref, () => ({
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
    useEffect(() => {
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
    return (_jsxs(Box, Object.assign({ zIndex: 1, width: '100%', position: 'relative' }, { children: [showToolbarPanel && (_jsx(CustomToolBarPanel, { toolBarPanelOptions: toolBarPanelOptions, selectedRowCount: selectedRowCount, disabledToolBarButton: disabledToolBarButton, onAdd: onAdd, onDelete: onDelete, onHideUnhide: onHideUnhide, onAddDuplicates: onAddDuplicates, onMove: onMove, onCreateKit: onCreateKit, onCloseBanner: onCloseBanner, onTextSearch: onTextSearch, isToolbarLoading: isToolbarLoading, toolbarRightSection: toolbarRightSection })), _jsx(Box, Object.assign({ sx: { height: tableHeight }, width: "100%", className: "ag-theme-alpine" }, { children: _jsx(AgGridReact, { ref: gridRef, rowData: tableData, getRowId: getRowId, gridOptions: {
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
const defaultColDef = {
    flex: 1,
    sortable: false,
    menuTabs: [],
    resizable: true,
    suppressFillHandle: true,
    suppressMovable: true
};
AgGridTable.defaultProps = {
    defaultColDef: defaultColDef
};
//# sourceMappingURL=Table.js.map