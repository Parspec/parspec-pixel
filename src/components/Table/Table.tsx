import {
    TreeGridComponent,
    ColumnsDirective,
    Selection,
    RowDD,
    Inject,
    Freeze,
    Sort,
    Edit,
    Page,
    PdfExport,
    ExcelExport,
    Resize,
    TreeGridExcelExportProperties,
    TreeGridPdfExportProperties,
    PageSettingsModel,
    Filter,
    ContextMenu,
    EditSettingsModel,
    SearchSettingsModel
} from '@syncfusion/ej2-react-treegrid';
import { addClass, isNullOrUndefined, registerLicense } from '@syncfusion/ej2-base';

import './styles.css';
import { Box } from '../Box';
import {
    CheckBoxChangeEventArgs,
    FilterSettingsModel,
    getObject,
    HeaderCellInfoEventArgs,
    RowSelectingEventArgs,
    RowDeselectEventArgs,
    RowSelectEventArgs,
    SelectionSettingsModel
} from '@syncfusion/ej2-grids';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState, useMemo, useCallback } from 'react';
import { TextField } from '../TextField';
import { IconButton } from '../IconButton';
import { ControlPointDuplicateIcon, DeleteOutlineIcon, VisibilityOffIcon, FilterAltOffIcon, SearchIcon, AddIcon } from '../Icons';
import { Tooltip } from '../Tooltip';
import { InputAdornment } from '../InputAdornment';
import { SelectedItemsCount } from './SelectedItemsCount';

const license = window.localStorage.getItem('syncfusionLicense');
registerLicense(license!);

type ToolbarT = 'delete' | 'search' | 'clearFilters' | 'hide' | 'unhide' | 'selectedItems' | 'duplicate' | 'add';
export type ToolbarType = ToolbarT[];
export interface TableProps {
    children: React.ReactNode;
    data: Object[];
    childMappingKey?: string;
    allowExports?: boolean;
    allowRowDragAndDrop?: boolean;
    frozenColumns?: number;
    treeColumnIndex?: number;
    allowPaging?: boolean;
    pageSettings?: PageSettingsModel;
    allowResizing?: boolean;
    showToolbar?: boolean;
    toolBarOptions?: ToolbarType;
    excelExportProperties?: TreeGridExcelExportProperties;
    pdfExportProperties?: TreeGridPdfExportProperties;
    allowFiltering?: boolean;
    filterSettings?: FilterSettingsModel;
    selectionSettings?: SelectionSettingsModel;
    editSettings?: EditSettingsModel;
    onHideUnhide?: (data: Object[]) => void;
    onCheckboxChange?: (data: Object[]) => void;
    onAddDuplicates?: (data: Object[]) => void;
    onDragEnd?: (data: Object) => void;
    onAdd?: () => void;
    onEdit?: (data: Object) => void;
    onDelete?: (data: Object) => void;
    onSearch?: (data: Object) => void;
    onRowSelection?: (data: Object) => void;
    customFiltersFunction?: (data: Object) => void;
    dataBoundCallBack?: () => void;
    loading?: boolean;
    toolbarRightSection?: React.ReactNode;
    searchSettings?: SearchSettingsModel;
    hiddenProperty?: string;
    allowSorting?: boolean;
    rowHeight?: number;
    height?: number | string;
    // defaultFilter?: 'equal' | 'contains';
    tableKey?: number | string;
    selectedItemsBelowSearch?: boolean;
}

