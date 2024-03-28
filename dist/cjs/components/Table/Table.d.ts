/// <reference types="react" />
import { TreeGridExcelExportProperties, TreeGridPdfExportProperties, PageSettingsModel, EditSettingsModel, SearchSettingsModel } from '@syncfusion/ej2-react-treegrid';
import './styles.css';
import { FilterSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-grids';
type ToolbarT = 'delete' | 'search' | 'clearFilters' | 'hide' | 'unhide' | 'selectedItems' | 'duplicate' | 'add' | 'move' | 'createKit' | 'highlight';
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
    onCheckboxChange?: (data: Object[], key?: string | number) => void;
    onAddDuplicates?: (data: Object[]) => void;
    onDragEnd?: (data: Object) => void;
    onAdd?: () => void;
    onEdit?: (data: Object) => void;
    onDelete?: (data: Object) => void;
    onSearch?: (data: Object) => void;
    onRowSelection?: (data: Object) => void;
    customFiltersFunction?: (data: Object) => void;
    dataBoundCallBack?: () => void;
    onCellEdit?: (data: Object) => void;
    onMove?: (data: Object) => void;
    onCreateKit?: () => void;
    loading?: boolean;
    toolbarRightSection?: React.ReactNode;
    searchSettings?: SearchSettingsModel;
    hiddenProperty?: string;
    allowSorting?: boolean;
    rowHeight?: number;
    height?: number | string;
    tableKey?: number | string;
    selectedItemsBelowSearch?: boolean;
    title?: string;
    aggregateChildren?: React.ReactNode;
    queryCellInfo?: (args: any) => void;
}
export interface TableRefType {
    clearSelection: () => void;
    setSelectedForBanner: React.Dispatch<React.SetStateAction<number>>;
    scrollTo: (id: number) => void;
    clearFiltering: () => void;
    setMultiSelectVal: (val: any) => void;
    getMultiSelectVal: () => any;
    refreshTable: () => void;
    updateData: (data: Object[]) => void;
    setRowData: (rowPrimaryKey: number, newRowData: Object) => void;
    getData: () => Object[];
    endEdit: () => void;
    grid: any;
}
export declare const Table: import("react").ForwardRefExoticComponent<TableProps & import("react").RefAttributes<TableRefType>>;
export {};
