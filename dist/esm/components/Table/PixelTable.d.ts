/// <reference types="react" />
import { ColumnDef } from '@tanstack/react-table';
interface PixelTableProps {
    defaultData: any;
    columns: ColumnDef<any>[];
    leftPinnedColumnKeys?: string[];
    rightPinnedColumnKeys?: string[];
    pagination?: boolean;
    sortableColumnIds?: string[];
}
export declare const PixelTable: React.FC<PixelTableProps>;
export {};
