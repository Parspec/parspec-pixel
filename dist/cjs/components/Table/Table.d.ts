/// <reference types="react" />
import { ToolbarItems, TreeGridExcelExportProperties, TreeGridPdfExportProperties, PageSettingsModel } from '@syncfusion/ej2-react-treegrid';
import './styles.css';
import { FilterSettingsModel } from '@syncfusion/ej2-grids';
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
}
export declare const Table: React.FC<TableProps>;
