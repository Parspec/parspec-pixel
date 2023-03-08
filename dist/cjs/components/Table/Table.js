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
const Table = ({ children, data, childMappingKey, allowExports, allowRowDragAndDrop, frozenColumns, treeColumnIndex, allowPaging, pageSettings, allowResizing, allowEditing, toolBarOptions, excelExportProperties, pdfExportProperties, height }) => {
    const ref = (0, react_1.useRef)();
    const rowDrop = (args) => {
        const droppedData = ref.current.getRowInfo(args.target.parentElement).rowData;
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
            ref.current.reorderRows([args.fromIndex], args.dropIndex, 'below');
        }
    };
    const toolbarClick = (args) => {
        if (args.item.text === 'Excel Export') {
            ref.current.excelExport(excelExportProperties);
        }
        else if (args.item.text === 'PDF Export') {
            ref.current.pdfExport(pdfExportProperties);
        }
    };
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-pane" }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-section" }, { children: (0, jsx_runtime_1.jsxs)(ej2_react_treegrid_1.TreeGridComponent, Object.assign({ height: height, ref: ref, dataSource: data, treeColumnIndex: treeColumnIndex, childMapping: childMappingKey, allowPdfExport: allowExports, allowExcelExport: allowExports, allowRowDragAndDrop: allowRowDragAndDrop, allowResizing: allowResizing, selectionSettings: {
                    checkboxOnly: true,
                    persistSelection: true
                }, rowDrop: rowDrop, frozenColumns: frozenColumns, allowSorting: true, editSettings: allowEditing
                    ? {
                        allowEditing: true,
                        mode: 'Batch'
                    }
                    : {}, toolbar: toolBarOptions, toolbarClick: toolbarClick, pageSettings: pageSettings, allowPaging: allowPaging }, { children: [(0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.ColumnsDirective, { children: children }), (0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Freeze, ej2_react_treegrid_1.RowDD, ej2_react_treegrid_1.Selection, ej2_react_treegrid_1.Sort, ej2_react_treegrid_1.Edit, ej2_react_treegrid_1.Toolbar, ej2_react_treegrid_1.Page, ej2_react_treegrid_1.ExcelExport, ej2_react_treegrid_1.PdfExport, ej2_react_treegrid_1.Resize] })] })) })) })));
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
    toolBarOptions: []
};
//# sourceMappingURL=Table.js.map