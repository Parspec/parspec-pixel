"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
const ej2_base_1 = require("@syncfusion/ej2-base");
require("./styles.css");
const Box_1 = require("../Box");
const react_1 = require("react");
const license = window.localStorage.getItem('syncfusionLicense');
(0, ej2_base_1.registerLicense)(license);
const Table = ({ children, data, childMappingKey, allowExports, allowRowDragAndDrop, frozenColumns, treeColumnIndex, allowPaging, pageSettings, allowResizing, allowEditing, toolBarOptions, excelExportProperties, pdfExportProperties, height, allowFiltering, filterSettings, onCheckboxChange, onDragEnd, onAdd, onEdit, onDelete }) => {
    const tableRef = (0, react_1.useRef)();
    const rowDrop = (args) => {
        const droppedData = tableRef.current.getRowInfo(args.target.parentElement).rowData;
        let droppedId, draggedId;
        if (droppedData.parentItem != null) {
            droppedId = droppedData.parentItem.taskID;
            draggedId = args.data[0].parentItem.taskID;
        }
        if (droppedId != draggedId) {
            args.cancel = true;
        }
        if (args.dropPosition == 'middleSegment' && droppedId == draggedId) {
            args.cancel = true;
            tableRef.current.reorderRows([args.fromIndex], args.dropIndex, 'below');
        }
        onDragEnd(tableRef.current.getDataModule().treeModule.hierarchyData);
    };
    const toolbarClick = (args) => {
        const selectedRecords = tableRef.current.getSelectedRecords();
        let exelExportPropertiesOnSelectedCheckboxes = {};
        let pdfExportPropertiesOnSelectedCheckboxes = {};
        if (selectedRecords.length !== 0) {
            exelExportPropertiesOnSelectedCheckboxes = Object.assign(Object.assign({}, excelExportProperties), { dataSource: selectedRecords });
            pdfExportPropertiesOnSelectedCheckboxes = Object.assign(Object.assign({}, pdfExportProperties), { dataSource: selectedRecords });
            if (args.item.text === 'Excel Export') {
                tableRef.current.excelExport(exelExportPropertiesOnSelectedCheckboxes);
            }
            else if (args.item.text === 'PDF Export') {
                tableRef.current.pdfExport(pdfExportPropertiesOnSelectedCheckboxes);
            }
        }
        else {
            if (args.item.text === 'Excel Export') {
                tableRef.current.excelExport(excelExportProperties);
            }
            else if (args.item.text === 'PDF Export') {
                tableRef.current.pdfExport(pdfExportProperties);
            }
        }
    };
    const checkboxChange = (args) => {
        onCheckboxChange(tableRef.current.getSelectedRecords());
    };
    const actionComplete = (args) => {
        if (args.type === 'save') {
            onEdit(args);
        }
        if (args.requestType === 'save') {
            onAdd(args);
        }
        if (args.requestType === 'delete') {
            onDelete(args);
        }
    };
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-pane" }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-section" }, { children: (0, jsx_runtime_1.jsxs)(ej2_react_treegrid_1.TreeGridComponent, Object.assign({ height: height, ref: tableRef, dataSource: data, treeColumnIndex: treeColumnIndex, childMapping: childMappingKey, allowPdfExport: allowExports, allowExcelExport: allowExports, allowRowDragAndDrop: allowRowDragAndDrop, allowResizing: allowResizing, selectionSettings: {
                    checkboxOnly: true,
                    persistSelection: true
                }, rowDrop: rowDrop, frozenColumns: frozenColumns, allowSorting: true, editSettings: allowEditing
                    ? {
                        allowAdding: true,
                        allowDeleting: true,
                        allowEditing: true,
                        mode: 'Cell',
                        showDeleteConfirmDialog: true,
                        showConfirmDialog: true
                    }
                    : {}, toolbar: toolBarOptions, toolbarClick: toolbarClick, pageSettings: pageSettings, allowPaging: allowPaging, allowFiltering: allowFiltering, filterSettings: filterSettings, checkboxChange: checkboxChange, actionComplete: actionComplete }, { children: [(0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.ColumnsDirective, { children: children }), (0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Freeze, ej2_react_treegrid_1.RowDD, ej2_react_treegrid_1.Selection, ej2_react_treegrid_1.Sort, ej2_react_treegrid_1.Edit, ej2_react_treegrid_1.Toolbar, ej2_react_treegrid_1.Page, ej2_react_treegrid_1.ExcelExport, ej2_react_treegrid_1.PdfExport, ej2_react_treegrid_1.Resize, ej2_react_treegrid_1.Filter] })] })) })) })));
};
exports.Table = Table;
exports.Table.defaultProps = {
    excelExportProperties: {
        fileName: 'newExcel.xlsx',
        isCollapsedStatePersist: false
    },
    pdfExportProperties: {
        fileName: 'newPdf.pdf',
        isCollapsedStatePersist: false
    },
    childMappingKey: '',
    allowExports: true,
    allowRowDragAndDrop: true,
    frozenColumns: 0,
    treeColumnIndex: -1,
    allowPaging: true,
    pageSettings: {
        pageSize: 10
    },
    allowResizing: true,
    allowEditing: true,
    toolBarOptions: ['ExcelExport', 'PdfExport', 'Delete'],
    allowFiltering: true,
    filterSettings: {
        type: 'Excel'
    },
    onCheckboxChange: (data) => { },
    onDragEnd: (data) => { },
    onAdd: (data) => { },
    onEdit: (data) => { },
    onDelete: (data) => { }
};
//# sourceMappingURL=Table.js.map