import {
    TreeGridComponent,
    ColumnsDirective,
    Selection,
    RowDD,
    Inject,
    Freeze,
    Sort,
    Edit,
    Toolbar,
    ToolbarItems,
    Page,
    PdfExport,
    ExcelExport,
    Resize,
    TreeGridExcelExportProperties,
    TreeGridPdfExportProperties,
    PageSettingsModel,
    Filter
} from '@syncfusion/ej2-react-treegrid';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { isNullOrUndefined, registerLicense } from '@syncfusion/ej2-base';
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
    RowDataBoundEventArgs,
    SaveEventArgs,
    SearchEventArgs,
    SelectionSettingsModel,
    SortEventArgs
} from '@syncfusion/ej2-grids';
import { useRef } from 'react';

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
    allowEditing?: boolean;
    toolBarOptions?: ToolbarItems[];
    excelExportProperties?: TreeGridExcelExportProperties;
    pdfExportProperties?: TreeGridPdfExportProperties;
    height?: number;
    allowFiltering?: boolean;
    filterSettings?: FilterSettingsModel;
    selectionSettings?: SelectionSettingsModel;
    onCheckboxChange?: (data: Object[]) => void;
    onDragEnd?: (data: Object[]) => void;
    onAdd?: (data: Object) => void;
    onEdit?: (data: Object) => void;
    onDelete?: (data: Object) => void;
    onSearch?: (data: Object) => void;
}

export const Table: React.FC<TableProps> = ({
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
    allowEditing,
    toolBarOptions,
    excelExportProperties,
    pdfExportProperties,
    height,
    allowFiltering,
    filterSettings,
    onCheckboxChange,
    onDragEnd,
    onAdd,
    onEdit,
    onDelete,
    onSearch,
    selectionSettings
}) => {
    const tableRef = useRef<any>();

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
    const toolbarClick = (args: ClickEventArgs) => {
        const selectedRecords = tableRef.current.getSelectedRecords();
        let exelExportPropertiesOnSelectedCheckboxes = {};
        let pdfExportPropertiesOnSelectedCheckboxes = {};
        if (selectedRecords.length !== 0) {
            exelExportPropertiesOnSelectedCheckboxes = {
                ...excelExportProperties,
                dataSource: selectedRecords
            };
            pdfExportPropertiesOnSelectedCheckboxes = {
                ...pdfExportProperties,
                dataSource: selectedRecords
            };
            if (args.item.text === 'Excel Export') {
                tableRef.current.excelExport(exelExportPropertiesOnSelectedCheckboxes);
            } else if (args.item.text === 'PDF Export') {
                tableRef.current.pdfExport(pdfExportPropertiesOnSelectedCheckboxes);
            }
        } else {
            if (args.item.text === 'Excel Export') {
                tableRef.current.excelExport(excelExportProperties);
            } else if (args.item.text === 'PDF Export') {
                tableRef.current.pdfExport(pdfExportProperties);
            }
        }
    };

    const checkboxChange = (args: CheckBoxChangeEventArgs) => {
        onCheckboxChange!(tableRef.current.getSelectedRecords());
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

    const rowDataBound = (args: RowDataBoundEventArgs) => {
        if (getObject('hidden', args.data) === true) {
            (args.row as HTMLTableRowElement).style.opacity = '0.4';
        }
    };
    return (
        <Box className="control-pane">
            <Box className="control-section">
                <TreeGridComponent
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
                    editSettings={
                        allowEditing
                            ? {
                                  allowAdding: true,
                                  allowDeleting: true,
                                  allowEditing: true,
                                  mode: 'Cell',
                                  showDeleteConfirmDialog: true,
                                  showConfirmDialog: true,
                                  newRowPosition: 'Bottom'
                              }
                            : {}
                    }
                    toolbar={toolBarOptions}
                    toolbarClick={toolBarOptions?.length !== 0 ? toolbarClick : undefined}
                    pageSettings={pageSettings}
                    allowPaging={allowPaging}
                    allowFiltering={allowFiltering}
                    filterSettings={filterSettings}
                    checkboxChange={checkboxChange}
                    actionComplete={actionComplete}
                >
                    <ColumnsDirective>{children}</ColumnsDirective>
                    <Inject services={[Freeze, RowDD, Selection, Sort, Edit, Toolbar, Page, ExcelExport, PdfExport, Resize, Filter]} />
                </TreeGridComponent>
            </Box>
        </Box>
    );
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
    allowFiltering: true,
    filterSettings: {
        type: 'Excel'
    },
    selectionSettings: {
        checkboxOnly: true,
        persistSelection: true
    },
    onCheckboxChange: (data: Object[]) => {},
    onDragEnd: (data: Object[]) => {},
    onAdd: (data: Object) => {},
    onEdit: (data: Object) => {},
    onDelete: (data: Object) => {},
    onSearch: (data: Object) => {}
};
