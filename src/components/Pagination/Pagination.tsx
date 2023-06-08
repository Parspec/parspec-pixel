import { forwardRef } from 'react';
import { default as MUIPagination, PaginationProps as MUIPaginationProps } from '@mui/material/Pagination';

export interface PaginationProps extends Omit<MUIPaginationProps, 'classes'> {
    count: number;
    size?: 'small' | 'medium' | 'large';
    color: 'primary' | 'secondary';
    disabled?: boolean;
    variant?: 'text' | 'outlined';
    page: number;
    onChange: (event: React.ChangeEvent<unknown>, pageValue: number) => void;
}

export const Pagination = forwardRef<HTMLButtonElement, PaginationProps>(({ size, color, count, disabled, page, onChange, ...rest }, ref) => {
    return <MUIPagination sx={{ width: '100%' }} ref={ref} count={count} page={page} onChange={onChange} size={size} color={color} disabled={disabled} showFirstButton showLastButton {...rest} />;
});

Pagination.defaultProps = {
    size: 'small',
    color: 'primary',
    disabled: false
};
