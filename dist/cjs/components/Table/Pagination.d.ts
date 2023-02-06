/// <reference types="react" />
import { PaginationState, Table } from '@tanstack/react-table';
interface PaginationProps {
    pagination: PaginationState;
    table: Table<any>;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
