import { forwardRef, useState, useEffect } from 'react';
import { default as MUIPagination, PaginationProps as MUIPaginationProps } from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Box } from '@mui/material';
import usePagination from '@mui/material/usePagination';

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

interface ItemProps {
    disabled: boolean;
    onClick: (data: any) => void;
    page: any;
    selected: boolean;
    type: string;
}

function calculateDisplayedPages(currentPage: number, items: ItemProps[]) {
    const displayedPages = [];
    let prevPage = null;

    for (const item of items) {
        if (item.type === 'page') {
            const { page } = item;

            if (prevPage !== null && page - prevPage !== 1) {
                displayedPages.push('...');
            }

            displayedPages.push(page);
            prevPage = page;
        }
    }

    return displayedPages;
}

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(({ size, color, count, disabled, page, onChange, boundaryCount, siblingCount, defaultPage, ...rest }, ref) => {
    const { items } = usePagination({
        count: count, // Total number of items
        page: page, // Current page
        boundaryCount: boundaryCount,
        siblingCount: siblingCount
    });

    // Calculate the currently displayed pages
    const displayedPages = calculateDisplayedPages(page, items);

    const [currentPage, setCurrentPage] = useState(page);

    const pageChangeHandler = (event: React.ChangeEvent<unknown>, page: any) => {
        setCurrentPage(() => page);
        onChange(event, page);
    };

    const startEllipsisClickHandler = (event: React.MouseEvent<HTMLElement>, page: any) => {
        const targetPage = displayedPages[0] - 1;
        setCurrentPage(() => targetPage);
        onChange(event, targetPage);
    };

    const endEllipsisClickHandler = (event: React.MouseEvent<HTMLElement>, page: any) => {
        const targetPage = displayedPages[displayedPages.length - 1] + 1;
        setCurrentPage(() => targetPage);
        onChange(event, targetPage);
    };

    useEffect(() => {
        setCurrentPage(page);
    }, [page]);

    return (
        <>
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
                    const { color: ButtonColor, onClick, disabled: ellipsisDisabled, ...rest } = item;

                    if (item.type === 'first') {
                        return <PaginationItem component="button" onClick={(event: any) => pageChangeHandler(event, item.page)} disabled={currentPage === 1} {...rest} />;
                    }

                    if (item.type === 'previous') {
                        return <PaginationItem component="button" onClick={(event: any) => pageChangeHandler(event, item.page)} disabled={currentPage === 1} {...rest} />;
                    }

                    if (item.type === 'next') {
                        return <PaginationItem component="button" onClick={(event: any) => pageChangeHandler(event, item.page)} disabled={currentPage === count} {...rest} />;
                    }

                    if (item.type === 'last') {
                        return <PaginationItem component="button" onClick={(event: any) => pageChangeHandler(event, item.page)} disabled={currentPage === count} {...rest} />;
                    }

                    if (item.type === 'start-ellipsis') {
                        return (
                            <Box onClick={(event: any) => startEllipsisClickHandler(event, item.page)} sx={{ cursor: 'pointer' }}>
                                <PaginationItem component="button" disabled={currentPage <= siblingCount + 1} {...rest} />
                            </Box>
                        );
                    }

                    if (item.type === 'end-ellipsis') {
                        return (
                            <Box onClick={(event: any) => endEllipsisClickHandler(event, item.page)} sx={{ cursor: 'pointer' }}>
                                <PaginationItem component="button" disabled={currentPage >= count - siblingCount} {...rest} />
                            </Box>
                        );
                    }

                    return <PaginationItem color={color} component="button" onClick={(event: any) => pageChangeHandler(event, item.page)} {...rest} />;
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
