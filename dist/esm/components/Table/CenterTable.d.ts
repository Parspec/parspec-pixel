/// <reference types="react" />
import { Table } from '@tanstack/react-table';
interface CenterTableProps {
    table: Table<any>;
    sortableColumnIds: string[];
}
export declare const CenterTable: React.FC<CenterTableProps>;
export {};
