/// <reference types="react" />
import { PaginationProps as MUIPaginationProps } from '@mui/material/Pagination';
export interface PaginationProps extends Omit<MUIPaginationProps, 'classes'> {
    count: number;
    size?: 'small' | 'medium' | 'large';
    color: 'primary' | 'secondary';
    disabled?: boolean;
    variant?: 'text' | 'outlined';
    page: number;
    onChange: (event: React.ChangeEvent<unknown>, pageValue: number | null) => void;
    boundaryCount?: number;
    siblingCount: number;
    defaultPage?: number;
}
export declare const Pagination: import("react").ForwardRefExoticComponent<Omit<PaginationProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
