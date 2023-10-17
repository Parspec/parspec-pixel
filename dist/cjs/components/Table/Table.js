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
const TextField_1 = require("../TextField");
const IconButton_1 = require("../IconButton");
const Icons_1 = require("../Icons");
const Tooltip_1 = require("../Tooltip");
const InputAdornment_1 = require("../InputAdornment");
const SelectedItemsCount_1 = require("./SelectedItemsCount");
const Typography_1 = require("../Typography");
const license = window.localStorage.getItem('syncfusionLicense');
(0, ej2_base_1.registerLicense)(license);
exports.Table = (0, react_1.forwardRef)((props, ref) => {
    const { children, data, childMappingKey, allowExports, allowRowDragAndDrop, frozenColumns, treeColumnIndex, allowPaging, pageSettings, allowResizing, allowSorting, showToolbar, toolBarOptions, height, allowFiltering, editSettings, filterSettings, onHideUnhide, onAdd, onAddDuplicates, onCheckboxChange, onDragEnd, onEdit, onSearch, onDelete, selectionSettings, onRowSelection, loading, toolbarRightSection, searchSettings, hiddenProperty, rowHeight, 
    // defaultFilter,
    customFiltersFunction, dataBoundCallBack, tableKey, selectedItemsBelowSearch, title, aggregateChildren, onCellEdit: handleCellEdit, onMove, cellSave, beforePaste, customQueryCellInfo } = props;
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
    let isEscPressed = false;
    let filterApplied = false;
    const actionComplete = (args) => {
        if ((args === null || args === void 0 ? void 0 : args.requestType) === 'filtering') {
            if ((args === null || args === void 0 ? void 0 : args.action) === 'filter') {
                filterApplied = true;
            }
            else if ((args === null || args === void 0 ? void 0 : args.action) === 'clearFilter') {
                filterApplied = false;
            }
        }
        if ((args === null || args === void 0 ? void 0 : args.type) === 'save') {
            onEdit(args);
        }
        if ((args === null || args === void 0 ? void 0 : args.requestType) === 'searching') {
            onSearch(args);
        }
        // if (args?.requestType !== 'refresh' && args?.requestType !== 'paging' && args?.requestType !== 'searching' && isNullOrUndefined(args.data)) {
        //     isEscPressed = true;
        // }
        // tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    };
    let multiSelectFilterVal = [];
    const actionBegin = (e) => {
        var _a, _b, _c, _d;
        if (e.requestType === 'filtering' && !(0, ej2_base_1.isNullOrUndefined)(e.currentFilterObject) && (0, ej2_base_1.isNullOrUndefined)((_a = e === null || e === void 0 ? void 0 : e.currentFilterObject) === null || _a === void 0 ? void 0 : _a.value)) {
            e.cancel = true;
        }
        if (e.requestType === 'filterbeforeopen') {
            customFiltersFunction(e);
            if (!((_d = (_c = (_b = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _b === void 0 ? void 0 : _b.filterModule) === null || _c === void 0 ? void 0 : _c.filteredResult) === null || _d === void 0 ? void 0 : _d.length)) {
                if (filterApplied === false) {
                    multiSelectFilterVal = [];
                }
            }
        }
        if (e.type === 'edit') {
            e.cell.getElementsByTagName('input')[0].setAttribute('maxLength', 255);
        }
        if (e.action === 'clearFilter') {
            //After clearing the filter we empty the value
            multiSelectFilterVal = [];
        }
    };
    const rowDrop = (args) => {
        var _a;
        let notAllowed = false;
        const droppedData = (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getRowInfo(args.target.parentElement).rowData; //dropped data
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
            notAllowed = true;
        }
        else if (args.dropPosition == 'topSegment' || args.dropPosition == 'bottomSegment') {
            //here prevent the drop for within child parent
            if (args.data[0].level != droppedData.level) {
                args.cancel = true;
                notAllowed = true;
            }
            else if (args.data[0].level != 0 && droppedData.level != 0) {
                if (args.data[0].level == droppedData.level &&
                    ((0, ej2_base_1.isNullOrUndefined)(args.data[0].hasChildRecords) || (0, ej2_base_1.isNullOrUndefined)(droppedData.hasChildRecords) || args.data[0].hasChildRecords == true) &&
                    droppedId != draggedId) {
                    args.cancel = true; //here we prevent drop the record in top of another parent's child
                    notAllowed = true;
                }
            }
        }
        //Here we prevent the drop for child position
        if (args.dropPosition == 'middleSegment') {
            if (!(0, ej2_base_1.isNullOrUndefined)(draggedId) && !(0, ej2_base_1.isNullOrUndefined)(droppedId)) {
                if (droppedId == draggedId || args.data[0].level == droppedData.level) {
                    args.cancel = true;
                    notAllowed = true;
                }
            }
            else if (args.data[0].level == droppedData.level || (args.data[0].level != droppedData.level && (0, ej2_base_1.isNullOrUndefined)(draggedId) && (0, ej2_base_1.isNullOrUndefined)(droppedId))) {
                args.cancel = true;
                notAllowed = true;
            }
        }
        if (!notAllowed) {
            onDragEnd({ fromIndex: args.fromIndex, data: args.data[0] });
        }
    };
    const checkboxChange = (args) => {
        var _a, _b, _c;
        onCheckboxChange((_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedRecords(), tableKey);
        setSelectedForBanner((_c = (_b = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _b === void 0 ? void 0 : _b.getSelectedRecords()) === null || _c === void 0 ? void 0 : _c.length);
    };
    const scrollTo = (id) => {
        var _a;
        try {
            const matchedElement = (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.flatData.find((value) => value.id === id);
            if (matchedElement) {
                const targetElement = tableRef.current.getRows()[matchedElement.index];
                if (targetElement) {
                    (0, ej2_base_1.addClass)([targetElement], 'e-highlightscroll');
                    const rowHeight = targetElement.scrollHeight;
                    tableRef.current.getContent().children[0].scrollTop = rowHeight * matchedElement.index;
                }
            }
            else {
                console.error('scroll to Id is not found');
            }
        }
        catch (err) {
            console.error('ScrollTo ', err);
        }
    };
    const rowSelected = (args) => {
        var _a, _b;
        onRowSelection(tableRef.current.getSelectedRecords());
        setSelectedForBanner((_b = (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedRecords()) === null || _b === void 0 ? void 0 : _b.length);
    };
    const rowDeselected = (args) => {
        var _a, _b;
        onRowSelection(tableRef.current.getSelectedRecords());
        setSelectedForBanner((_b = (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedRecords()) === null || _b === void 0 ? void 0 : _b.length);
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
        const clearFiltering = () => {
            var _a;
            (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.clearFiltering();
        };
        const setMultiSelectVal = (val) => {
            multiSelectFilterVal = val;
        };
        const getMultiSelectVal = () => multiSelectFilterVal;
        const refreshTable = () => {
            var _a;
            (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
        };
        const updateData = (data) => {
            if (tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) {
                tableRef.current.dataSource = data;
            }
        };
        const setRowData = (orderID, newRowData) => {
            var _a;
            (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.setRowData(orderID, newRowData);
        };
        const getData = () => {
            return tableRef.current.dataSource;
        };
        const endEdit = () => {
            tableRef.current.endEdit();
        };
        return {
            clearSelection,
            setSelectedForBanner,
            scrollTo,
            clearFiltering,
            setMultiSelectVal,
            getMultiSelectVal,
            refreshTable,
            updateData,
            setRowData,
            getData,
            endEdit
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
        else {
            dataBoundCallBack();
        }
        tableRef.current.keyConfigs.upArrow = '';
        tableRef.current.keyConfigs.downArrow = '';
    };
    const rightSection = (0, react_1.useMemo)(() => toolbarRightSection, [toolbarRightSection]);
    const [tableHeight, setTableHeight] = (0, react_1.useState)();
    const tableContainerRef = (0, react_1.useCallback)((node) => {
        var _a;
        if (node !== null) {
            const toolbarHeight = showToolbar && (toolbarContainerRef === null || toolbarContainerRef === void 0 ? void 0 : toolbarContainerRef.current) ? (_a = toolbarContainerRef === null || toolbarContainerRef === void 0 ? void 0 : toolbarContainerRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight : 0;
            const paginationHeight = allowPaging ? 47 : 0;
            const tableHeader = 42 + 10;
            if (node.offsetHeight) {
                setTableHeight(node.offsetHeight - toolbarHeight - paginationHeight - tableHeader);
            }
        }
        // tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    }, []);
    const toolbarContainerRef = (0, react_1.useRef)();
    const getPageSettings = (0, react_1.useMemo)(() => {
        const defaultRowHeight = rowHeight || 52;
        const calculatedTableHeight = Number(height) || tableHeight;
        const settings = Object.assign({}, pageSettings);
        if (calculatedTableHeight && calculatedTableHeight >= defaultRowHeight) {
            const totalRows = Math.ceil(calculatedTableHeight / defaultRowHeight);
            return Object.assign(Object.assign({}, settings), { pageSize: totalRows });
        }
        else {
            return Object.assign({}, settings);
        }
    }, [height, tableHeight, rowHeight]);
    // const resizestart = () => {
    //     tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    // };
    // const collapsing = () => {
    //     tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    // };
    // const expanding = () => {
    //     tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    // };
    const rowSelecting = (args) => {
        if (isEscPressed) {
            args.cancel = true;
        }
        isEscPressed = false;
    };
    function queryCellInfo(args) {
        args.cell.addEventListener('mousedown', mouseDownHandler);
        // args.cell.addEventListener('keydown', keydownHandler);
        customQueryCellInfo === null || customQueryCellInfo === void 0 ? void 0 : customQueryCellInfo(args);
    }
    let eventTriggered = false;
    keydownHandler;
    function keydownHandler(args) {
        var _a, _b, _c;
        var instance = document.getElementsByClassName('e-treegrid')[0].ej2_instances[0];
        var closesttd = args.target.closest('td');
        // debugger;
        if (args.keyCode == 13 && !(0, ej2_base_1.isNullOrUndefined)(closesttd.nextSibling)) {
            //to prevent default actions
            args.preventDefault();
            args.stopPropagation();
            //triggers while enter
            editACell(closesttd.nextSibling);
        }
        const isAlphabet = (args.keyCode >= 65 && args.keyCode <= 90) || (args.keyCode >= 97 && args.keyCode <= 122);
        const isNumeric = args.keyCode > 47 && args.keyCode < 58;
        if (isAlphabet || isNumeric) {
            if (!eventTriggered) {
                eventTriggered = true;
                //to prevent default actions
                args.preventDefault();
                args.stopPropagation();
                // triggers while typing alphabet
                var firstCell = (_a = instance.getSelectedRowCellIndexes()[0]) === null || _a === void 0 ? void 0 : _a.cellIndexes[0];
                var rowIndex = (_b = instance.getSelectedRowCellIndexes()[0]) === null || _b === void 0 ? void 0 : _b.rowIndex;
                if (!(0, ej2_base_1.isNullOrUndefined)(firstCell) && !(0, ej2_base_1.isNullOrUndefined)(rowIndex)) {
                    instance.editCell(rowIndex, (_c = instance === null || instance === void 0 ? void 0 : instance.getColumns()[firstCell]) === null || _c === void 0 ? void 0 : _c.field);
                }
            }
        }
        if (args.keyCode == 27 && instance.grid.isEdit) {
            //triggers while Escape
            eventTriggered = false;
            instance.grid.editModule.batchSave();
        }
    }
    function editACell(args) {
        var instance = document.getElementsByClassName('e-treegrid')[0].ej2_instances[0];
        instance.grid.editModule.editCell(parseInt(args.getAttribute('index')), instance.grid.getColumnByIndex(parseInt(args.getAttribute('data-colindex'))).field);
    }
    function mouseDownHandler(args) {
        // treegrid instance
        var instance = document.getElementsByClassName('e-treegrid')[0].ej2_instances[0];
        // to check checkbox on mouse click
        if (args.currentTarget.classList.contains('e-gridchkbox')) {
            instance.selectionSettings.mode = 'Row';
        }
        else {
            instance.selectionSettings.mode = 'Cell';
        }
    }
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ position: 'relative', height: '100%', width: '100%', ref: tableContainerRef }, { children: [showToolbar && ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex', ref: toolbarContainerRef, justifyContent: "space-between", alignItems: 'flex-end', mb: 2, sx: loading ? { PointerEvent: 'none' } : {} }, { children: [(0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: "flex", alignItems: "center", gap: 1 }, { children: [title && (0, jsx_runtime_1.jsx)(Typography_1.BodySmall, Object.assign({ color: "neutral.dark" }, { children: title })), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('search')) && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: 300 }, { children: (0, jsx_runtime_1.jsx)(TextField_1.TextField, { label: "", placeholder: "Search...", InputProps: {
                                        startAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.InputAdornment, Object.assign({ position: "start" }, { children: (0, jsx_runtime_1.jsx)(Icons_1.SearchIcon, { fontSize: "small" }) })))
                                    }, size: "small", onChange: (t) => {
                                        var _a, _b, _c, _d;
                                        t.target.value = (_b = (_a = t === null || t === void 0 ? void 0 : t.target) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.replace(/[^a-zA-Z0-9-_& ]/g, '');
                                        tableRef.current.search((_d = (_c = t === null || t === void 0 ? void 0 : t.target) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.replace(/[^a-zA-Z0-9-_& ]/g, '').trim());
                                    } }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('add')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: 'Add' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onAdd() }, { children: (0, jsx_runtime_1.jsx)(Icons_1.AddIcon, { fontSize: "medium" }) })) }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('duplicate')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabled ? 'Select Item(s) First' : 'Duplicate' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onAddDuplicates(tableRef.current.getSelectedRecords()), disabled: disabled }, { children: (0, jsx_runtime_1.jsx)(Icons_1.ControlPointDuplicateIcon, { fontSize: "medium" }) })) }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('move')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabled ? 'Select Item(s) First' : 'Change Section' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onMove(tableRef.current.getSelectedRecords()), disabled: disabled }, { children: (0, jsx_runtime_1.jsx)(Icons_1.MoveDownIcon, { fontSize: "medium" }) })) }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('hide')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabled ? 'Select Item(s) First' : 'Hide / Unhide' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onHideUnhide(tableRef.current.getSelectedRecords()), disabled: disabled }, { children: (0, jsx_runtime_1.jsx)(Icons_1.VisibilityOffIcon, { fontSize: "medium" }) })) }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('delete')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabled ? 'Select Item(s) First' : 'Delete' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ disabled: disabled, onClick: () => {
                                            var _a;
                                            onDelete((_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedRecords());
                                        } }, { children: (0, jsx_runtime_1.jsx)(Icons_1.DeleteOutlineIcon, { fontSize: "medium" }) })) }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('clearFilters')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: "Clear Filter(s)" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => tableRef.current.clearFiltering() }, { children: (0, jsx_runtime_1.jsx)(Icons_1.FilterAltOffIcon, { fontSize: "medium" }) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('selectedItems')) && selected > 0 && !selectedItemsBelowSearch && (0, jsx_runtime_1.jsx)(SelectedItemsCount_1.SelectedItemsCount, { count: selected, closeBanner: closeBanner })] })), (0, jsx_runtime_1.jsx)(Box_1.Box, { children: rightSection })] }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('selectedItems')) && selected > 0 && selectedItemsBelowSearch && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mb: 2, width: 'max-content' }, { children: (0, jsx_runtime_1.jsx)(SelectedItemsCount_1.SelectedItemsCount, { count: selected, closeBanner: closeBanner }) }))), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-pane" }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-section" }, { children: data && ((0, jsx_runtime_1.jsxs)(ej2_react_treegrid_1.TreeGridComponent
                    // expanding={expanding}
                    // collapsing={collapsing}
                    // resizeStart={resizestart}
                    , Object.assign({ 
                        // expanding={expanding}
                        // collapsing={collapsing}
                        // resizeStart={resizestart}
                        rowSelecting: rowSelecting, actionBegin: actionBegin, dataBound: dataBound, actionComplete: actionComplete, cellEdit: handleCellEdit, headerCellInfo: headerCellInfo, rowSelected: rowSelected, rowDeselected: rowDeselected, rowDataBound: rowDataBound, height: height || tableHeight, ref: tableRef, dataSource: data, treeColumnIndex: treeColumnIndex, childMapping: childMappingKey, allowPdfExport: allowExports, allowExcelExport: allowExports, allowRowDragAndDrop: allowRowDragAndDrop, allowResizing: allowResizing, selectionSettings: selectionSettings, rowDrop: rowDrop, frozenColumns: frozenColumns, allowSorting: allowSorting, editSettings: editSettings, searchSettings: searchSettings, pageSettings: getPageSettings, allowPaging: allowPaging, allowFiltering: allowFiltering, filterSettings: filterSettings, checkboxChange: checkboxChange, rowHeight: rowHeight }, (tableKey && { key: tableKey }), { queryCellInfo: queryCellInfo, cellSave: cellSave, beforePaste: beforePaste }, { children: [(0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.ColumnsDirective, { children: children }), aggregateChildren && (0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.AggregatesDirective, { children: aggregateChildren }), (0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Freeze, ej2_react_treegrid_1.RowDD, ej2_react_treegrid_1.Selection, ej2_react_treegrid_1.Sort, ej2_react_treegrid_1.Edit, ej2_react_treegrid_1.Page, ej2_react_treegrid_1.ExcelExport, ej2_react_treegrid_1.PdfExport, ej2_react_treegrid_1.Resize, ej2_react_treegrid_1.Filter, ej2_react_treegrid_1.ContextMenu, ej2_react_treegrid_1.Aggregate] })] }))) })) }))] })));
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
    onAdd: () => { },
    onEdit: (data) => { },
    onDelete: (data) => { },
    onSearch: (data) => { },
    onRowSelection: (data) => { },
    customQueryCellInfo: (data) => { },
    dataBoundCallBack: () => { },
    customFiltersFunction: (data) => { },
    loading: false,
    showToolbar: true,
    toolBarOptions: [],
    toolbarRightSection: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}),
    searchSettings: {
        hierarchyMode: 'Both'
    },
    hiddenProperty: 'is_hidden',
    selectedItemsBelowSearch: false
    // defaultFilter: 'equal'
};
//# sourceMappingURL=Table.js.map