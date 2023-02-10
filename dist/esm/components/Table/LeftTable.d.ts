/// <reference types="react" />
import { Table } from '@tanstack/react-table';
interface LeftTableProps {
    table: Table<any>;
    sortableColumnIds: string[];
}
export declare const LeftTable: React.FC<LeftTableProps>;
export {};
