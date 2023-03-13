"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
const ej2_base_1 = require("@syncfusion/ej2-base");
require("./styles.css");
const Box_1 = require("../Box");
const ej2_grids_1 = require("@syncfusion/ej2-grids");
const react_1 = require("react");
const license = window.localStorage.getItem('syncfusionLicense');
(0, ej2_base_1.registerLicense)(license);
const Table = ({ children, data, childMappingKey, allowExports, allowRowDragAndDrop, frozenColumns, treeColumnIndex, allowPaging, pageSettings, allowResizing, allowEditing, toolBarOptions, excelExportProperties, pdfExportProperties, height, allowFiltering, filterSettings, onCheckboxChange, onDragEnd, onAdd, onEdit, onDelete, onSearch, selectionSettings, onRowSelection }) => {
    const tableRef = (0, react_1.useRef)();
    const rowDrop = (args) => {
        const droppedData = tableRef.current.getRowInfo(args.target.parentElement).rowData; //dropped data
        let droppedId, draggedId;
        //here collect the taskid value based on parent records
        if (!(0, ej2_base_1.isNullOrUndefined)(droppedData)) {
            if (!(0, ej2_base_1.isNullOrUndefined)(droppedData.parentItem) && args.data[0].parentItem != null) {
                droppedId = droppedData.parentItem.taskID; //dropped data
                draggedId = args.data[0].parentItem.taskID; // dragged data
            }
            else if (droppedData.hasChildRecords == true) {
                droppedId = droppedData.taskID; //dropped data
                draggedId = args.data[0].taskID; // dragged data
            }
        }
        //Here we prevent for top / bottom position
        if (droppedId != draggedId && args.data[0].level != droppedData.level) {
            args.cancel = true;
        }
        else if (args.dropPosition == 'topSegment' || args.dropPosition == 'bottomSegment') {
            //here prevent the drop for within child parent
            if (args.data[0].level != droppedData.level) {
                args.cancel = true;
            }
            else if (args.data[0].level != 0 && droppedData.level != 0) {
                if (args.data[0].level == droppedData.level &&
                    ((0, ej2_base_1.isNullOrUndefined)(args.data[0].hasChildRecords) || (0, ej2_base_1.isNullOrUndefined)(droppedData.hasChildRecords) || args.data[0].hasChildRecords == true) &&
                    droppedId != draggedId) {
                    args.cancel = true; //here we prevent drop the record in top of another parent's child
                }
            }
        }
        //Here we prevent the drop for child position
        if (args.dropPosition == 'middleSegment') {
            if (!(0, ej2_base_1.isNullOrUndefined)(draggedId) && !(0, ej2_base_1.isNullOrUndefined)(droppedId)) {
                if (droppedId == draggedId || args.data[0].level == droppedData.level) {
                    args.cancel = true;
                }
            }
            else if (args.data[0].level == droppedData.level || (args.data[0].level != droppedData.level && (0, ej2_base_1.isNullOrUndefined)(draggedId) && (0, ej2_base_1.isNullOrUndefined)(droppedId))) {
                args.cancel = true;
            }
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
    const rowSelected = (args) => {
        onRowSelection(tableRef.current.getSelectedRecords());
    };
    const actionComplete = (args) => {
        if (args.type === 'save') {
            onEdit(args);
        }
        else if (args.requestType === 'save') {
            onAdd(args);
        }
        else if (args.requestType === 'delete') {
            onDelete(args);
        }
        else if (args.requestType === 'searching') {
            onSearch(args);
        }
    };
    const rowDataBound = (args) => {
        if ((0, ej2_grids_1.getObject)('hidden', args.data) === true) {
            args.row.style.opacity = '0.4';
        }
        if ((selectionSettings === null || selectionSettings === void 0 ? void 0 : selectionSettings.type) === 'Single') {
            (0, ej2_base_1.addClass)([args.row], 'singleSelect');
        }
    };
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-pane" }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-section" }, { children: data && ((0, jsx_runtime_1.jsxs)(ej2_react_treegrid_1.TreeGridComponent, Object.assign({ rowSelected: rowSelected, rowDataBound: rowDataBound, height: height, ref: tableRef, dataSource: data, treeColumnIndex: treeColumnIndex, childMapping: childMappingKey, allowPdfExport: allowExports, allowExcelExport: allowExports, allowRowDragAndDrop: allowRowDragAndDrop, allowResizing: allowResizing, selectionSettings: selectionSettings, rowDrop: rowDrop, frozenColumns: frozenColumns, allowSorting: true, editSettings: allowEditing
                    ? {
                        allowAdding: true,
                        allowDeleting: true,
                        allowEditing: true,
                        mode: 'Cell',
                        showDeleteConfirmDialog: true,
                        showConfirmDialog: true,
                        newRowPosition: 'Bottom'
                    }
                    : {}, searchSettings: {
                    hierarchyMode: 'Both'
                }, toolbar: toolBarOptions, toolbarClick: (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.length) !== 0 ? toolbarClick : undefined, pageSettings: pageSettings, allowPaging: allowPaging, allowFiltering: allowFiltering, filterSettings: filterSettings, checkboxChange: checkboxChange, actionComplete: actionComplete }, { children: [(0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.ColumnsDirective, { children: children }), (0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Freeze, ej2_react_treegrid_1.RowDD, ej2_react_treegrid_1.Selection, ej2_react_treegrid_1.Sort, ej2_react_treegrid_1.Edit, ej2_react_treegrid_1.Toolbar, ej2_react_treegrid_1.Page, ej2_react_treegrid_1.ExcelExport, ej2_react_treegrid_1.PdfExport, ej2_react_treegrid_1.Resize, ej2_react_treegrid_1.Filter] })] }))) })) })));
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
    allowFiltering: true,
    filterSettings: {
        type: 'Excel'
    },
    selectionSettings: {
        checkboxOnly: true,
        persistSelection: true
    },
    onCheckboxChange: (data) => { },
    onDragEnd: (data) => { },
    onAdd: (data) => { },
    onEdit: (data) => { },
    onDelete: (data) => { },
    onSearch: (data) => { },
    onRowSelection: (data) => { }
};
//# sourceMappingURL=Table.js.map