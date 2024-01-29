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
import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import { GridChartsModule } from '@ag-grid-enterprise/charts';
import { Box } from '../Box';
import './agGridStyles.css';
import { CustomToolBarPanel } from './CustomToolbarPanel';
const modules = [ClipboardModule, GridChartsModule];
export const AgGridTable = forwardRef((props, ref) => {
    const { tableHeight, tableData, isTableLoading, showToolbarPanel = false, isToolbarLoading = false, toolBarPanelOptions = [], selectedRowCount = 0, disabledToolBarButton = false, onAdd, onDelete, onHideUnhide, onAddDuplicates, onMove, onCreateKit, onCloseBanner, onTextSearch, toolbarRightSection } = props, restTableProps = __rest(props, ["tableHeight", "tableData", "isTableLoading", "showToolbarPanel", "isToolbarLoading", "toolBarPanelOptions", "selectedRowCount", "disabledToolBarButton", "onAdd", "onDelete", "onHideUnhide", "onAddDuplicates", "onMove", "onCreateKit", "onCloseBanner", "onTextSearch", "toolbarRightSection"]);
    const gridRef = useRef(null);
    // Expose methods through the forwarded ref
    useImperativeHandle(ref, () => gridRef.current);
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
    return (_jsxs(Box, Object.assign({ zIndex: 1, width: '100%', position: 'relative' }, { children: [showToolbarPanel && (_jsx(CustomToolBarPanel, { toolBarPanelOptions: toolBarPanelOptions, selectedRowCount: selectedRowCount, disabledToolBarButton: disabledToolBarButton, onAdd: onAdd, onDelete: onDelete, onHideUnhide: onHideUnhide, onAddDuplicates: onAddDuplicates, onMove: onMove, onCreateKit: onCreateKit, onCloseBanner: onCloseBanner, onTextSearch: onTextSearch, isToolbarLoading: isToolbarLoading, toolbarRightSection: toolbarRightSection })), _jsx(Box, Object.assign({ sx: { height: tableHeight }, width: "100%", className: "ag-theme-alpine" }, { children: _jsx(AgGridReact, Object.assign({ ref: gridRef, rowData: tableData }, restTableProps, { modules: modules })) }))] })));
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