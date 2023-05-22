"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
const ej2_base_1 = require("@syncfusion/ej2-base");
require("./Treegrid.scss");
// import './styles.css';
const Box_1 = require("../Box");
const ej2_grids_1 = require("@syncfusion/ej2-grids");
const react_1 = require("react");
const TextField_1 = require("../TextField");
const IconButton_1 = require("../IconButton");
const Icons_1 = require("../Icons");
const Typography_1 = require("../Typography");
const Tooltip_1 = require("../Tooltip");
const InputAdornment_1 = require("../InputAdornment");
window.localStorage.setItem('syncfusionLicense', 'Mgo+DSMBaFt+QHFqVkFrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRcQlljTX5TckJmW39beH0=;Mgo+DSMBPh8sVXJ1S0d+X1ZPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXpTckVjXXhbcnRcQGk=;ORg4AjUWIQA/Gnt2VFhhQlJDfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5XdkFjWXtZdXZUQmBV;MTYwMzQwMkAzMjMxMmUzMTJlMzMzN0ZtL0kzc0FtbUVTbjREZEs4cGNuVkd0TXI5SmZNbmRlbGEwRnQ0bnJTNTA9;MTYwMzQwM0AzMjMxMmUzMTJlMzMzN0QzQWZIYjkxU1dzV3pSaGpseHdPcWRoUmdtb2hWVjIzNVRubmtoL1lGaVU9;NRAiBiAaIQQuGjN/V0d+XU9HcVRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TckVnWX9ad3FXRGZaWA==;MTYwMzQwNUAzMjMxMmUzMTJlMzMzN1pySEd1T0ZEQjRJRTNwZ280UXVZMGVtN1RhQjNDbGcxQ1o0TzVpdC9JdUk9;MTYwMzQwNkAzMjMxMmUzMTJlMzMzN25QaHFKWS85c2pqVVpRTFd4U1crbDlJeEFZNFFUNjYyUENtWVR2MjdNNnc9;Mgo+DSMBMAY9C3t2VFhhQlJDfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5XdkFjWXtZdXZWRWVV;MTYwMzQwOEAzMjMxMmUzMTJlMzMzN29BL2FMN01nWnN1ZG9wb0I4QmdPMmhFM25Pa0hsU05nUE8zclVHR1N0Qm89;MTYwMzQwOUAzMjMxMmUzMTJlMzMzN1dnbmQ1UlMyZDNTOEFLYzZhNlhaWGhVcGZUbVNEdWQrbUFiS1hZcFdzZzQ9;MTYwMzQxMEAzMjMxMmUzMTJlMzMzN1pySEd1T0ZEQjRJRTNwZ280UXVZMGVtN1RhQjNDbGcxQ1o0TzVpdC9JdUk9');
const license = window.localStorage.getItem('syncfusionLicense');
(0, ej2_base_1.registerLicense)(license);
exports.Table = (0, react_1.forwardRef)((props, ref) => {
    const { children, data, childMappingKey, allowExports, allowRowDragAndDrop, frozenColumns, treeColumnIndex, allowPaging, pageSettings, allowResizing, allowSorting, showToolbar, toolBarOptions, height, allowFiltering, editSettings, filterSettings, onHideUnhide, onAddDuplicates, onCheckboxChange, onDragEnd, onEdit, onSearch, onDelete, selectionSettings, onRowSelection, loading, toolbarRightSection, searchSettings, hiddenProperty, rowHeight, 
    // defaultFilter,
    customFiltersFunction } = props;
    const tableRef = (0, react_1.useRef)();
    const [selected, setSelectedForBanner] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let obj = (_d = (_c = (_b = (_a = document.getElementsByClassName('e-grid')[0]) === null || _a === void 0 ? void 0 : _a.ej2_instances) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.localeObj) === null || _d === void 0 ? void 0 : _d.localeStrings;
        if (loading) {
            if (obj && (obj === null || obj === void 0 ? void 0 : obj.EmptyRecord)) {
                obj.EmptyRecord = '';
            }
            (_e = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _e === void 0 ? void 0 : _e.showSpinner();
            (_f = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
        }
        else {
            (_g = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _g === void 0 ? void 0 : _g.hideSpinner();
            if (!data.length && obj && !(obj === null || obj === void 0 ? void 0 : obj.EmptyRecord.length)) {
                obj.EmptyRecord = 'No records to display';
                (_h = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _h === void 0 ? void 0 : _h.refresh();
            }
        }
        // tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    }, [loading]);
    const actionComplete = (args) => {
        if ((args === null || args === void 0 ? void 0 : args.type) === 'save') {
            onEdit(args);
        }
        if ((args === null || args === void 0 ? void 0 : args.requestType) === 'searching') {
            onSearch(args);
        }
        // tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    };
    const actionBegin = (e) => {
        var _a;
        if (e.requestType === 'filtering' && !(0, ej2_base_1.isNullOrUndefined)(e.currentFilterObject) && (0, ej2_base_1.isNullOrUndefined)((_a = e === null || e === void 0 ? void 0 : e.currentFilterObject) === null || _a === void 0 ? void 0 : _a.value)) {
            e.cancel = true;
        }
        if (e.requestType === 'filterbeforeopen') {
            customFiltersFunction(e);
        }
        if (e.type === 'edit') {
            e.cell.getElementsByTagName('input')[0].setAttribute('maxLength', 255);
        }
    };
    // const rowDragStartHelper = (args) => {
    //     console.log('rowDragStartHelper====>', args);
    // };
    const rowDrop = (args) => {
        // // console.log('data', data);
        // let notAllowed = false;
        var _a, _b, _c;
        // const { dropIndex, fromIndex } = args;
        // const targetIndex = dropIndex === 0 ? 0 : Math.abs(dropIndex - fromIndex);
        // const { childRecords, parentItem, type } = tableRef?.current?.flatData[targetIndex];
        // console.log(args, '/n ===>args', tableRef?.current?.flatData, '/n == tabel ref', tableRef?.current?.flatData[Math.abs(dropIndex - fromIndex)]);
        // if ((childRecords || parentItem) && !['product', 'accessory'].includes(type)) {
        //     args.cancel = true;
        //     notAllowed = true;
        // }
        // console.log(childRecords, parentItem, 'childRecords, parentItem ');
        // if()
        // let notAllowed = false;
        // const droppedData = tableRef?.current?.getRowInfo(args.target.parentElement).rowData; //dropped data
        // // console.log(args, 'args', droppedData);
        // let droppedId, draggedId;
        // //here collect the taskid value based on parent records
        // if (!isNullOrUndefined(droppedData)) {
        //     if (!isNullOrUndefined(droppedData.parentItem) && args.data[0].parentItem != null) {
        //         droppedId = droppedData.parentItem.taskID; //dropped data
        //         draggedId = args.data[0].parentItem.taskID; // dragged data
        //     } else if (droppedData.hasChildRecords == true) {
        //         droppedId = droppedData.taskID; //dropped data
        //         draggedId = args.data[0].taskID; // dragged data
        //     }
        // }
        // // //Here we prevent for top / bottom position
        // // // debugger;
        // // if (droppedId != draggedId && args.data[0].level != droppedData.level) {
        // //     args.cancel = true;
        // //     notAllowed = true;
        // // } else if (args.dropPosition == 'topSegment' || args.dropPosition == 'bottomSegment') {
        // //     //here prevent the drop for within child parent
        // //     if (args.data[0].level != droppedData.level) {
        // //         args.cancel = true;
        // //         notAllowed = true;
        // //     } else if (args.data[0].level != 0 && droppedData.level != 0) {
        // //         if (
        // //             args.data[0].level == droppedData.level &&
        // //             (isNullOrUndefined(args.data[0].hasChildRecords) || isNullOrUndefined(droppedData.hasChildRecords) || args.data[0].hasChildRecords == true) &&
        // //             droppedId != draggedId
        // //         ) {
        // //             args.cancel = true; //here we prevent drop the record in top of another parent's child
        // //             notAllowed = true;
        // //         }
        // //     }
        // // }
        console.log(typeof args.dropPosition, ' ====current positon ');
        // if (args.dropPosition === 'topSegment' || args.dropPosition == 'bottomSegment') {
        //     if (args.data[0].level < droppedData.level && args.data[0].type === 'section') {
        //         args.cancel = true;
        //         notAllowed = true;
        //     }
        //     if (args.data[0].level === 2 && droppedData.level === 0) {
        //     }
        // }
        // if (args.dropPosition === 'middleSegment') {
        //     //Here we prevent the drop for child position
        //     if (!isNullOrUndefined(draggedId) && !isNullOrUndefined(droppedId)) {
        //         if (droppedId == draggedId || args.data[0].level == droppedData.level) {
        //             args.cancel = true;
        //             notAllowed = true;
        //         }
        //     } else if (args.data[0].level == droppedData.level || (args.data[0].level != droppedData.level && isNullOrUndefined(draggedId) && isNullOrUndefined(droppedId))) {
        //         args.cancel = true;
        //         notAllowed = true;
        //     }
        // }
        let notAllowed = false;
        const targetData = (_c = (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getRowInfo((_b = args === null || args === void 0 ? void 0 : args.target) === null || _b === void 0 ? void 0 : _b.parentElement)) === null || _c === void 0 ? void 0 : _c.rowData; //dropped data
        let data, parent;
        data = args.data[0];
        if (args.dropPosition === 'middleSegment') {
            parent = targetData;
        }
        else {
            parent = targetData === null || targetData === void 0 ? void 0 : targetData.parentItem;
        }
        if ((data === null || data === void 0 ? void 0 : data.type) === 'section') {
            if ((parent === null || parent === void 0 ? void 0 : parent.type) !== undefined) {
                args.cancel = true;
                notAllowed = true;
            }
        }
        else if ((data === null || data === void 0 ? void 0 : data.type) === 'product') {
            if ((parent === null || parent === void 0 ? void 0 : parent.type) !== 'section' && (parent === null || parent === void 0 ? void 0 : parent.type) !== undefined) {
                args.cancel = true;
                notAllowed = true;
            }
        }
        else {
            if ((parent === null || parent === void 0 ? void 0 : parent.type) !== 'product' && (parent === null || parent === void 0 ? void 0 : parent.type) !== undefined) {
                args.cancel = true;
                notAllowed = true;
            }
        }
        console.log('data=>', data, '\nparent=>', parent, '\narg=>', args, '\ntarget=>', targetData);
        if (!notAllowed) {
            onDragEnd({ fromIndex: args.fromIndex, data: args.data[0] });
        }
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
        var _a, _b;
        if ((0, ej2_grids_1.getObject)(hiddenProperty, args.data) === true) {
            args.row.style.opacity = '0.4';
        }
        else {
            args.row.style.opacity = '1';
        }
        if ((selectionSettings === null || selectionSettings === void 0 ? void 0 : selectionSettings.type) === 'Single') {
            (0, ej2_base_1.addClass)([args.row], 'singleSelect');
        }
        if (((_b = (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getVisibleRecords()) === null || _b === void 0 ? void 0 : _b.length) !== 0) {
            document.getElementById('_gridcontrol_content_table').classList.remove('empty');
        }
    };
    (0, react_1.useImperativeHandle)(ref, () => {
        const clearSelection = () => {
            tableRef.current.clearSelection();
            setSelectedForBanner(() => 0);
            onCheckboxChange([]);
        };
        return {
            clearSelection,
            setSelectedForBanner
        };
    });
    const closeBanner = () => {
        setSelectedForBanner(() => 0);
        tableRef.current.clearSelection();
        onCheckboxChange([]);
    };
    var headerCellInfo = function (args) {
        var _a, _b, _c, _d;
        if ((_b = (_a = args === null || args === void 0 ? void 0 : args.cell) === null || _a === void 0 ? void 0 : _a.column) === null || _b === void 0 ? void 0 : _b.allowSorting) {
            (_d = (_c = args === null || args === void 0 ? void 0 : args.node) === null || _c === void 0 ? void 0 : _c.classList) === null || _d === void 0 ? void 0 : _d.add('customicon');
        }
    };
    const disabled = (() => { var _a, _b; return !(tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) || ((_b = (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedRecords()) === null || _b === void 0 ? void 0 : _b.length) === 0; })();
    const dataBound = (args) => {
        var _a, _b;
        if (((_b = (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getVisibleRecords()) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            document.getElementById('_gridcontrol_content_table').classList.add('empty');
        }
    };
    const rightSection = (0, react_1.useMemo)(() => toolbarRightSection, [toolbarRightSection]);
    const [tableHeight, setTableHeight] = (0, react_1.useState)();
    const tableContainerRef = (0, react_1.useRef)();
    const toolbarContainerRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        var _a, _b, _c;
        const toolbarHeight = showToolbar && (toolbarContainerRef === null || toolbarContainerRef === void 0 ? void 0 : toolbarContainerRef.current) ? (_a = toolbarContainerRef === null || toolbarContainerRef === void 0 ? void 0 : toolbarContainerRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight : 0;
        const paginationHeight = allowPaging ? 47 : 0;
        const tableHeader = 42 + 10;
        if ((_b = tableContainerRef === null || tableContainerRef === void 0 ? void 0 : tableContainerRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight) {
            setTableHeight(((_c = tableContainerRef === null || tableContainerRef === void 0 ? void 0 : tableContainerRef.current) === null || _c === void 0 ? void 0 : _c.offsetHeight) - toolbarHeight - paginationHeight - tableHeader);
        }
        // tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    }, [[tableContainerRef === null || tableContainerRef === void 0 ? void 0 : tableContainerRef.current]]);
    // const resizestart = () => {
    //     tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    // };
    // const collapsing = () => {
    //     tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    // };
    // const expanding = () => {
    //     tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    // };
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ position: 'relative', height: '100%', width: '100%', ref: tableContainerRef }, { children: [showToolbar && ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex', ref: toolbarContainerRef, justifyContent: "space-between", alignItems: 'flex-end', mb: 2, sx: loading ? { PointerEvent: 'none' } : {} }, { children: [(0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: "flex", alignItems: "center", gap: 1 }, { children: [(toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('search')) && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: 300 }, { children: (0, jsx_runtime_1.jsx)(TextField_1.TextField, { label: "", placeholder: "Search...", InputProps: {
                                        startAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.InputAdornment, Object.assign({ position: "start" }, { children: (0, jsx_runtime_1.jsx)(Icons_1.SearchIcon, { fontSize: "small" }) })))
                                    }, size: "small", onChange: (t) => { var _a, _b; return tableRef.current.search((_b = (_a = t === null || t === void 0 ? void 0 : t.target) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.trim()); } }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('duplicate')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabled ? 'Select Item(s) First' : 'Duplicate' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onAddDuplicates(tableRef.current.getSelectedRecords()), disabled: disabled }, { children: (0, jsx_runtime_1.jsx)(Icons_1.ControlPointDuplicateIcon, { fontSize: "medium" }) })) }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('delete')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabled ? 'Select Item(s) First' : 'Delete' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ disabled: disabled, onClick: () => {
                                            var _a;
                                            onDelete((_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedRecords());
                                        } }, { children: (0, jsx_runtime_1.jsx)(Icons_1.DeleteOutlineIcon, { fontSize: "medium" }) })) }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('hide')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabled ? 'Select Item(s) First' : 'Hide / Unhide' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onHideUnhide(tableRef.current.getSelectedRecords()), disabled: disabled }, { children: (0, jsx_runtime_1.jsx)(Icons_1.VisibilityOffIcon, { fontSize: "medium" }) })) }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('clearFilters')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: "Clear Filter(s)" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => tableRef.current.clearFiltering() }, { children: (0, jsx_runtime_1.jsx)(Icons_1.FilterAltOffIcon, { fontSize: "medium" }) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('selectedItems')) && selected > 0 && ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ p: 1, pl: 3, pr: 2, bgcolor: 'primary.main', color: 'secondary.contrastText', display: "flex", alignItems: "center", gap: 2 }, { children: [(0, jsx_runtime_1.jsxs)(Typography_1.BodySmall, Object.assign({ color: "secondary.contrastText", limit: false }, { children: [selected, " item(s) selected"] })), (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: closeBanner, sx: { color: 'secondary.contrastText', margin: 0, padding: 0 } }, { children: (0, jsx_runtime_1.jsx)(Icons_1.CloseIcon, { fontSize: "small" }) }))] })))] })), (0, jsx_runtime_1.jsx)(Box_1.Box, { children: rightSection })] }))), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-pane" }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-section" }, { children: data && ((0, jsx_runtime_1.jsxs)(ej2_react_treegrid_1.TreeGridComponent
                    // expanding={expanding}
                    // collapsing={collapsing}
                    // resizeStart={resizestart}
                    , Object.assign({ 
                        // expanding={expanding}
                        // collapsing={collapsing}
                        // resizeStart={resizestart}
                        actionBegin: actionBegin, dataBound: dataBound, actionComplete: actionComplete, headerCellInfo: headerCellInfo, rowSelected: rowSelected, rowDeselected: rowDeselected, rowDataBound: rowDataBound, height: height || tableHeight, ref: tableRef, dataSource: data, treeColumnIndex: treeColumnIndex, childMapping: childMappingKey, allowPdfExport: allowExports, allowExcelExport: allowExports, allowRowDragAndDrop: allowRowDragAndDrop, allowResizing: allowResizing, selectionSettings: selectionSettings, rowDrop: rowDrop, frozenColumns: frozenColumns, allowSorting: allowSorting, editSettings: editSettings, searchSettings: searchSettings, pageSettings: pageSettings, allowPaging: allowPaging, allowFiltering: allowFiltering, filterSettings: filterSettings, checkboxChange: checkboxChange, rowHeight: rowHeight }, { children: [(0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.ColumnsDirective, { children: children }), (0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Freeze, ej2_react_treegrid_1.RowDD, ej2_react_treegrid_1.Selection, ej2_react_treegrid_1.Sort, ej2_react_treegrid_1.Edit, ej2_react_treegrid_1.Page, ej2_react_treegrid_1.ExcelExport, ej2_react_treegrid_1.PdfExport, ej2_react_treegrid_1.Resize, ej2_react_treegrid_1.Filter, ej2_react_treegrid_1.ContextMenu] })] }))) })) }))] })));
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
    allowSorting: true,
    allowFiltering: true,
    filterSettings: {
        type: 'CheckBox'
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
    customFiltersFunction: (data) => { },
    loading: false,
    showToolbar: true,
    toolBarOptions: [],
    toolbarRightSection: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}),
    searchSettings: {
        hierarchyMode: 'Both'
    },
    hiddenProperty: 'is_hidden'
    // defaultFilter: 'equal'
};
//# sourceMappingURL=Table.js.map