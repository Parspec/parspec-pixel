/// <reference types="react" />
import { ProcessCellForExportParams, GetRowIdParams, ColDef, ColGroupDef, CellValueChangedEvent, RowDragEvent, SelectionChangedEvent, TabToNextCellParams, CellPosition } from 'ag-grid-community';
import './styles.css';
import { ToolBarT } from './CustomToolbarPanel';
interface IAgGridTableProps {
    tableHeight: number | string;
    tableData: Object[];
    rowHeight: number;
    isTableLoading: boolean;
    columnDefs: (ColDef | ColGroupDef)[] | null;
    defaultColDef: ColDef;
    getRowId: (params: GetRowIdParams<any, any>) => any;
    suppressRowClickSelection?: boolean;
    enableRangeSelection?: boolean;
    enableFillHandle?: boolean;
    undoRedoCellEditing?: boolean;
    enterNavigatesVerticallyAfterEdit?: boolean;
    enterNavigatesVertically?: boolean;
    rowDragManaged?: boolean;
    rowSelection?: 'single' | 'multiple';
    suppressContextMenu?: boolean;
    rowClassRules?: {};
    getRowStyle?: () => {} | undefined;
    context?: any;
    pinnedBottomRowData?: any[];
    onCellValueChanged?: (event: CellValueChangedEvent) => void;
    onRowDragEnd?: (event: RowDragEvent) => void;
    onSelectionChanged?: (event: SelectionChangedEvent) => void;
    tabToNextCell?: (params: TabToNextCellParams) => CellPosition | null;
    processCellFromClipboard?: (args: ProcessCellForExportParams<any, any>) => any;
    loadingOverlayComponent?: (props: any) => JSX.Element | null;
    noRowsOverlayComponent?: (props: any) => JSX.Element;
    isTableHaveFooter?: boolean;
    onGridReady?: () => void;
    processCellForClipboard?: (props: ProcessCellForExportParams) => any;
    quickFilterText?: string;
    showToolbarPanel: boolean;
    isToolbarLoading?: boolean;
    toolBarPanelOptions?: ToolBarT[];
    selectedRowCount: number;
    disabledToolBarButton: boolean;
    onAdd?: () => void;
    onDelete?: () => void;
    onHideUnhide?: () => void;
    onAddDuplicates?: () => void;
    onMove?: () => void;
    onCreateKit?: () => void;
    onCloseBanner?: () => void;
    onTextSearch?: (searchString: string) => void;
    title?: string;
    toolbarRightSection?: React.ReactNode;
}
interface IAgGridTableMethods {
    api?: any;
}
export declare const AgGridTable: import("react").ForwardRefExoticComponent<IAgGridTableProps & import("react").RefAttributes<IAgGridTableMethods>>;
export {};
