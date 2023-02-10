import { PaginationState, Table } from '@tanstack/react-table';
import React from 'react';
interface PaginationProps {
    pagination: PaginationState;
    table: Table<any>;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
