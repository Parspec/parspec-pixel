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
    PageEventArgs,
    RowSelectEventArgs,
    SaveEventArgs,
    SearchEventArgs,
    SelectionSettingsModel,
    SortEventArgs
} from '@syncfusion/ej2-grids';
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
registerLicense(license!);

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
    toolBarOptions?: string[];
    excelExportProperties?: TreeGridExcelExportProperties;
    pdfExportProperties?: TreeGridPdfExportProperties;
    height?: number;
    allowFiltering?: boolean;
    filterSettings?: FilterSettingsModel;
    selectionSettings?: SelectionSettingsModel;
    editSettings?: EditSettingsModel;
    onCheckboxChange?: (data: Object[]) => void;
    onDragEnd?: (data: Object[]) => void;
    onAdd?: (data: Object) => void;
    onEdit?: (data: Object) => void;
    onDelete?: (data: Object) => void;
    onSearch?: (data: Object) => void;
    onRowSelection?: (data: Object) => void;
    loading?: boolean;
    toolbarRightSection?: React.ReactNode;
    searchSettings?: SearchSettingsModel;
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
        showToolbar,
        toolBarOptions,
        height,
        allowFiltering,
        editSettings,
        filterSettings,
        onCheckboxChange,
        onDragEnd,
        onAdd,
        onEdit,
        onDelete,
        onSearch,
        selectionSettings,
        onRowSelection,
        loading,
        toolbarRightSection,
        searchSettings
    } = props;

    const tableRef = useRef<any>();
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        if (loading) {
            tableRef.current.showSpinner();
        } else {
            tableRef.current.hideSpinner();
        }
    }, [loading]);

    const rowDrop = (args: any) => {
        const droppedData = tableRef.current.getRowInfo(args.target.parentElement).rowData; //dropped data
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
        } else if (args.dropPosition == 'topSegment' || args.dropPosition == 'bottomSegment') {
            //here prevent the drop for within child parent
            if (args.data[0].level != droppedData.level) {
                args.cancel = true;
            } else if (args.data[0].level != 0 && droppedData.level != 0) {
                if (
                    args.data[0].level == droppedData.level &&
                    (isNullOrUndefined(args.data[0].hasChildRecords) || isNullOrUndefined(droppedData.hasChildRecords) || args.data[0].hasChildRecords == true) &&
                    droppedId != draggedId
                ) {
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
            } else if (args.data[0].level == droppedData.level || (args.data[0].level != droppedData.level && isNullOrUndefined(draggedId) && isNullOrUndefined(droppedId))) {
                args.cancel = true;
            }
        }
        onDragEnd!(tableRef.current.getDataModule().treeModule.hierarchyData);
    };

    const checkboxChange = (args: CheckBoxChangeEventArgs) => {
        onCheckboxChange!(tableRef.current.getSelectedRecords());
        setSelected(tableRef.current.getSelectedRecords().length);
    };
    const rowSelected = (args: RowSelectEventArgs) => {
        onRowSelection!(tableRef.current.getSelectedRecords());
    };

    const actionComplete = (args: PageEventArgs | FilterEventArgs | SortEventArgs | SearchEventArgs | AddEventArgs | SaveEventArgs | EditEventArgs | DeleteEventArgs) => {
        if (args.type === 'save') {
            onEdit!(args);
        } else if (args.requestType === 'save') {
            onAdd!(args);
        } else if (args.requestType === 'delete') {
            onDelete!(args);
        } else if (args.requestType === 'searching') {
            onSearch!(args);
        }
    };

    const rowDataBound = (args: any) => {
        if (getObject('hidden', args.data) === true) {
            (args.row as HTMLTableRowElement).style.opacity = '0.4';
        }
        if (selectionSettings?.type === 'Single') {
            addClass([args.row], 'singleSelect');
        }
    };

    const actionBeginHandler = (args: any) => {
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

    const hideUnhideSelected = () => {};
    const closeBanner = () => {
        setSelected(0);
        tableRef.current.clearSelection();
    };

    return (
        <>
            {showToolbar && (
                <Box display={'flex'} justifyContent="space-between">
                    <Box display="flex" alignItems="center" gap={2}>
                        {toolBarOptions?.includes('search') && (
                            <Box width={300}>
                                <TextField label={'Search'} size="small" onChange={(t: any) => tableRef.current.search(t.target.value)} />
                            </Box>
                        )}
                        {toolBarOptions?.includes('add') && (
                            <IconButton onClick={() => tableRef.current.addRecord()}>
                                <ControlPointDuplicateIcon fontSize="large" />
                            </IconButton>
                        )}
                        {toolBarOptions?.includes('delete') && (
                            <IconButton onClick={() => tableRef.current.deleteRecord()}>
                                <DeleteOutlineIcon fontSize="large" />
                            </IconButton>
                        )}
                        {toolBarOptions?.includes('hide') && (
                            <IconButton onClick={hideUnhideSelected}>
                                <VisibilityOffIcon fontSize="large" />
                            </IconButton>
                        )}
                        {toolBarOptions?.includes('clearFilters') && (
                            <IconButton onClick={() => tableRef.current.clearFiltering()}>
                                <FilterAltOffIcon fontSize="large" />
                            </IconButton>
                        )}
                        {toolBarOptions?.includes('selectedItems') && selected > 0 && (
                            <Box p={1} pl={3} pr={2} bgcolor={'tertiary.main'} color={'secondary.contrastText'} display="flex" alignItems="center" gap={2}>
                                <BodySmall color="secondary.contrastText">{selected} items selected</BodySmall>
                                <IconButton onClick={closeBanner} sx={{ color: 'secondary.contrastText', margin: 0, padding: 0 }}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        )}
                    </Box>
                    <Box>{toolbarRightSection}</Box>
                </Box>
            )}
            <Box className="control-pane">
                <Box className="control-section">
                    {data && (
                        <TreeGridComponent
                            actionBegin={actionBeginHandler}
                            rowSelected={rowSelected}
                            rowDataBound={rowDataBound}
                            height={height}
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
                            allowSorting={true}
                            editSettings={editSettings}
                            searchSettings={searchSettings}
                            pageSettings={pageSettings}
                            allowPaging={allowPaging}
                            allowFiltering={allowFiltering}
                            filterSettings={filterSettings}
                            checkboxChange={checkboxChange}
                            actionComplete={actionComplete}
                        >
                            <ColumnsDirective>{children}</ColumnsDirective>
                            <Inject services={[Freeze, RowDD, Selection, Sort, Edit, Page, ExcelExport, PdfExport, Resize, Filter, ContextMenu]} />
                        </TreeGridComponent>
                    )}
                </Box>
            </Box>
        </>
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
    onCheckboxChange: (data: Object[]) => {},
    onDragEnd: (data: Object[]) => {},
    onAdd: (data: Object) => {},
    onEdit: (data: Object) => {},
    onDelete: (data: Object) => {},
    onSearch: (data: Object) => {},
    onRowSelection: (data: Object) => {},
    loading: false,
    showToolbar: true,
    toolBarOptions: [],
    toolbarRightSection: <></>,
    searchSettings: {
        hierarchyMode: 'Both'
    }
};
