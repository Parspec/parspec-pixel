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
    AddEventArgs,
    CheckBoxChangeEventArgs,
    DeleteEventArgs,
    EditEventArgs,
    FilterEventArgs,
    FilterSettingsModel,
    getObject,
    HeaderCellInfoEventArgs,
    PageEventArgs,
    RowDeselectEventArgs,
    RowSelectEventArgs,
    SaveEventArgs,
    SearchEventArgs,
    SelectionSettingsModel,
    SortEventArgs
} from '@syncfusion/ej2-grids';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState, useMemo } from 'react';
import { TextField } from '../TextField';
import { IconButton } from '../IconButton';
import { CloseIcon, ControlPointDuplicateIcon, DeleteOutlineIcon, VisibilityOffIcon, FilterAltOffIcon, SearchIcon, SaveAsIcon } from '../Icons';
import { BodySmall } from '../Typography';
import { Tooltip } from '../Tooltip';
import { InputAdornment } from '../InputAdornment';
import { Button } from '../Button';

const license = window.localStorage.getItem('syncfusionLicense');
registerLicense(license!);

type ToolbarT = 'delete' | 'search' | 'clearFilters' | 'hide' | 'unhide' | 'selectedItems' | 'duplicate' | 'save';
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
    onAdd?: (data: Object) => void;
    onEdit?: (data: Object) => void;
    onDelete?: (data: Object) => void;
    onSearch?: (data: Object) => void;
    onRowSelection?: (data: Object) => void;
    customFiltersFunction?: (data: Object) => void;
    loading?: boolean;
    toolbarRightSection?: React.ReactNode;
    searchSettings?: SearchSettingsModel;
    hiddenProperty?: string;
    allowSorting?: boolean;
    rowHeight?: number;
    height?: number | string;
    // defaultFilter?: 'equal' | 'contains';
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
        customFiltersFunction
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

    const actionComplete = (args: any) => {
        if (args?.type === 'save') {
            const field = args?.column?.field;
            const previousData = args?.previousData;
            const newData = args?.data?.[field];
            if (previousData !== newData) {
                onEdit!(args);
            }
        }
        if (args?.requestType === 'searching') {
            onSearch!(args);
        }
        // tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    };

    const actionBegin = (e: any) => {
        if (e.requestType === 'filtering' && !isNullOrUndefined(e.currentFilterObject) && isNullOrUndefined(e?.currentFilterObject?.value)) {
            e.cancel = true;
        }

        if (e.requestType === 'filterbeforeopen') {
            customFiltersFunction!(e);
        }
        if (e.type === 'edit') {
            e.cell.getElementsByTagName('input')[0].setAttribute('maxLength', 255);
        }
    };

    const rowDrop = (args: any) => {
        let notAllowed = false;
        const droppedData = tableRef?.current?.getRowInfo(args.target.parentElement).rowData; //dropped data
        let droppedId, draggedId;
        //here collect the taskid value based on parent records
        if (!isNullOrUndefined(droppedData)) {
            if (!isNullOrUndefined(droppedData.parentItem) && args.data[0].parentItem != null) {
                droppedId = droppedData.parentItem.taskID; //dropped data
                draggedId = args.data[0].parentItem.taskID; // dragged data
            } else if (droppedData.hasChildRecords == true) {
                droppedId = droppedData.taskID; //dropped data
                draggedId = args.data[0].taskID; // dragged data
            }
        }
        //Here we prevent for top / bottom position
        if (droppedId != draggedId && args.data[0].level != droppedData.level) {
            args.cancel = true;
            notAllowed = true;
        } else if (args.dropPosition == 'topSegment' || args.dropPosition == 'bottomSegment') {
            //here prevent the drop for within child parent
            if (args.data[0].level != droppedData.level) {
                args.cancel = true;
                notAllowed = true;
            } else if (args.data[0].level != 0 && droppedData.level != 0) {
                if (
                    args.data[0].level == droppedData.level &&
                    (isNullOrUndefined(args.data[0].hasChildRecords) || isNullOrUndefined(droppedData.hasChildRecords) || args.data[0].hasChildRecords == true) &&
                    droppedId != draggedId
                ) {
                    args.cancel = true; //here we prevent drop the record in top of another parent's child
                    notAllowed = true;
                }
            }
        }
        //Here we prevent the drop for child position
        if (args.dropPosition == 'middleSegment') {
            if (!isNullOrUndefined(draggedId) && !isNullOrUndefined(droppedId)) {
                if (droppedId == draggedId || args.data[0].level == droppedData.level) {
                    args.cancel = true;
                    notAllowed = true;
                }
            } else if (args.data[0].level == droppedData.level || (args.data[0].level != droppedData.level && isNullOrUndefined(draggedId) && isNullOrUndefined(droppedId))) {
                args.cancel = true;
                notAllowed = true;
            }
        }
        if (!notAllowed) {
            onDragEnd!({ fromIndex: args.fromIndex, data: args.data[0] });
        }
    };

    const checkboxChange = (args: CheckBoxChangeEventArgs) => {
        onCheckboxChange!(tableRef?.current?.getSelectedRecords());
        setSelectedForBanner(tableRef?.current?.getSelectedRecords()?.length);
    };
    const rowSelected = (args: RowSelectEventArgs) => {
        onRowSelection!(tableRef.current.getSelectedRecords());
    };
    const rowDeselected = (args: RowDeselectEventArgs) => {
        onRowSelection!(tableRef.current.getSelectedRecords());
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
        return {
            clearSelection,
            setSelectedForBanner
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
        }
    };

    const rightSection = useMemo(() => toolbarRightSection, [toolbarRightSection]);

    const [tableHeight, setTableHeight] = useState<number>();
    const tableContainerRef = useRef<any>();
    const toolbarContainerRef = useRef<any>();

    useEffect(() => {
        const toolbarHeight = showToolbar && toolbarContainerRef?.current ? toolbarContainerRef?.current?.offsetHeight : 0;
        const paginationHeight = allowPaging ? 47 : 0;
        const tableHeader = 42 + 10;
        if (tableContainerRef?.current?.offsetHeight) {
            setTableHeight(tableContainerRef?.current?.offsetHeight - toolbarHeight - paginationHeight - tableHeader);
        }
        // tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    }, [[tableContainerRef?.current]]);

    // const resizestart = () => {
    //     tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    // };
    // const collapsing = () => {
    //     tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    // };
    // const expanding = () => {
    //     tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    // };
    let treegridObj;
    const load = () => {
        treegridObj = (document.getElementsByClassName('e-treegrid')[0] as any).ej2_instances[0];
        let instance = treegridObj;

        if (instance != null) {
            instance.element.addEventListener('mousedown', function (e: any) {
                if (
                    e.target.closest('td') !== null &&
                    e.target.closest('td').classList.contains('e-rowcell') &&
                    !e.target.classList.contains('e-treegridexpand') &&
                    !e.target.classList.contains('e-treegridcollapse') &&
                    e.target.closest('td').getAttribute('aria-colIndex') !== null
                ) {
                    let target = e.target.closest('td');
                    if (instance.grid.isEdit && !target.classList.contains('e-editedbatchcell') && !document.getElementsByClassName('e-addedrow').length) {
                        instance.grid.saveCell(); // calling saveCell method
                    }
                    if (!instance.grid.isEdit) {
                        let index = parseInt(target.getAttribute('Index'));
                        let colindex = parseInt(target.getAttribute('aria-colindex'));
                        let field = instance.getColumns()[colindex - 1].field;
                        setTimeout(function () {
                            instance.editCell(index, field); // calling editCell method
                        });
                    }
                }
            });
        }
    };

    const [editState, setEditState] = useState(false);
    const cellEdit = () => {
        setEditState(true);
    };
    const cellSaved = () => {
        setEditState(false);
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
                                    onChange={(t: React.ChangeEvent<HTMLInputElement>) => tableRef.current.search(t?.target?.value?.trim())}
                                />
                            </Box>
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
                        {toolBarOptions?.includes('save') && (
                            <Tooltip title="Save">
                                <Box>
                                    <IconButton onClick={() => tableRef.current.endEdit()} disabled={!editState}>
                                        <SaveAsIcon fontSize="medium" />
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
                        {toolBarOptions?.includes('selectedItems') && selected > 0 && (
                            <Box p={1} pl={3} pr={2} bgcolor={'primary.main'} color={'secondary.contrastText'} display="flex" alignItems="center" gap={2}>
                                <BodySmall color="secondary.contrastText" limit={false}>
                                    {selected} item(s) selected
                                </BodySmall>
                                <IconButton onClick={closeBanner} sx={{ color: 'secondary.contrastText', margin: 0, padding: 0 }}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        )}
                    </Box>
                    <Box>{rightSection}</Box>
                </Box>
            )}
            <Box className="control-pane">
                <Box className="control-section">
                    {data && (
                        <TreeGridComponent
                            // expanding={expanding}
                            // collapsing={collapsing}
                            // resizeStart={resizestart}
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
                            load={load}
                            cellEdit={cellEdit}
                            cellSave={cellSaved}
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
    onAdd: (data: Object) => {},
    onEdit: (data: Object) => {},
    onDelete: (data: Object) => {},
    onSearch: (data: Object) => {},
    onRowSelection: (data: Object) => {},
    customFiltersFunction: (data: Object) => {},
    loading: false,
    showToolbar: true,
    toolBarOptions: [],
    toolbarRightSection: <></>,
    searchSettings: {
        hierarchyMode: 'Both'
    },
    hiddenProperty: 'is_hidden'
    // defaultFilter: 'equal'
};
