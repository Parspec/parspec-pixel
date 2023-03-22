import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { TreeGridComponent, ColumnsDirective, Selection, RowDD, Inject, Freeze, Sort, Edit, Page, PdfExport, ExcelExport, Resize, Filter, ContextMenu } from '@syncfusion/ej2-react-treegrid';
import { addClass, isNullOrUndefined, registerLicense } from '@syncfusion/ej2-base';
import './styles.css';
import { Box } from '../Box';
import { getObject } from '@syncfusion/ej2-grids';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { TextField } from '../TextField';
import { IconButton } from '../IconButton';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { CloseIcon } from '../Icons';
import { BodySmall } from '../Typography';
const license = window.localStorage.getItem('syncfusionLicense');
registerLicense(license);
export const Table = forwardRef((props, ref) => {
    const { children, data, childMappingKey, allowExports, allowRowDragAndDrop, frozenColumns, treeColumnIndex, allowPaging, pageSettings, allowResizing, showToolbar, toolBarOptions, height, allowFiltering, editSettings, filterSettings, onCheckboxChange, onDragEnd, onAdd, onEdit, onDelete, onSearch, selectionSettings, onRowSelection, loading, toolbarRightSection, searchSettings } = props;
    const tableRef = useRef();
    const [selected, setSelected] = useState(0);
    useEffect(() => {
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
        if (getObject('hidden', args.data) === true) {
            args.row.style.opacity = '0.4';
        }
        if ((selectionSettings === null || selectionSettings === void 0 ? void 0 : selectionSettings.type) === 'Single') {
            addClass([args.row], 'singleSelect');
        }
    };
    const actionBeginHandler = (args) => {
        if (args.requestType == 'add') {
            args.data.id = Math.floor(Math.random() * 20000);
        }
    };
    useImperativeHandle(ref, () => {
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
    return (_jsxs(_Fragment, { children: [showToolbar && (_jsxs(Box, Object.assign({ display: 'flex', justifyContent: "space-between", mb: 2 }, { children: [_jsxs(Box, Object.assign({ display: "flex", alignItems: "center", gap: 1 }, { children: [(toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('search')) && (_jsx(Box, Object.assign({ width: 300 }, { children: _jsx(TextField, { label: 'Search', size: "small", onChange: (t) => tableRef.current.search(t.target.value) }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('add')) && (_jsx(IconButton, Object.assign({ onClick: () => tableRef.current.addRecord() }, { children: _jsx(ControlPointDuplicateIcon, { fontSize: "medium" }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('delete')) && (_jsx(IconButton, Object.assign({ onClick: () => tableRef.current.deleteRecord() }, { children: _jsx(DeleteOutlineIcon, { fontSize: "medium" }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('hide')) && (_jsx(IconButton, Object.assign({ onClick: hideUnhideSelected }, { children: _jsx(VisibilityOffIcon, { fontSize: "medium" }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('clearFilters')) && (_jsx(IconButton, Object.assign({ onClick: () => tableRef.current.clearFiltering() }, { children: _jsx(FilterAltOffIcon, { fontSize: "medium" }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('selectedItems')) && selected > 0 && (_jsxs(Box, Object.assign({ p: 1, pl: 3, pr: 2, bgcolor: 'tertiary.main', color: 'secondary.contrastText', display: "flex", alignItems: "center", gap: 2 }, { children: [_jsxs(BodySmall, Object.assign({ color: "secondary.contrastText" }, { children: [selected, " items selected"] })), _jsx(IconButton, Object.assign({ onClick: closeBanner, sx: { color: 'secondary.contrastText', margin: 0, padding: 0 } }, { children: _jsx(CloseIcon, { fontSize: "small" }) }))] })))] })), _jsx(Box, { children: toolbarRightSection })] }))), _jsx(Box, Object.assign({ className: "control-pane" }, { children: _jsx(Box, Object.assign({ className: "control-section" }, { children: data && (_jsxs(TreeGridComponent, Object.assign({ actionBegin: actionBeginHandler, rowSelected: rowSelected, rowDeselected: rowDeselected, rowDataBound: rowDataBound, height: height, ref: tableRef, dataSource: data, treeColumnIndex: treeColumnIndex, childMapping: childMappingKey, allowPdfExport: allowExports, allowExcelExport: allowExports, allowRowDragAndDrop: allowRowDragAndDrop, allowResizing: allowResizing, selectionSettings: selectionSettings, rowDrop: rowDrop, frozenColumns: frozenColumns, allowSorting: true, editSettings: editSettings, searchSettings: searchSettings, pageSettings: pageSettings, allowPaging: allowPaging, allowFiltering: allowFiltering, filterSettings: filterSettings, checkboxChange: checkboxChange, actionComplete: actionComplete }, { children: [_jsx(ColumnsDirective, { children: children }), _jsx(Inject, { services: [Freeze, RowDD, Selection, Sort, Edit, Page, ExcelExport, PdfExport, Resize, Filter, ContextMenu] })] }))) })) }))] }));
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
    }
};
//# sourceMappingURL=Table.js.map