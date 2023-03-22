/// <reference types="react" />
import { TreeGridExcelExportProperties, TreeGridPdfExportProperties, PageSettingsModel, EditSettingsModel, SearchSettingsModel } from '@syncfusion/ej2-react-treegrid';
import './styles.css';
import { FilterSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-grids';
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
export declare const Table: React.FC<TableProps>;
