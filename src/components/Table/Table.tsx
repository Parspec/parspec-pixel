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
import { addClass, registerLicense } from '@syncfusion/ej2-base';
import './Treegrid.scss';
// import './styles.css';
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
import { CloseIcon, ControlPointDuplicateIcon, DeleteOutlineIcon, VisibilityOffIcon, FilterAltOffIcon, SearchIcon } from '../Icons';
import { BodySmall } from '../Typography';
import { Tooltip } from '../Tooltip';
import { InputAdornment } from '../InputAdornment';
window.localStorage.setItem(
    'syncfusionLicense',
    'Mgo+DSMBaFt+QHFqVkFrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRcQlljTX5TckJmW39beH0=;Mgo+DSMBPh8sVXJ1S0d+X1ZPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXpTckVjXXhbcnRcQGk=;ORg4AjUWIQA/Gnt2VFhhQlJDfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5XdkFjWXtZdXZUQmBV;MTYwMzQwMkAzMjMxMmUzMTJlMzMzN0ZtL0kzc0FtbUVTbjREZEs4cGNuVkd0TXI5SmZNbmRlbGEwRnQ0bnJTNTA9;MTYwMzQwM0AzMjMxMmUzMTJlMzMzN0QzQWZIYjkxU1dzV3pSaGpseHdPcWRoUmdtb2hWVjIzNVRubmtoL1lGaVU9;NRAiBiAaIQQuGjN/V0d+XU9HcVRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TckVnWX9ad3FXRGZaWA==;MTYwMzQwNUAzMjMxMmUzMTJlMzMzN1pySEd1T0ZEQjRJRTNwZ280UXVZMGVtN1RhQjNDbGcxQ1o0TzVpdC9JdUk9;MTYwMzQwNkAzMjMxMmUzMTJlMzMzN25QaHFKWS85c2pqVVpRTFd4U1crbDlJeEFZNFFUNjYyUENtWVR2MjdNNnc9;Mgo+DSMBMAY9C3t2VFhhQlJDfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5XdkFjWXtZdXZWRWVV;MTYwMzQwOEAzMjMxMmUzMTJlMzMzN29BL2FMN01nWnN1ZG9wb0I4QmdPMmhFM25Pa0hsU05nUE8zclVHR1N0Qm89;MTYwMzQwOUAzMjMxMmUzMTJlMzMzN1dnbmQ1UlMyZDNTOEFLYzZhNlhaWGhVcGZUbVNEdWQrbUFiS1hZcFdzZzQ9;MTYwMzQxMEAzMjMxMmUzMTJlMzMzN1pySEd1T0ZEQjRJRTNwZ280UXVZMGVtN1RhQjNDbGcxQ1o0TzVpdC9JdUk9'
);
const license = window.localStorage.getItem('syncfusionLicense');
registerLicense(license!);

type ToolbarT = 'delete' | 'search' | 'clearFilters' | 'hide' | 'unhide' | 'selectedItems' | 'duplicate';
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
            if (data.length === 0) {
                if (obj && obj?.EmptyRecord) {
                    obj.EmptyRecord = 'No records to display';
                }
                tableRef?.current?.refresh();
            }
        }
        // tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    }, [loading]);

    const actionComplete = (args: PageEventArgs | FilterEventArgs | SortEventArgs | SearchEventArgs | AddEventArgs | SaveEventArgs | EditEventArgs | DeleteEventArgs) => {
        if (args?.type === 'save') {
            onEdit!(args);
        }
        if (args?.requestType === 'searching') {
            onSearch!(args);
        }
        // tableRef.current.grid.notify('freezerender', { case: 'refreshHeight' });
    };

    const actionBegin = (e: any) => {
        if (e.requestType === 'filterbeforeopen') {
            customFiltersFunction!(e);
        }
        if (e.type === 'edit') {
            e.cell.getElementsByTagName('input')[0].setAttribute('maxLength', 255);
        }
    };
    // const rowDragStartHelper = (args) => {
    //     console.log('rowDragStartHelper====>', args);
    // };
    const rowDrop = (args: any) => {
        // // console.log('data', data);
        // let notAllowed = false;

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
        const targetData = tableRef?.current?.getRowInfo(args?.target?.parentElement)?.rowData; //dropped data
        let data, parent;
        data = args.data[0];
        if (args.dropPosition === 'middleSegment') {
            parent = targetData;
        } else {
            parent = targetData?.parentItem;
        }
        if (data?.type === 'section') {
            if (parent?.type !== undefined) {
                args.cancel = true;
                notAllowed = true;
            }
        } else if (data?.type === 'product') {
            if (parent?.type !== 'section' && parent?.type !== undefined) {
                args.cancel = true;
                notAllowed = true;
            }
        } else {
            if (parent?.type !== 'product' && parent?.type !== undefined) {
                args.cancel = true;
                notAllowed = true;
            }
        }
        console.log('data=>', data, '\nparent=>', parent, '\narg=>', args, '\ntarget=>', targetData);
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
                            <Tooltip title={disabled ? 'Select Item(s) First' : 'Add Duplicate Record(s)'}>
                                <Box>
                                    <IconButton onClick={() => onAddDuplicates!(tableRef.current.getSelectedRecords())} disabled={disabled}>
                                        <ControlPointDuplicateIcon fontSize="medium" />
                                    </IconButton>
                                </Box>
                            </Tooltip>
                        )}
                        {toolBarOptions?.includes('delete') && (
                            <Tooltip title={disabled ? 'Select Item(s) First' : 'Delete Record(s)'}>
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
                            <Tooltip title={disabled ? 'Select Item(s) First' : 'Hide/Unhide Record(s)'}>
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
