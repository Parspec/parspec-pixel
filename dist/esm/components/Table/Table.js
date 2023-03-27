import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { TreeGridComponent, ColumnsDirective, Selection, RowDD, Inject, Freeze, Sort, Edit, Page, PdfExport, ExcelExport, Resize, Filter, ContextMenu } from '@syncfusion/ej2-react-treegrid';
import { addClass, isNullOrUndefined, registerLicense } from '@syncfusion/ej2-base';
import './styles.css';
import { Box } from '../Box';
import { getObject } from '@syncfusion/ej2-grids';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { TextField } from '../TextField';
import { IconButton } from '../IconButton';
import { CloseIcon, ControlPointDuplicateIcon, DeleteOutlineIcon, VisibilityOffIcon, FilterAltOffIcon } from '../Icons';
import { BodySmall } from '../Typography';
import { Tooltip } from '../Tooltip';
const license = window.localStorage.getItem('syncfusionLicense');
registerLicense(license);
export const Table = forwardRef((props, ref) => {
    const { children, data, childMappingKey, allowExports, allowRowDragAndDrop, frozenColumns, treeColumnIndex, allowPaging, pageSettings, allowResizing, showToolbar, toolBarOptions, height, allowFiltering, editSettings, filterSettings, onHideUnhide, onAddDuplicates, onCheckboxChange, onDragEnd, onDelete, selectionSettings, onRowSelection, loading, toolbarRightSection, searchSettings, hiddenProperty } = props;
    const tableRef = useRef();
    const [selected, setSelectedForBanner] = useState(0);
    useEffect(() => {
        var _a, _b, _c, _d;
        let obj = document.getElementsByClassName('e-grid')[0].ej2_instances[0].localeObj.localeStrings;
        if (loading) {
            obj.EmptyRecord = '';
            (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.showSpinner();
            (_b = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
        }
        else {
            (_c = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _c === void 0 ? void 0 : _c.hideSpinner();
            if (data.length === 0) {
                obj.EmptyRecord = 'No records to display';
                (_d = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
            }
        }
    }, [loading]);
    const rowDrop = (args) => {
        var _a;
        const droppedData = (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getRowInfo(args.target.parentElement).rowData; //dropped data
        let droppedId, draggedId;
        //here collect the taskid value based on parent records
        if (!isNullOrUndefined(droppedData)) {
            if (!isNullOrUndefined(droppedData.parentItem) && args.data[0].parentItem != null) {
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
                    (isNullOrUndefined(args.data[0].hasChildRecords) || isNullOrUndefined(droppedData.hasChildRecords) || args.data[0].hasChildRecords == true) &&
                    droppedId != draggedId) {
                    args.cancel = true; //here we prevent drop the record in top of another parent's child
                }
            }
        }
        //Here we prevent the drop for child position
        if (args.dropPosition == 'middleSegment') {
            if (!isNullOrUndefined(draggedId) && !isNullOrUndefined(droppedId)) {
                if (droppedId == draggedId || args.data[0].level == droppedData.level) {
                    args.cancel = true;
                }
            }
            else if (args.data[0].level == droppedData.level || (args.data[0].level != droppedData.level && isNullOrUndefined(draggedId) && isNullOrUndefined(droppedId))) {
                args.cancel = true;
            }
        }
        onDragEnd(tableRef.current.getDataModule().treeModule.hierarchyData);
    };
    const checkboxChange = (args) => {
        var _a, _b, _c;
        onCheckboxChange((_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedRecords());
        setSelectedForBanner((_c = (_b = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _b === void 0 ? void 0 : _b.getSelectedRecords()) === null || _c === void 0 ? void 0 : _c.length);
    };
    const rowSelected = (args) => {
        onRowSelection(tableRef.current.getSelectedRecords());
    };
    const rowDeselected = (args) => {
        onRowSelection(tableRef.current.getSelectedRecords());
    };
    const rowDataBound = (args) => {
        if (getObject(hiddenProperty, args.data) === true) {
            args.row.style.opacity = '0.4';
        }
        else {
            args.row.style.opacity = '1';
        }
        if ((selectionSettings === null || selectionSettings === void 0 ? void 0 : selectionSettings.type) === 'Single') {
            addClass([args.row], 'singleSelect');
        }
    };
    useImperativeHandle(ref, () => {
        const clearSelection = () => {
            tableRef.current.clearSelection();
            setSelectedForBanner(() => 0);
        };
        return {
            clearSelection,
            setSelectedForBanner
        };
    });
    const closeBanner = () => {
        setSelectedForBanner(() => 0);
        tableRef.current.clearSelection();
    };
    var headerCellInfo = function (args) {
        var _a, _b, _c, _d;
        if ((_b = (_a = args === null || args === void 0 ? void 0 : args.cell) === null || _a === void 0 ? void 0 : _a.column) === null || _b === void 0 ? void 0 : _b.allowSorting) {
            (_d = (_c = args === null || args === void 0 ? void 0 : args.node) === null || _c === void 0 ? void 0 : _c.classList) === null || _d === void 0 ? void 0 : _d.add('customicon');
        }
    };
    return (_jsxs(_Fragment, { children: [showToolbar && (_jsxs(Box, Object.assign({ display: 'flex', justifyContent: "space-between", mb: 2 }, { children: [_jsxs(Box, Object.assign({ display: "flex", alignItems: "center", gap: 1 }, { children: [(toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('search')) && (_jsx(Box, Object.assign({ width: 300 }, { children: _jsx(TextField, { label: 'Search...', variant: "standard", size: "small", onChange: (t) => tableRef.current.search(t.target.value) }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('duplicate')) && (_jsx(Tooltip, Object.assign({ title: "Add Duplicate Record(s)" }, { children: _jsx(IconButton, Object.assign({ onClick: () => onAddDuplicates(tableRef.current.getSelectedRecords()) }, { children: _jsx(ControlPointDuplicateIcon, { fontSize: "medium" }) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('delete')) && (_jsx(Tooltip, Object.assign({ title: "Delete Record(s)" }, { children: _jsx(IconButton, Object.assign({ onClick: () => {
                                        onDelete(tableRef.current.getSelectedRecords());
                                    } }, { children: _jsx(DeleteOutlineIcon, { fontSize: "medium" }) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('hide')) && (_jsx(Tooltip, Object.assign({ title: "Hide/Unhide Record(s)" }, { children: _jsx(IconButton, Object.assign({ onClick: () => onHideUnhide(tableRef.current.getSelectedRecords()) }, { children: _jsx(VisibilityOffIcon, { fontSize: "medium" }) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('clearFilters')) && (_jsx(Tooltip, Object.assign({ title: "Clear Filter(s)" }, { children: _jsx(IconButton, Object.assign({ onClick: () => tableRef.current.clearFiltering() }, { children: _jsx(FilterAltOffIcon, { fontSize: "medium" }) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('selectedItems')) && selected > 0 && (_jsxs(Box, Object.assign({ p: 1, pl: 3, pr: 2, bgcolor: 'tertiary.main', color: 'secondary.contrastText', display: "flex", alignItems: "center", gap: 2 }, { children: [_jsxs(BodySmall, Object.assign({ color: "secondary.contrastText" }, { children: [selected, " item(s) selected"] })), _jsx(IconButton, Object.assign({ onClick: closeBanner, sx: { color: 'secondary.contrastText', margin: 0, padding: 0 } }, { children: _jsx(CloseIcon, { fontSize: "small" }) }))] })))] })), _jsx(Box, { children: toolbarRightSection })] }))), _jsx(Box, Object.assign({ className: "control-pane" }, { children: _jsx(Box, Object.assign({ className: "control-section" }, { children: data && (_jsxs(TreeGridComponent, Object.assign({ headerCellInfo: headerCellInfo, rowSelected: rowSelected, rowDeselected: rowDeselected, rowDataBound: rowDataBound, height: height, ref: tableRef, dataSource: data, treeColumnIndex: treeColumnIndex, childMapping: childMappingKey, allowPdfExport: allowExports, allowExcelExport: allowExports, allowRowDragAndDrop: allowRowDragAndDrop, allowResizing: allowResizing, selectionSettings: selectionSettings, rowDrop: rowDrop, frozenColumns: frozenColumns, allowSorting: true, editSettings: editSettings, searchSettings: searchSettings, pageSettings: pageSettings, allowPaging: allowPaging, allowFiltering: allowFiltering, filterSettings: filterSettings, checkboxChange: checkboxChange }, { children: [_jsx(ColumnsDirective, { children: children }), _jsx(Inject, { services: [Freeze, RowDD, Selection, Sort, Edit, Page, ExcelExport, PdfExport, Resize, Filter, ContextMenu] })] }))) })) }))] }));
});
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
    onAddDuplicates: (data) => { },
    onHideUnhide: (data) => { },
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
    toolbarRightSection: _jsx(_Fragment, {}),
    searchSettings: {
        hierarchyMode: 'Both'
    },
    hiddenProperty: 'is_hidden'
};
//# sourceMappingURL=Table.js.map