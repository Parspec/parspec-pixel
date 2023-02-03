import { Table } from '@tanstack/react-table';
import React from 'react';
interface CenterTableProps {
    table: Table<any>;
    sortableColumnIds: string[];
}
export declare const CenterTable: React.FC<CenterTableProps>;
export {};
