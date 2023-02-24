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
import { useRef } from 'react';
import { FilterSettingsModel } from '@syncfusion/ej2-grids';

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
    filterSettings
}) => {
    const ref = useRef<any>();
    const rowDrop = (args: any) => {
        const droppedData = ref.current.getRowInfo(args.target.parentElement).rowData;
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
            ref.current.reorderRows([args.fromIndex], args.dropIndex, 'below');
        }
    };
    const toolbarClick = (args: ClickEventArgs) => {
        if (args.item.text === 'Excel Export') {
            ref.current.excelExport(excelExportProperties);
        } else if (args.item.text === 'PDF Export') {
            ref.current.pdfExport(pdfExportProperties);
        }
    };

    return (
        <Box className="control-pane">
            <Box className="control-section">
                <TreeGridComponent
                    height={height}
                    ref={ref}
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
                                  showDeleteConfirmDialog: true
                              }
                            : {}
                    }
                    toolbar={toolBarOptions}
                    toolbarClick={toolbarClick}
                    pageSettings={pageSettings}
                    allowPaging={allowPaging}
                    allowFiltering={allowFiltering}
                    filterSettings={filterSettings}
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
    toolBarOptions: [],
    allowFiltering: true,
    filterSettings: {
        type: 'Excel'
    }
};
