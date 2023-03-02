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
import { registerLicense } from '@syncfusion/ej2-base';
import './styles.css';
import { Box } from '../Box';
import {
    AddEventArgs,
    CheckBoxChangeEventArgs,
    DeleteEventArgs,
    EditEventArgs,
    FilterEventArgs,
    FilterSettingsModel,
    PageEventArgs,
    SaveEventArgs,
    SearchEventArgs,
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
    onCheckboxChange?: (data: Object[]) => void;
    onDragEnd?: (data: Object[]) => void;
    onAdd?: (data: Object) => void;
    onEdit?: (data: Object) => void;
    onDelete?: (data: Object) => void;
    onSearch?: (data: Object) => void;
    hiddenKeys: string[];
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
    hiddenKeys
}) => {
    const tableRef = useRef<any>();

    const rowDrop = (args: any) => {
        const droppedData = tableRef.current.getRowInfo(args.target.parentElement).rowData;
        let droppedId, draggedId;
        if (droppedData.parentItem != null) {
            droppedId = droppedData.parentItem.taskID;
            draggedId = args.data[0].parentItem.taskID;
        }
        if (droppedId != draggedId) {
            args.cancel = true;
        }
        if (args.dropPosition == 'middleSegment' && droppedId == draggedId) {
            args.cancel = true;
            tableRef.current.reorderRows([args.fromIndex], args.dropIndex, 'below');
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

    const dataBound = (args: Object) => {
        hiddenKeys.map((key) => {
            const hiddenRowTemplateTd: HTMLElement = document.getElementById(key)!;
            const hiddenRowTr: HTMLElement = hiddenRowTemplateTd?.parentElement?.parentElement!;
            if (hiddenRowTr) {
                const rowIndex: string = hiddenRowTr?.getAttribute('data-rowindex')!;
                const rowsOfAllTablesWithProvidedRowIndex: any = document.querySelectorAll(`tr[data-rowindex="${rowIndex}"]`);
                for (let i = 0; i < rowsOfAllTablesWithProvidedRowIndex.length; i++) {
                    const cols = rowsOfAllTablesWithProvidedRowIndex[i].childNodes;
                    if (cols) {
                        for (let i = 0; i < cols.length; i++) {
                            cols[i].style.opacity = 0.4;
                        }
                    }
                }
            }
        });
    };
    return (
        <Box className="control-pane">
            <Box className="control-section">
                <TreeGridComponent
                    dataBound={dataBound}
                    height={height}
                    ref={tableRef}
                    dataSource={data}
                    treeColumnIndex={treeColumnIndex}
                    childMapping={childMappingKey}
                    allowPdfExport={allowExports}
                    allowExcelExport={allowExports}
                    allowRowDragAndDrop={allowRowDragAndDrop}
                    allowResizing={allowResizing}
                    selectionSettings={{
                        checkboxOnly: true,
                        persistSelection: true
                    }}
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
                    toolbarClick={toolbarClick}
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
    toolBarOptions: ['ExcelExport', 'PdfExport', 'Delete'],
    allowFiltering: true,
    filterSettings: {
        type: 'Excel'
    },
    onCheckboxChange: (data: Object[]) => {},
    onDragEnd: (data: Object[]) => {},
    onAdd: (data: Object) => {},
    onEdit: (data: Object) => {},
    onDelete: (data: Object) => {},
    onSearch: (data: Object) => {},
    hiddenKeys: []
};
