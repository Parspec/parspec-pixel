"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
const ej2_base_1 = require("@syncfusion/ej2-base");
require("./styles.css");
const Box_1 = require("../Box");
const ej2_grids_1 = require("@syncfusion/ej2-grids");
const react_1 = require("react");
const TextField_1 = require("../TextField");
const IconButton_1 = require("../IconButton");
const ControlPointDuplicate_1 = __importDefault(require("@mui/icons-material/ControlPointDuplicate"));
const DeleteOutline_1 = __importDefault(require("@mui/icons-material/DeleteOutline"));
const VisibilityOff_1 = __importDefault(require("@mui/icons-material/VisibilityOff"));
const FilterAltOff_1 = __importDefault(require("@mui/icons-material/FilterAltOff"));
const Icons_1 = require("../Icons");
const Typography_1 = require("../Typography");
const license = window.localStorage.getItem('syncfusionLicense');
(0, ej2_base_1.registerLicense)(license);
exports.Table = (0, react_1.forwardRef)((props, ref) => {
    const { children, data, childMappingKey, allowExports, allowRowDragAndDrop, frozenColumns, treeColumnIndex, allowPaging, pageSettings, allowResizing, showToolbar, toolBarOptions, height, allowFiltering, editSettings, filterSettings, onCheckboxChange, onDragEnd, onAdd, onEdit, onDelete, onSearch, selectionSettings, onRowSelection, loading, toolbarRightSection, searchSettings } = props;
    const tableRef = (0, react_1.useRef)();
    const [selected, setSelected] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        if (loading) {
            tableRef.current.showSpinner();
        }
        else {
            tableRef.current.hideSpinner();
        }
    }, [loading]);
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
    const checkboxChange = (args) => {
        onCheckboxChange(tableRef.current.getSelectedRecords());
        setSelected(tableRef.current.getSelectedRecords().length);
    };
    const rowSelected = (args) => {
        onRowSelection(tableRef.current.getSelectedRecords());
    };
    const rowDeselected = (args) => {
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
    const actionBeginHandler = (args) => {
        if (args.requestType == 'add') {
            args.data.id = Math.floor(Math.random() * 20000);
        }
    };
    (0, react_1.useImperativeHandle)(ref, () => {
        const clearFiltering = () => {
            tableRef.current.clearFiltering();
        };
        return {
            clearFiltering
        };
    });
    const hideUnhideSelected = () => { };
    const closeBanner = () => {
        setSelected(0);
        tableRef.current.clearSelection();
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [showToolbar && ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex', justifyContent: "space-between", mb: 2 }, { children: [(0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: "flex", alignItems: "center", gap: 1 }, { children: [(toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('search')) && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: 300 }, { children: (0, jsx_runtime_1.jsx)(TextField_1.TextField, { label: 'Search', size: "small", onChange: (t) => tableRef.current.search(t.target.value) }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('add')) && ((0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => tableRef.current.addRecord() }, { children: (0, jsx_runtime_1.jsx)(ControlPointDuplicate_1.default, { fontSize: "medium" }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('delete')) && ((0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => tableRef.current.deleteRecord() }, { children: (0, jsx_runtime_1.jsx)(DeleteOutline_1.default, { fontSize: "medium" }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('hide')) && ((0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: hideUnhideSelected }, { children: (0, jsx_runtime_1.jsx)(VisibilityOff_1.default, { fontSize: "medium" }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('clearFilters')) && ((0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => tableRef.current.clearFiltering() }, { children: (0, jsx_runtime_1.jsx)(FilterAltOff_1.default, { fontSize: "medium" }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('selectedItems')) && selected > 0 && ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ p: 1, pl: 3, pr: 2, bgcolor: 'tertiary.main', color: 'secondary.contrastText', display: "flex", alignItems: "center", gap: 2 }, { children: [(0, jsx_runtime_1.jsxs)(Typography_1.BodySmall, Object.assign({ color: "secondary.contrastText" }, { children: [selected, " items selected"] })), (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: closeBanner, sx: { color: 'secondary.contrastText', margin: 0, padding: 0 } }, { children: (0, jsx_runtime_1.jsx)(Icons_1.CloseIcon, { fontSize: "small" }) }))] })))] })), (0, jsx_runtime_1.jsx)(Box_1.Box, { children: toolbarRightSection })] }))), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-pane" }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-section" }, { children: data && ((0, jsx_runtime_1.jsxs)(ej2_react_treegrid_1.TreeGridComponent, Object.assign({ actionBegin: actionBeginHandler, rowSelected: rowSelected, rowDeselected: rowDeselected, rowDataBound: rowDataBound, height: height, ref: tableRef, dataSource: data, treeColumnIndex: treeColumnIndex, childMapping: childMappingKey, allowPdfExport: allowExports, allowExcelExport: allowExports, allowRowDragAndDrop: allowRowDragAndDrop, allowResizing: allowResizing, selectionSettings: selectionSettings, rowDrop: rowDrop, frozenColumns: frozenColumns, allowSorting: true, editSettings: editSettings, searchSettings: searchSettings, pageSettings: pageSettings, allowPaging: allowPaging, allowFiltering: allowFiltering, filterSettings: filterSettings, checkboxChange: checkboxChange, actionComplete: actionComplete }, { children: [(0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.ColumnsDirective, { children: children }), (0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Freeze, ej2_react_treegrid_1.RowDD, ej2_react_treegrid_1.Selection, ej2_react_treegrid_1.Sort, ej2_react_treegrid_1.Edit, ej2_react_treegrid_1.Page, ej2_react_treegrid_1.ExcelExport, ej2_react_treegrid_1.PdfExport, ej2_react_treegrid_1.Resize, ej2_react_treegrid_1.Filter, ej2_react_treegrid_1.ContextMenu] })] }))) })) }))] }));
});
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
    allowFiltering: true,
    filterSettings: {
        type: 'Excel'
    },
    selectionSettings: {
        checkboxOnly: true,
        persistSelection: true
    },
    editSettings: {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Cell',
        showDeleteConfirmDialog: true,
        showConfirmDialog: true,
        newRowPosition: 'Bottom'
    },
    onCheckboxChange: (data) => { },
    onDragEnd: (data) => { },
    onAdd: (data) => { },
    onEdit: (data) => { },
    onDelete: (data) => { },
    onSearch: (data) => { },
    onRowSelection: (data) => { },
    loading: false,
    showToolbar: true,
    toolBarOptions: [],
    toolbarRightSection: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}),
    searchSettings: {
        hierarchyMode: 'Both'
    }
};
//# sourceMappingURL=Table.js.map