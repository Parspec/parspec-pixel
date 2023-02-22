/// <reference types="react" />
import { ToolbarItems, TreeGridExcelExportProperties, TreeGridPdfExportProperties, PageSettingsModel } from '@syncfusion/ej2-react-treegrid';
import './styles.css';
export interface PixelTableProps {
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
}
export declare const PixelTable: React.FC<PixelTableProps>;
