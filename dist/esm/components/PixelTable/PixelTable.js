import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TreeGridComponent, ColumnsDirective, Selection, RowDD, Inject, Freeze, Sort, Edit, Toolbar, Page, PdfExport, ExcelExport, Resize } from '@syncfusion/ej2-react-treegrid';
import { registerLicense } from '@syncfusion/ej2-base';
import './styles.css';
import { Box } from '../Box';
import { useRef, useState } from 'react';
let license = window.localStorage.getItem('syncfusionLicense');
registerLicense(license);
export const PixelTable = ({ children, data, childMappingKey, allowExports, allowRowDragAndDrop, frozenColumns, treeColumnIndex, allowPaging, pageSettings, allowResizing, allowEditing, toolBarOptions, excelExportProperties, pdfExportProperties, height }) => {
    const [dragData2, setDragData2] = useState(data);
    const ref = useRef();
    const rowDrop = (args) => {
        let treeobj = document.getElementsByClassName('e-treegrid')[0];
        treeobj = treeobj.ej2_instances[0];
        let droppedData = treeobj.getRowInfo(args.target.parentElement).rowData;
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
            treeobj.reorderRows([args.fromIndex], args.dropIndex, 'below');
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
    return (_jsx(Box, Object.assign({ className: "control-pane" }, { children: _jsx(Box, Object.assign({ className: "control-section" }, { children: _jsxs(TreeGridComponent, Object.assign({ height: height, ref: ref, dataSource: dragData2, treeColumnIndex: treeColumnIndex, childMapping: childMappingKey, allowPdfExport: allowExports, allowExcelExport: allowExports, allowRowDragAndDrop: allowRowDragAndDrop, allowResizing: allowResizing, selectionSettings: {
                    type: 'Multiple',
                    mode: 'Both',
                    cellSelectionMode: 'Box'
                }, enableAutoFill: true, rowDrop: rowDrop, frozenColumns: frozenColumns, allowSorting: true, editSettings: allowEditing
                    ? {
                        allowEditing: true,
                        mode: 'Batch'
                    }
                    : {}, toolbar: toolBarOptions, toolbarClick: toolbarClick, pageSettings: pageSettings, allowPaging: allowPaging }, { children: [_jsx(ColumnsDirective, { children: children }), _jsx(Inject, { services: [Freeze, RowDD, Selection, Sort, Edit, Toolbar, Page, ExcelExport, PdfExport, Resize] })] })) })) })));
};
PixelTable.defaultProps = {
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
//# sourceMappingURL=PixelTable.js.map