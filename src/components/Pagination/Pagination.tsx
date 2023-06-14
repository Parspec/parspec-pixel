import { forwardRef, useState, useEffect } from 'react';
import { default as MUIPagination, PaginationProps as MUIPaginationProps } from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
// import PaginationItemProps from '@mui/material/PaginationItem';
import { Box, Button } from '@mui/material';

export interface PaginationProps extends Omit<MUIPaginationProps, 'classes'> {
    count: number; // Number of pages
    size?: 'small' | 'medium' | 'large';
    color: 'primary' | 'secondary';
    disabled?: boolean;
    variant?: 'text' | 'outlined';
    page: number; //Current page
    onChange: (event: React.ChangeEvent<unknown>, pageValue: number | null) => void;
    boundaryCount?: number;
    siblingCount: number;
    defaultPage?: number;
}

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(({ size, color, count, disabled, page, onChange, boundaryCount, siblingCount, defaultPage, ...rest }, ref) => {
    const [currentPage, setCurrentPage] = useState(page);
    const calculateDisplayedPages = (currentPage: any) => {
        const totalPages = count; // Replace with the actual total number of pages
        const totalDisplayedPages = siblingCount * 2 + 1;
        const startPage = Math.max(currentPage - siblingCount, 1);
        const endPage = Math.min(startPage + totalDisplayedPages - 1, totalPages);

        return Array.from({ length: endPage - startPage + 1 }, (_, index) => index + startPage);
    };
    const [displayedPages, setDisplayedPages] = useState(calculateDisplayedPages(1));

    const pageChangeHandler = (event: React.ChangeEvent<unknown>, page: any) => {
        setCurrentPage(() => page);
        setDisplayedPages(calculateDisplayedPages(page));
        onChange(event, page);
    };

    const startEllipsisClickHandler = (event: React.MouseEvent<HTMLElement>, page: any) => {
        // const targetPage = page;
        // setCurrentPage(() => targetPage);
        // onChange(event, targetPage);
        console.log('start');
    };

    const endEllipsisClickHandler = (event: React.MouseEvent<HTMLElement>, page: any) => {
        // const targetPage = page;
        // setCurrentPage(() => targetPage);
        // onChange(event, targetPage);
        console.log('end');
    };

    return (
        <>
            <Button onClick={() => console.log(displayedPages)}>click</Button>

            <MUIPagination
                ref={ref}
                count={count}
                page={currentPage}
                size={size}
                boundaryCount={boundaryCount}
                siblingCount={siblingCount}
                defaultPage={defaultPage}
                disabled={disabled}
                showFirstButton
                showLastButton
                renderItem={(item) => {
                    const { color, onClick, disabled: ellipsisDisabled, ...rest } = item;

                    if (item.type === 'start-ellipsis') {
                        return (
                            <Box onClick={(event: any) => startEllipsisClickHandler(event, item.page)}>
                                <PaginationItem component="button" disabled={currentPage <= siblingCount + 1} {...rest} />
                            </Box>
                        );
                    }

                    if (item.type === 'end-ellipsis') {
                        return (
                            <Box onClick={(event: any) => endEllipsisClickHandler(event, item.page)}>
                                <PaginationItem component="button" disabled={currentPage >= count - siblingCount} {...rest} />
                            </Box>
                        );
                    }

                    return <PaginationItem component="button" onClick={(event: any) => pageChangeHandler(event, item.page)} {...rest} />;
                }}
                {...rest}
            />
        </>
    );
});

Pagination.defaultProps = {
    size: 'small',
    color: 'primary',
    disabled: false,
    boundaryCount: 0
};
