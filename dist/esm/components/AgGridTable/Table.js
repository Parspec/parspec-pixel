var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import { GridChartsModule } from '@ag-grid-enterprise/charts';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import { Box } from '../Box';
import './agGridStyles.css';
import { CustomToolBarPanel } from './CustomToolbarPanel';
const modules = [ClipboardModule, GridChartsModule, ExcelExportModule];
export const AgGridTable = forwardRef((props, ref) => {
    const { tableHeight, isTableLoading, showToolbarPanel = false, isToolbarLoading = false, toolBarPanelOptions = [], selectedRowCount = 0, disabledToolBarButton = false, onAdd, onDelete, onHideUnhide, onAddDuplicates, onMove, onCreateKit, onCloseBanner, onTextSearch, toolbarRightSection, rowData } = props, restTableProps = __rest(props, ["tableHeight", "isTableLoading", "showToolbarPanel", "isToolbarLoading", "toolBarPanelOptions", "selectedRowCount", "disabledToolBarButton", "onAdd", "onDelete", "onHideUnhide", "onAddDuplicates", "onMove", "onCreateKit", "onCloseBanner", "onTextSearch", "toolbarRightSection", "rowData"]);
    const gridRef = useRef(null);
    const [isGridReady, setGridReady] = useState(false);
    // Expose methods through the forwarded ref
    useImperativeHandle(ref, () => gridRef.current);
    useEffect(() => {
        var _a, _b, _c, _d, _e, _f;
        if (!isGridReady) {
            return;
        }
        if (isTableLoading) {
            (_b = (_a = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.showLoadingOverlay();
        }
        else if (rowData && rowData.length === 0) {
            (_d = (_c = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _c === void 0 ? void 0 : _c.api) === null || _d === void 0 ? void 0 : _d.showNoRowsOverlay();
        }
        else {
            (_f = (_e = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _e === void 0 ? void 0 : _e.api) === null || _f === void 0 ? void 0 : _f.hideOverlay();
        }
    }, [isGridReady, isTableLoading, rowData]);
    return (_jsxs(Box, Object.assign({ zIndex: 1, width: '100%', position: 'relative', height: tableHeight ? undefined : '100%' }, { children: [showToolbarPanel && (_jsx(CustomToolBarPanel, { toolBarPanelOptions: toolBarPanelOptions, selectedRowCount: selectedRowCount, disabledToolBarButton: disabledToolBarButton, onAdd: onAdd, onDelete: onDelete, onHideUnhide: onHideUnhide, onAddDuplicates: onAddDuplicates, onMove: onMove, onCreateKit: onCreateKit, onCloseBanner: onCloseBanner, onTextSearch: onTextSearch, isToolbarLoading: isToolbarLoading, toolbarRightSection: toolbarRightSection })), _jsx(Box, Object.assign({ sx: { height: tableHeight || 'calc(100% - 45px)' }, width: "100%", className: "ag-theme-alpine" }, { children: _jsx(AgGridReact, Object.assign({ ref: gridRef, rowData: rowData }, restTableProps, { gridOptions: Object.assign(Object.assign({}, restTableProps.gridOptions), { rowClassRules: {
                            'row-hide': (params) => { var _a; return (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.is_hidden; }
                        }, getRowStyle: (params) => {
                            if (params.node.rowPinned) {
                                return { backgroundColor: '#f8f8f8', fontWeight: 700 };
                            }
                            return undefined;
                        } }), modules: modules, onGridReady: () => setGridReady(true) })) }))] })));
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