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
    customFiltersFunction, dataBoundCallBack, tableKey, selectedItemsBelowSearch, title, aggregateChildren, onMove, cellSave, beforePaste, cellSaved, customQueryCellInfo, enableImmutableMode, enableCopyPaste } = props;
    const tableRef = (0, react_1.useRef)();
    const [selected, setSelectedForBanner] = (0, react_1.useState)(0);
    const [isCopyPasteEnable, setCopyPasteEnable] = (0, react_1.useState)(false);
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
        var _a, _b, _c, _d, _e;
        if (!args.dropPosition.length || args.dropPosition === 'Invalid') {
            args.cancel = true;
        }
        let notAllowed = false;
        const targetData = (_c = (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getRowInfo((_b = args === null || args === void 0 ? void 0 : args.target) === null || _b === void 0 ? void 0 : _b.parentElement)) === null || _c === void 0 ? void 0 : _c.rowData; //dropped data
        let data;
        for (let i = 0; i < args.data.length; i++) {
            data = args.data[i];
            let error = '';
            // const isProduct = data?.type === 'product';
            const isMiddleSegment = args.dropPosition === 'middleSegment';
            const parent = isMiddleSegment ? targetData : targetData === null || targetData === void 0 ? void 0 : targetData.parentItem;
            // Check if selected records has child - PREVENT 2 Level Nesting
            // if (data?.hasChildRecords && parent?.hasChildRecords) {
            //     args.cancel = true;
            //     notAllowed = true;
            //     error += `Nested ${data.type} can not be a child of Nested ${parent.type}`;
            // }
            // if (parent?.parentItem) {
            //     args.cancel = true;
            //     notAllowed = true;
            //     error += `${isProduct ? 'Product' : 'Nested accessories'} can not be a child of Nested ${parent.type}`;
            // }
            // if (isMiddleSegment) {
            //     if (parent?.type === 'accessories') {
            //         args.cancel = true;
            //         notAllowed = true;
            //         error += `${data.type} can not be a child of ${parent.type}`;
            //     } else if (parent?.parentItem) {
            //         args.cancel = true;
            //         notAllowed = true;
            //         error += `${isProduct ? 'Product' : 'Nested accessories'} can not be a child of Nested ${parent.type}`;
            //     } else if (data?.hasChildRecords && parent?.hasChildRecords) {
            //         args.cancel = true;
            //         notAllowed = true;
            //         error += `Nested ${isProduct ? 'Product' : data.type} can not be a child of Nested ${parent.type}`;
            //     }
            // } else if (isProduct && parent?.type === 'accessories') {
            //     args.cancel = true;
            //     notAllowed = true;
            //     error += `${data.type} can not be a child of ${parent.type}`;
            // }
            if ((data === null || data === void 0 ? void 0 : data.type) === 'product') {
                if ((parent === null || parent === void 0 ? void 0 : parent.type) === 'accessories' && (parent === null || parent === void 0 ? void 0 : parent.type) !== undefined) {
                    args.cancel = true;
                    notAllowed = true;
                    error += `${data.type} can not be a child of ${parent === null || parent === void 0 ? void 0 : parent.type}`;
                }
                else if (((_d = data === null || data === void 0 ? void 0 : data.childRecords) === null || _d === void 0 ? void 0 : _d.length) > 1 && args.dropPosition === 'middleSegment') {
                    // handle if selected item is a nested Product
                    args.cancel = true;
                    notAllowed = true;
                    error += `Nested Product can not be a child of ${parent === null || parent === void 0 ? void 0 : parent.type}`;
                }
                else if ((parent === null || parent === void 0 ? void 0 : parent.parentItem) && args.dropPosition === 'middleSegment') {
                    // Drop location is nested child .
                    args.cancel = true;
                    notAllowed = true;
                    error += `Product can not be a child of Nested ${parent === null || parent === void 0 ? void 0 : parent.type}`;
                }
                else if ((data === null || data === void 0 ? void 0 : data.hasChildRecords) && (parent === null || parent === void 0 ? void 0 : parent.hasChildRecords)) {
                    args.cancel = true;
                    notAllowed = true;
                    error += `Nested ${data.type} can not be a child of Nested ${parent === null || parent === void 0 ? void 0 : parent.type}`;
                }
            }
            else {
                if ((parent === null || parent === void 0 ? void 0 : parent.type) === 'accessories' && (parent === null || parent === void 0 ? void 0 : parent.type) !== undefined) {
                    args.cancel = true;
                    notAllowed = true;
                    error += `${data.type} can not be a child of ${parent === null || parent === void 0 ? void 0 : parent.type}`;
                }
                else if (((_e = data === null || data === void 0 ? void 0 : data.childRecords) === null || _e === void 0 ? void 0 : _e.length) > 1 && args.dropPosition === 'middleSegment') {
                    // handle if selected item is a nested Product
                    args.cancel = true;
                    notAllowed = true;
                    error += `Nested accessories can not be a child of ${parent === null || parent === void 0 ? void 0 : parent.type}`;
                }
                else if ((parent === null || parent === void 0 ? void 0 : parent.parentItem) && args.dropPosition === 'middleSegment') {
                    // Drop location is nested child .
                    args.cancel = true;
                    notAllowed = true;
                    error += `${data.type} can not be a child of Nested ${parent === null || parent === void 0 ? void 0 : parent.type}`;
                }
            }
            if (notAllowed) {
                if (args.data.length > 1) {
                    alert('Please note accessories can only be a child of product, product can only be a child of section and section cannot be a child of a product or accessories, please make sure that all your selected items follow the mentioned criteria');
                    break;
                }
                else {
                    alert(error);
                }
            }
            console.log('data=>', data, '\nparent=>', parent, '\narg=>', args, '\ntarget=>', targetData);
            if (!notAllowed) {
                onDragEnd({ fromIndex: args.fromIndex, dropIndex: args.dropIndex, data: args.data[0] });
            }
        }
        /** if (data?.type === 'section') {
                if (parent?.type !== undefined) {
                    args.cancel = true;
                    notAllowed = true;
                    error += `${data.type} can not be a child of ${parent?.type}`;
                }
            } else if (data?.type === 'product') {
                if (parent?.type !== 'section' && parent?.type !== undefined) {
                    args.cancel = true;
                    notAllowed = true;
                    error += `${data.type} can not be a child of ${parent?.type}`;
                }
            } else {
                if (parent?.type !== 'product' && parent?.type !== undefined) {
                    args.cancel = true;
                    notAllowed = true;
                    error += `${data.type} can not be a child of ${parent?.type}`;
                }
            }
            if (data?.type === 'section') {
                if (parent?.type !== undefined) {
                    args.cancel = true;
                    notAllowed = true;
                    error += `${data.type} can not be a child of ${parent?.type}`;
                }
            }
            if(data?.childRecords ){

            } */
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
        const nextCell = (args) => {
            var _a, _b;
            const instan = tableRef.current;
            instan.grid.editModule.batchSave();
            var firstCell = parseInt((_a = args === null || args === void 0 ? void 0 : args.cell) === null || _a === void 0 ? void 0 : _a.getAttribute('index'));
            var colName = (_b = instan.getVisibleColumns()[args.column.index + 1]) === null || _b === void 0 ? void 0 : _b.field;
            setTimeout(() => {
                instan.editCell(firstCell, colName);
            }, 50);
        };
        const getBatchChanges = () => tableRef.current.getBatchChanges();
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
            endEdit,
            nextCell,
            getBatchChanges,
            grid: tableRef.current.grid
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
        if (node !== null) {
            function handleResize(entries) {
                var _a, _b;
                const currentNode = ((_a = entries === null || entries === void 0 ? void 0 : entries[0]) === null || _a === void 0 ? void 0 : _a.target) || node;
                const toolbarHeight = showToolbar && (toolbarContainerRef === null || toolbarContainerRef === void 0 ? void 0 : toolbarContainerRef.current) ? (_b = toolbarContainerRef === null || toolbarContainerRef === void 0 ? void 0 : toolbarContainerRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight : 0;
                if (currentNode.clientHeight) {
                    setTableHeight(currentNode.clientHeight - toolbarHeight - 8);
                }
            }
            const resiveObserver = new ResizeObserver(handleResize);
            resiveObserver.observe(node);
            handleResize();
        }
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
    // };cellSaved
    // const cellSaved = (args: any) => {
    //     if (args.previousValue != undefined && args.previousValue != args.value) {
    //         // var instance = (document.getElementsByClassName('e-treegrid')[0] as any).ej2_instances[0];
    //         // instance.grid.editModule.batchSave();
    //         // var firstCell = parseInt(args?.cell?.getAttribute('index'));
    //         // var colName = instance.getColumns()[args.column.index + 1]?.field;
    //         // setTimeout(() => {
    //         //     instance.editCell(firstCell, colName);
    //         // }, 50);
    //         const instan = tableRef.current;
    //         instan.grid.editModule.batchSave();
    //         var firstCell = parseInt(args?.cell?.getAttribute('index'));
    //         var colName = instan.getColumns()[args.column.index + 1]?.field;
    //         setTimeout(() => {
    //             instan.editCell(firstCell, colName);
    //         }, 50);
    //         console.log('cellSaved', tableRef.current.grid);
    //     }
    // };
    const rowSelecting = (args) => {
        if (isEscPressed) {
            args.cancel = true;
        }
        isEscPressed = false;
    };
    function queryCellInfo(args) {
        // args.cell.addEventListener('mousedown', mouseDownHandler);
        // args.cell.addEventListener('keydown', keydownHandler);
        customQueryCellInfo === null || customQueryCellInfo === void 0 ? void 0 : customQueryCellInfo(args);
    }
    queryCellInfo;
    let eventTriggered = false;
    keydownHandler;
    function keydownHandler(args) {
        var _a;
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
        if (args.keyCode == 9) {
            // triggers while pressing tab
            var firstCell = parseInt(closesttd === null || closesttd === void 0 ? void 0 : closesttd.getAttribute('index'));
            var rowIndex = (_a = instance === null || instance === void 0 ? void 0 : instance.getVisibleColumns()[args.currentTarget.cellIndex - 1]) === null || _a === void 0 ? void 0 : _a.field;
            instance.grid.editModule.batchSave();
            setTimeout(() => {
                instance.editCell(firstCell, rowIndex);
            }, 50);
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
                // var firstCell = instance.getSelectedRowCellIndexes()[0]?.cellIndexes[0] as any;
                // var rowIndex: any = instance.getSelectedRowCellIndexes()[0]?.rowIndex as any;
                // if (!isNullOrUndefined(firstCell) && !isNullOrUndefined(rowIndex)) {
                //     instance.editCell(rowIndex, instance?.getColumns()[firstCell]?.field);
                // }
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
    // const beginEdit = (args: any) => {
    //     console.log(args, 'args');
    // };
    function mouseDownHandler(args) {
        // treegrid instance
        if (enableCopyPaste) {
            if (args.currentTarget.classList.contains('e-gridchkbox')) {
                tableRef.current.selectionSettings = {
                    checkboxOnly: true,
                    persistSelection: true,
                    type: 'Multiple',
                    mode: 'Row',
                    cellSelectionMode: 'Flow'
                };
                // (args.currentTarget.classList
                // let columnName = { type: 'checkbox', width: '50' };
                if (!args.currentTarget.classList.contains('e-gridchkbox')) {
                    // tableRef.current.columns.splice(0, 0, columnName); //Add the columns
                    tableRef.current.refreshColumns();
                    tableRef.current.grid.freezeRefresh();
                }
            }
            else {
                tableRef.current.selectionSettings = {
                    type: 'Multiple',
                    mode: 'Cell',
                    cellSelectionMode: 'Box',
                    checkboxOnly: false
                };
                // tableRef.current.treeColumnIndex = 1;
                if (args.currentTarget.classList.contains('e-gridchkbox')) {
                    // tableRef.current.columns.splice(0, 1); //Add the columns
                    tableRef.current.refreshColumns();
                    tableRef.current.grid.freezeRefresh();
                }
            }
        }
    }
    mouseDownHandler;
    const clickHandler = (e) => {
        var _a, _b, _c, _d, _e;
        if (((_b = (_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.grid) === null || _b === void 0 ? void 0 : _b.isEdit) && !((_e = (_d = (_c = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _c === void 0 ? void 0 : _c.grid) === null || _d === void 0 ? void 0 : _d.element) === null || _e === void 0 ? void 0 : _e.contains(e === null || e === void 0 ? void 0 : e.target))) {
            // save the record if Grid in edit state
            tableRef.current.endEdit();
        }
    };
    const onLoad = () => {
        // bind click event on outside click in body
        window.addEventListener('click', clickHandler);
    };
    // function recurse(colIndex: number) {
    //     colIndex = colIndex + 1;
    //     return colIndex;
    // }
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ position: 'relative', height: '100%', width: '100%', ref: tableContainerRef }, { children: [showToolbar && ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex', ref: toolbarContainerRef, justifyContent: "space-between", alignItems: 'flex-end', mb: 2, sx: loading ? { PointerEvent: 'none' } : {} }, { children: [(0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: "flex", alignItems: "center", gap: 1 }, { children: [title && (0, jsx_runtime_1.jsx)(Typography_1.BodySmall, Object.assign({ color: "neutral.dark" }, { children: title })), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('search')) && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: 300 }, { children: (0, jsx_runtime_1.jsx)(TextField_1.TextField, { label: "", placeholder: "Search...", InputProps: {
                                        startAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.InputAdornment, Object.assign({ position: "start" }, { children: (0, jsx_runtime_1.jsx)(Icons_1.SearchIcon, { fontSize: "small" }) })))
                                    }, size: "small", onChange: (t) => {
                                        var _a, _b, _c, _d;
                                        t.target.value = (_b = (_a = t === null || t === void 0 ? void 0 : t.target) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.replace(/[^a-zA-Z0-9-_& ]/g, '');
                                        tableRef.current.search((_d = (_c = t === null || t === void 0 ? void 0 : t.target) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.replace(/[^a-zA-Z0-9-_& ]/g, '').trim());
                                    } }) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('add')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: 'Add' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ "data-testid": "add-btn" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onAdd() }, { children: (0, jsx_runtime_1.jsx)(Icons_1.AddIcon, { fontSize: "medium" }) })) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('duplicate')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabled ? 'Select Item(s) First' : 'Duplicate' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ "data-testid": "duplicate-btn" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onAddDuplicates(tableRef.current.getSelectedRecords()), disabled: disabled }, { children: (0, jsx_runtime_1.jsx)(Icons_1.ControlPointDuplicateIcon, { fontSize: "medium" }) })) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('move')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabled ? 'Select Item(s) First' : 'Change Section' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ "data-testid": "move-btn" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onMove(tableRef.current.getSelectedRecords()), disabled: disabled }, { children: (0, jsx_runtime_1.jsx)(Icons_1.MoveDownIcon, { fontSize: "medium" }) })) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('hide')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabled ? 'Select Item(s) First' : 'Hide / Unhide' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ "data-testid": "hide-btn" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onHideUnhide(tableRef.current.getSelectedRecords()), disabled: disabled }, { children: (0, jsx_runtime_1.jsx)(Icons_1.VisibilityOffIcon, { fontSize: "medium" }) })) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('delete')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: disabled ? 'Select Item(s) First' : 'Delete' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ "data-testid": "delete-btn" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ disabled: disabled, onClick: () => {
                                            var _a;
                                            onDelete((_a = tableRef === null || tableRef === void 0 ? void 0 : tableRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedRecords());
                                        } }, { children: (0, jsx_runtime_1.jsx)(Icons_1.DeleteOutlineIcon, { fontSize: "medium" }) })) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('clearFilters')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: "Clear Filter(s)" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => tableRef.current.clearFiltering() }, { children: (0, jsx_runtime_1.jsx)(Icons_1.FilterAltOffIcon, { fontSize: "medium" }) })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('copy/paste')) && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ title: "Copy paste" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: (args) => {
                                        setCopyPasteEnable(!isCopyPasteEnable);
                                        console.log(args, 'args', args.target.value);
                                        if (args.target.innerText === 'Enable') {
                                            // tableRef.current.allowRowDragAndDrop = false;
                                            tableRef.current.selectionSettings = {
                                                type: 'Multiple',
                                                mode: 'Cell',
                                                cellSelectionMode: 'Box',
                                                checkboxOnly: false
                                            };
                                            // tableRef.current.treeColumnIndex = 1;
                                            if (tableRef.current.getColumns()[0].type == 'checkbox') {
                                                tableRef.current.columns.splice(0, 1); //Add the columns
                                                tableRef.current.refreshColumns();
                                                tableRef.current.grid.freezeRefresh();
                                            }
                                        }
                                        if (args.target.innerText === 'Disable') {
                                            tableRef.current.treeColumnIndex = 2;
                                            tableRef.current.allowRowDragAndDrop = true;
                                            tableRef.current.selectionSettings = {
                                                checkboxOnly: true,
                                                persistSelection: true,
                                                type: 'Multiple',
                                                mode: 'Row',
                                                cellSelectionMode: 'Flow'
                                            };
                                            let columnName = { type: 'checkbox', width: '50' };
                                            if (tableRef.current.getColumns()[0].type != 'checkbox') {
                                                tableRef.current.columns.splice(0, 0, columnName); //Add the columns
                                                tableRef.current.refreshColumns();
                                                tableRef.current.grid.freezeRefresh();
                                            }
                                        }
                                    } }, { children: isCopyPasteEnable ? 'Disable' : 'Enable' })) }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('selectedItems')) && selected > 0 && !selectedItemsBelowSearch && (0, jsx_runtime_1.jsx)(SelectedItemsCount_1.SelectedItemsCount, { count: selected, closeBanner: closeBanner })] })), (0, jsx_runtime_1.jsx)(Box_1.Box, { children: rightSection })] }))), (toolBarOptions === null || toolBarOptions === void 0 ? void 0 : toolBarOptions.includes('selectedItems')) && selected > 0 && selectedItemsBelowSearch && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mb: 2, width: 'max-content' }, { children: (0, jsx_runtime_1.jsx)(SelectedItemsCount_1.SelectedItemsCount, { count: selected, closeBanner: closeBanner }) }))), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-pane" }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "control-section", height: height || tableHeight }, { children: data && ((0, jsx_runtime_1.jsxs)(ej2_react_treegrid_1.TreeGridComponent
                    // expanding={expanding}
                    // collapsing={collapsing}
                    // resizeStart={resizestart}
                    , Object.assign({ 
                        // expanding={expanding}
                        // collapsing={collapsing}
                        // resizeStart={resizestart}
                        enableImmutableMode: enableImmutableMode, load: onLoad, rowSelecting: rowSelecting, actionBegin: actionBegin, dataBound: dataBound, actionComplete: actionComplete, 
                        // cellEdit={handleCellEdit}
                        headerCellInfo: headerCellInfo, rowSelected: rowSelected, rowDeselected: rowDeselected, rowDataBound: rowDataBound, height: "100%", ref: tableRef, dataSource: data, treeColumnIndex: treeColumnIndex, childMapping: childMappingKey, allowPdfExport: allowExports, allowExcelExport: allowExports, allowRowDragAndDrop: allowRowDragAndDrop, allowResizing: allowResizing, selectionSettings: selectionSettings, rowDrop: rowDrop, frozenColumns: frozenColumns, allowSorting: allowSorting, editSettings: editSettings, searchSettings: searchSettings, pageSettings: getPageSettings, allowPaging: allowPaging, allowFiltering: allowFiltering, filterSettings: filterSettings, checkboxChange: checkboxChange, rowHeight: rowHeight }, (tableKey && { key: tableKey }), { 
                        // queryCellInfo={queryCellInfo}
                        // beforeBatchSave={beginEdit}
                        // batchAdd={beginEdit}
                        cellSaved: cellSaved, cellSave: cellSave, beforePaste: beforePaste }, { children: [(0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.ColumnsDirective, { children: children }), aggregateChildren && (0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.AggregatesDirective, { children: aggregateChildren }), (0, jsx_runtime_1.jsx)(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Freeze, ej2_react_treegrid_1.RowDD, ej2_react_treegrid_1.Selection, ej2_react_treegrid_1.Sort, ej2_react_treegrid_1.Edit, ej2_react_treegrid_1.Page, ej2_react_treegrid_1.ExcelExport, ej2_react_treegrid_1.PdfExport, ej2_react_treegrid_1.Resize, ej2_react_treegrid_1.Filter, ej2_react_treegrid_1.ContextMenu, ej2_react_treegrid_1.Aggregate] })] }))) })) }))] })));
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
    // batchSave: (data: Object) => {},
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