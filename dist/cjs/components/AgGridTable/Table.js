"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgGridTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ag_grid_react_1 = require("ag-grid-react");
const clipboard_1 = require("@ag-grid-enterprise/clipboard");
const charts_1 = require("@ag-grid-enterprise/charts");
const Box_1 = require("../Box");
require("./agGridStyles.css");
const CustomToolbarPanel_1 = require("./CustomToolbarPanel");
const modules = [clipboard_1.ClipboardModule, charts_1.GridChartsModule];
exports.AgGridTable = (0, react_1.forwardRef)((props, ref) => {
    const { tableHeight, isTableLoading, showToolbarPanel = false, isToolbarLoading = false, toolBarPanelOptions = [], selectedRowCount = 0, disabledToolBarButton = false, onAdd, onDelete, onHideUnhide, onAddDuplicates, onMove, onCreateKit, onCloseBanner, onTextSearch, toolbarRightSection, rowData } = props, restTableProps = __rest(props, ["tableHeight", "isTableLoading", "showToolbarPanel", "isToolbarLoading", "toolBarPanelOptions", "selectedRowCount", "disabledToolBarButton", "onAdd", "onDelete", "onHideUnhide", "onAddDuplicates", "onMove", "onCreateKit", "onCloseBanner", "onTextSearch", "toolbarRightSection", "rowData"]);
    const gridRef = (0, react_1.useRef)(null);
    // Expose methods through the forwarded ref
    (0, react_1.useImperativeHandle)(ref, () => gridRef.current);
    (0, react_1.useEffect)(() => {
        var _a, _b, _c, _d;
        if (isTableLoading) {
            (_b = (_a = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.showLoadingOverlay();
        }
        else if (rowData && rowData.length === 0) {
            setTimeout(() => {
                var _a, _b;
                (_b = (_a = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.showNoRowsOverlay();
            }, 0);
        }
        else {
            (_d = (_c = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _c === void 0 ? void 0 : _c.api) === null || _d === void 0 ? void 0 : _d.hideOverlay();
        }
    }, [isTableLoading, rowData]);
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ zIndex: 1, width: '100%', position: 'relative' }, { children: [showToolbarPanel && ((0, jsx_runtime_1.jsx)(CustomToolbarPanel_1.CustomToolBarPanel, { toolBarPanelOptions: toolBarPanelOptions, selectedRowCount: selectedRowCount, disabledToolBarButton: disabledToolBarButton, onAdd: onAdd, onDelete: onDelete, onHideUnhide: onHideUnhide, onAddDuplicates: onAddDuplicates, onMove: onMove, onCreateKit: onCreateKit, onCloseBanner: onCloseBanner, onTextSearch: onTextSearch, isToolbarLoading: isToolbarLoading, toolbarRightSection: toolbarRightSection })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ sx: { height: tableHeight }, width: "100%", className: "ag-theme-alpine" }, { children: (0, jsx_runtime_1.jsx)(ag_grid_react_1.AgGridReact, Object.assign({ ref: gridRef, rowData: rowData }, restTableProps, { gridOptions: Object.assign(Object.assign({}, restTableProps.gridOptions), { rowClassRules: {
                            'row-hide': (params) => { var _a; return (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.is_hidden; }
                        }, getRowStyle: (params) => {
                            if (params.node.rowPinned) {
                                return { backgroundColor: '#f8f8f8', fontWeight: 700 };
                            }
                            return undefined;
                        } }), modules: modules })) }))] })));
});
const defaultColDef = {
    flex: 1,
    sortable: false,
    menuTabs: [],
    resizable: true,
    suppressFillHandle: true,
    suppressMovable: true
};
exports.AgGridTable.defaultProps = {
    defaultColDef: defaultColDef
};
//# sourceMappingURL=Table.js.map