export const Table: React.FC<TableProps> = forwardRef((props, ref) => {
    const {
        children,
        data,
        childMappingKey,
        allowExports,
        allowRowDragAndDrop,
        frozenColumns,
        treeColumnIndex,
        allowPaging,
        pageSettings,
        allowResizing,
        allowSorting,
        showToolbar,
        toolBarOptions,
        height,
        allowFiltering,
        editSettings,
        filterSettings,
        onHideUnhide,
        onAdd,
        onAddDuplicates,
        onCheckboxChange,
        onDragEnd,
        onEdit,
        onSearch,
        onDelete,
        selectionSettings,
        onRowSelection,
        loading,
        toolbarRightSection,
        searchSettings,
        hiddenProperty,
        rowHeight,
        // defaultFilter,
        customFiltersFunction,
        dataBoundCallBack,
        tableKey,
        selectedItemsBelowSearch
    } = props;

    const tableRef = useRef<any>();
    const [selected, setSelectedForBanner] = useState(0);

    useEffect(() => {
        let obj = (document.getElementsByClassName('e-grid')[0] as any)?.ej2_instances?.[0]?.localeObj?.localeStrings;
        if (loading) {
            if (obj && obj?.EmptyRecord) {
                obj.EmptyRecord = '';
            }
            tableRef?.current?.showSpinner();
            tableRef?.current?.refresh();
        } else {
            tableRef?.current?.hideSpinner();
            if (!data.length && obj && !obj?.EmptyRecord.length) {
                obj.EmptyRecord = 'No records to display';
                tableRef?.current?.refresh();
            }
        }
        // tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    }, [loading]);

    let isEscPressed = false;
    let filterApplied = false;
    const actionComplete = (args: any) => {
        if (args?.requestType === 'filtering') {
            if (args?.action === 'filter') {
                filterApplied = true;
            } else if (args?.action === 'clearFilter') {
                filterApplied = false;
            }
        }
        if (args?.type === 'save') {
            onEdit!(args);
        }
        if (args?.requestType === 'searching') {
            onSearch!(args);
        }
        // if (args?.requestType !== 'refresh' && args?.requestType !== 'paging' && args?.requestType !== 'searching' && isNullOrUndefined(args.data)) {
        //     isEscPressed = true;
        // }
        // tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    };

    let multiSelectFilterVal: any = [];
    const actionBegin = (e: any) => {
        if (e.requestType === 'filtering' && !isNullOrUndefined(e.currentFilterObject) && isNullOrUndefined(e?.currentFilterObject?.value)) {
            e.cancel = true;
        }

        if (e.requestType === 'filterbeforeopen') {
            customFiltersFunction!(e);
            if (!tableRef?.current?.filterModule?.filteredResult?.length) {
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

    const rowDrop = (args: any) => {
        if (!args.dropPosition.length || args.dropPosition === 'Invalid') {
            args.cancel = true;
        }
        let notAllowed = false;
        const targetData = tableRef?.current?.getRowInfo(args?.target?.parentElement)?.rowData; //dropped data
        let data, parent;
        for (let i = 0; i < args.data.length; i++) {
            data = args.data[i];
            let error = '';
            if (args.dropPosition === 'middleSegment') {
                parent = targetData;
            } else {
                parent = targetData?.parentItem;
            }
            if (data?.type === 'section') {
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
            if (notAllowed) {
                if (args.data.length > 1) {
                    alert(
                        'Please note accessory can only be a child of product, product can only be a child of section and section cannot be a child of a product or accessory, please make sure that all your selected items follow the mentioned criteria'
                    );
                    break;
                } else {
                    alert(error);
                }
            }
            console.log('data=>', data, '\nparent=>', parent, '\narg=>', args, '\ntarget=>', targetData);
            if (!notAllowed) {
                onDragEnd!({ fromIndex: args.fromIndex, data: args.data[0] });
            }
        }
    };

    const checkboxChange = (args: CheckBoxChangeEventArgs) => {
        onCheckboxChange!(tableRef?.current?.getSelectedRecords());
        setSelectedForBanner(tableRef?.current?.getSelectedRecords()?.length);
    };
    const scrollTo = (id: number) => {
        try {
            const matchedElement = tableRef?.current?.flatData.find((value: any) => value.id === id);
            if (matchedElement) {
                const targetElement = tableRef.current.getRows()[matchedElement.index];
                if (targetElement) {
                    addClass([targetElement], 'e-highlightscroll');
                    const rowHeight = targetElement.scrollHeight;
                    tableRef.current.getContent().children[0].scrollTop = rowHeight * matchedElement.index;
                }
            } else {
                console.error('scroll to Id is not found');
            }
        } catch (err) {
            console.error('ScrollTo ', err);
        }
    };
    const rowSelected = (args: RowSelectEventArgs) => {
        onRowSelection!(tableRef.current.getSelectedRecords());
        setSelectedForBanner(tableRef?.current?.getSelectedRecords()?.length);
    };
    const rowDeselected = (args: RowDeselectEventArgs) => {
        onRowSelection!(tableRef.current.getSelectedRecords());
        setSelectedForBanner(tableRef?.current?.getSelectedRecords()?.length);
    };

    const rowDataBound = (args: any) => {
        if (getObject(hiddenProperty, args.data) === true) {
            (args.row as HTMLTableRowElement).style.opacity = '0.4';
        } else {
            (args.row as HTMLTableRowElement).style.opacity = '1';
        }
        if (selectionSettings?.type === 'Single') {
            addClass([args.row], 'singleSelect');
        }
        if (tableRef?.current?.getVisibleRecords()?.length !== 0) {
            (document.getElementById('_gridcontrol_content_table') as any).classList.remove('empty');
        }
    };

    useImperativeHandle(ref, () => {
        const clearSelection = () => {
            tableRef.current.clearSelection();
            setSelectedForBanner(() => 0);
            onCheckboxChange!([]);
        };
        const clearFiltering = () => {
            tableRef?.current?.clearFiltering();
        };
        const setMultiSelectVal = (val: any) => {
            multiSelectFilterVal = val;
        };
        const getMultiSelectVal = () => multiSelectFilterVal;
        return {
            clearSelection,
            setSelectedForBanner,
            scrollTo,
            clearFiltering,
            setMultiSelectVal,
            getMultiSelectVal
        };
    });

    const closeBanner = () => {
        setSelectedForBanner(() => 0);
        tableRef.current.clearSelection();
        onCheckboxChange!([]);
    };

    var headerCellInfo = function (args: HeaderCellInfoEventArgs) {
        if (args?.cell?.column?.allowSorting) {
            args?.node?.classList?.add('customicon');
        }
    };
    const disabled = (() => !tableRef?.current || tableRef?.current?.getSelectedRecords()?.length === 0)();

    const dataBound = (args: Object) => {
        if (tableRef?.current?.getVisibleRecords()?.length === 0) {
            (document.getElementById('_gridcontrol_content_table') as any).classList.add('empty');
        } else {
            dataBoundCallBack!();
        }
        tableRef.current.keyConfigs.upArrow = '';
        tableRef.current.keyConfigs.downArrow = '';
    };

    const rightSection = useMemo(() => toolbarRightSection, [toolbarRightSection]);

    const [tableHeight, setTableHeight] = useState<number>();
    const tableContainerRef = useCallback((node: HTMLDivElement) => {
        if (node !== null) {
            const toolbarHeight = showToolbar && toolbarContainerRef?.current ? toolbarContainerRef?.current?.offsetHeight : 0;
            const paginationHeight = allowPaging ? 47 : 0;
            const tableHeader = 42 + 10;
            if (node.offsetHeight) {
                setTableHeight(node.offsetHeight - toolbarHeight - paginationHeight - tableHeader);
            }
        }
        // tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    }, []);
    const toolbarContainerRef = useRef<any>();

    // const resizestart = () => {
    //     tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    // };
    // const collapsing = () => {
    //     tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    // };
    // const expanding = () => {
    //     tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    // };

    const rowSelecting = (args: RowSelectingEventArgs) => {
        if (isEscPressed) {
            args.cancel = true;
        }

        isEscPressed = false;
    };

    return (
        <Box position={'relative'} height={'100%'} width={'100%'} ref={tableContainerRef}>
            {showToolbar && (
                <Box display={'flex'} ref={toolbarContainerRef} justifyContent="space-between" alignItems={'flex-end'} mb={2} sx={loading ? { PointerEvent: 'none' } : {}}>
                    <Box display="flex" alignItems="center" gap={1}>
                        {toolBarOptions?.includes('search') && (
                            <Box width={300}>
                                <TextField
                                    label=""
                                    placeholder="Search..."
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon fontSize="small" />
                                            </InputAdornment>
                                        )
                                    }}
                                    size="small"
                                    onChange={(t: React.ChangeEvent<HTMLInputElement>) => {
                                        t.target.value = t?.target?.value?.replace(/[^a-zA-Z0-9-_ ]/g, '');
                                        tableRef.current.search(t?.target?.value?.replace(/[^a-zA-Z0-9-_ ]/g, '').trim());
                                    }}
                                />
                            </Box>
                        )}
                        {toolBarOptions?.includes('add') && (
                            <Tooltip title={'Add'}>
                                <Box>
                                    <IconButton onClick={() => onAdd!()}>
                                        <AddIcon fontSize="medium" />
                                    </IconButton>
                                </Box>
                            </Tooltip>
                        )}
                        {toolBarOptions?.includes('duplicate') && (
                            <Tooltip title={disabled ? 'Select Item(s) First' : 'Duplicate'}>
                                <Box>
                                    <IconButton onClick={() => onAddDuplicates!(tableRef.current.getSelectedRecords())} disabled={disabled}>
                                        <ControlPointDuplicateIcon fontSize="medium" />
                                    </IconButton>
                                </Box>
                            </Tooltip>
                        )}
                        {toolBarOptions?.includes('delete') && (
                            <Tooltip title={disabled ? 'Select Item(s) First' : 'Delete'}>
                                <Box>
                                    <IconButton
                                        disabled={disabled}
                                        onClick={() => {
                                            onDelete!(tableRef?.current?.getSelectedRecords());
                                        }}
                                    >
                                        <DeleteOutlineIcon fontSize="medium" />
                                    </IconButton>
                                </Box>
                            </Tooltip>
                        )}
                        {toolBarOptions?.includes('hide') && (
                            <Tooltip title={disabled ? 'Select Item(s) First' : 'Hide / Unhide'}>
                                <Box>
                                    <IconButton onClick={() => onHideUnhide!(tableRef.current.getSelectedRecords())} disabled={disabled}>
                                        <VisibilityOffIcon fontSize="medium" />
                                    </IconButton>
                                </Box>
                            </Tooltip>
                        )}
                        {toolBarOptions?.includes('clearFilters') && (
                            <Tooltip title="Clear Filter(s)">
                                <IconButton onClick={() => tableRef.current.clearFiltering()}>
                                    <FilterAltOffIcon fontSize="medium" />
                                </IconButton>
                            </Tooltip>
                        )}
                        {toolBarOptions?.includes('selectedItems') && selected > 0 && !selectedItemsBelowSearch && <SelectedItemsCount count={selected} closeBanner={closeBanner} />}
                    </Box>
                    <Box>{rightSection}</Box>
                </Box>
            )}
            {toolBarOptions?.includes('selectedItems') && selected > 0 && selectedItemsBelowSearch && (
                <Box mb={2} width={'max-content'}>
                    <SelectedItemsCount count={selected} closeBanner={closeBanner} />
                </Box>
            )}
            <Box className="control-pane">
                <Box className="control-section">
                    {data && (
                        <TreeGridComponent
                            // expanding={expanding}
                            // collapsing={collapsing}
                            // resizeStart={resizestart}
                            rowSelecting={rowSelecting}
                            actionBegin={actionBegin}
                            dataBound={dataBound}
                            actionComplete={actionComplete}
                            headerCellInfo={headerCellInfo}
                            rowSelected={rowSelected}
                            rowDeselected={rowDeselected}
                            rowDataBound={rowDataBound}
                            height={height || tableHeight}
                            ref={tableRef}
                            dataSource={data}
                            treeColumnIndex={treeColumnIndex}
                            childMapping={childMappingKey}
                            allowPdfExport={allowExports}
                            allowExcelExport={allowExports}
                            allowRowDragAndDrop={allowRowDragAndDrop}
                            allowResizing={allowResizing}
                            selectionSettings={selectionSettings}
                            rowDrop={rowDrop}
                            frozenColumns={frozenColumns}
                            allowSorting={allowSorting}
                            editSettings={editSettings}
                            searchSettings={searchSettings}
                            pageSettings={pageSettings}
                            allowPaging={allowPaging}
                            allowFiltering={allowFiltering}
                            filterSettings={filterSettings}
                            checkboxChange={checkboxChange}
                            rowHeight={rowHeight}
                            {...(tableKey && { key: tableKey })}
                        >
                            <ColumnsDirective>{children}</ColumnsDirective>
                            <Inject services={[Freeze, RowDD, Selection, Sort, Edit, Page, ExcelExport, PdfExport, Resize, Filter, ContextMenu]} />
                        </TreeGridComponent>
                    )}
                </Box>
            </Box>
        </Box>
    );
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
    onAddDuplicates: (data: Object[]) => {},
    onHideUnhide: (data: Object[]) => {},
    onCheckboxChange: (data: Object[]) => {},
    onDragEnd: (data: Object) => {},
    onAdd: () => {},
    onEdit: (data: Object) => {},
    onDelete: (data: Object) => {},
    onSearch: (data: Object) => {},
    onRowSelection: (data: Object) => {},
    dataBoundCallBack: () => {},
    customFiltersFunction: (data: Object) => {},
    loading: false,
    showToolbar: true,
    toolBarOptions: [],
    toolbarRightSection: <></>,
    searchSettings: {
        hierarchyMode: 'Both'
    },
    hiddenProperty: 'is_hidden',
    selectedItemsBelowSearch: false
    // defaultFilter: 'equal'
};
