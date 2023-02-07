/// <reference types="react" />
import { Table } from '@tanstack/react-table';
interface RightTableProps {
    table: Table<any>;
    sortableColumnIds: string[];
}
export declare const RightTable: React.FC<RightTableProps>;
export {};
