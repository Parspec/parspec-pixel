import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TreeGridComponent, ColumnsDirective, Selection, RowDD, Inject, Freeze, Sort, Edit, Toolbar, Page, PdfExport, ExcelExport, Resize, Filter } from '@syncfusion/ej2-react-treegrid';
import { registerLicense } from '@syncfusion/ej2-base';
import './styles.css';
import { Box } from '../Box';
import { useRef } from 'react';
const license = window.localStorage.getItem('syncfusionLicense');
registerLicense(license);
export const Table = ({ children, data, childMappingKey, allowExports, allowRowDragAndDrop, frozenColumns, treeColumnIndex, allowPaging, pageSettings, allowResizing, allowEditing, toolBarOptions, excelExportProperties, pdfExportProperties, height, allowFiltering, filterSettings, onCheckboxChange, onDragEnd, onAdd, onEdit, onDelete, onSearch, hiddenKeys }) => {
    const tableRef = useRef();
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
    const dataBound = (args) => {
        hiddenKeys === null || hiddenKeys === void 0 ? void 0 : hiddenKeys.map((key) => {
            var _a;
            const hiddenRowTemplateTd = document.getElementById(key);
            const hiddenRowTr = (_a = hiddenRowTemplateTd === null || hiddenRowTemplateTd === void 0 ? void 0 : hiddenRowTemplateTd.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
            if (hiddenRowTr) {
                const rowIndex = hiddenRowTr === null || hiddenRowTr === void 0 ? void 0 : hiddenRowTr.getAttribute('data-rowindex');
                const rowsOfAllTablesWithProvidedRowIndex = document.querySelectorAll(`tr[data-rowindex="${rowIndex}"]`);
                for (let i = 0; i < rowsOfAllTablesWithProvidedRowIndex.length; i++) {
                    const cols = rowsOfAllTablesWithProvidedRowIndex[i].childNodes;
                    if (cols) {
                        for (let i = 0; i < cols.length; i++) {
                            cols[i].style.opacity = 0.4;
                        }
                    }
                }
            }
        });
    };
    return (_jsx(Box, Object.assign({ className: "control-pane" }, { children: _jsx(Box, Object.assign({ className: "control-section" }, { children: _jsxs(TreeGridComponent, Object.assign({ dataBound: dataBound, height: height, ref: tableRef, dataSource: data, treeColumnIndex: treeColumnIndex, childMapping: childMappingKey, allowPdfExport: allowExports, allowExcelExport: allowExports, allowRowDragAndDrop: allowRowDragAndDrop, allowResizing: allowResizing, selectionSettings: {
                    checkboxOnly: true,
                    persistSelection: true
                }, rowDrop: rowDrop, frozenColumns: frozenColumns, allowSorting: true, editSettings: allowEditing
                    ? {
                        allowAdding: true,
                        allowDeleting: true,
                        allowEditing: true,
                        mode: 'Cell',
                        showDeleteConfirmDialog: true,
                        showConfirmDialog: true,
                        newRowPosition: 'Bottom'
                    }
                    : {}, toolbar: toolBarOptions, toolbarClick: toolbarClick, pageSettings: pageSettings, allowPaging: allowPaging, allowFiltering: allowFiltering, filterSettings: filterSettings, checkboxChange: checkboxChange, actionComplete: actionComplete }, { children: [_jsx(ColumnsDirective, { children: children }), _jsx(Inject, { services: [Freeze, RowDD, Selection, Sort, Edit, Toolbar, Page, ExcelExport, PdfExport, Resize, Filter] })] })) })) })));
};
Table.defaultProps = {
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
    onDelete: (data) => { },
    onSearch: (data) => { },
    hiddenKeys: []
};
//# sourceMappingURL=Table.js.map