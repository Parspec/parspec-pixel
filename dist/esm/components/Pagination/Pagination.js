var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { default as MUIPagination } from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Box } from '@mui/material';
import usePagination from '@mui/material/usePagination';
function calculateDisplayedPages(currentPage, items) {
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
export const Pagination = forwardRef((_a, ref) => {
    var { size, color, count, disabled, page, onChange, boundaryCount, siblingCount, defaultPage } = _a, rest = __rest(_a, ["size", "color", "count", "disabled", "page", "onChange", "boundaryCount", "siblingCount", "defaultPage"]);
    const { items } = usePagination({
        count: count,
        page: page,
        boundaryCount: boundaryCount,
        siblingCount: siblingCount
    });
    // Calculate the currently displayed pages
    const displayedPages = calculateDisplayedPages(page, items);
    const [currentPage, setCurrentPage] = useState(page);
    const pageChangeHandler = (event, page) => {
        setCurrentPage(() => page);
        onChange(event, page);
    };
    const startEllipsisClickHandler = (event, page) => {
        const targetPage = displayedPages[0] - 1;
        setCurrentPage(() => targetPage);
        onChange(event, targetPage);
    };
    const endEllipsisClickHandler = (event, page) => {
        const targetPage = displayedPages[displayedPages.length - 1] + 1;
        setCurrentPage(() => targetPage);
        onChange(event, targetPage);
    };
    return (_jsx(_Fragment, { children: _jsx(MUIPagination, Object.assign({ ref: ref, count: count, page: currentPage, size: size, boundaryCount: boundaryCount, siblingCount: siblingCount, defaultPage: defaultPage, disabled: disabled, showFirstButton: true, showLastButton: true, renderItem: (item) => {
                const { color, onClick, disabled: ellipsisDisabled } = item, rest = __rest(item, ["color", "onClick", "disabled"]);
                if (item.type === 'first') {
                    console.log(item.type, item.page);
                    return _jsx(PaginationItem, Object.assign({ component: "button", onClick: (event) => pageChangeHandler(event, item.page), disabled: currentPage === 1 }, rest));
                }
                if (item.type === 'previous') {
                    return _jsx(PaginationItem, Object.assign({ component: "button", onClick: (event) => pageChangeHandler(event, item.page), disabled: currentPage === 1 }, rest));
                }
                if (item.type === 'next') {
                    return _jsx(PaginationItem, Object.assign({ component: "button", onClick: (event) => pageChangeHandler(event, item.page), disabled: currentPage === count }, rest));
                }
                if (item.type === 'last') {
                    return _jsx(PaginationItem, Object.assign({ component: "button", onClick: (event) => pageChangeHandler(event, item.page), disabled: currentPage === count }, rest));
                }
                if (item.type === 'start-ellipsis') {
                    return (_jsx(Box, Object.assign({ onClick: (event) => startEllipsisClickHandler(event, item.page), sx: { cursor: 'pointer' } }, { children: _jsx(PaginationItem, Object.assign({ component: "button", disabled: currentPage <= siblingCount + 1 }, rest)) })));
                }
                if (item.type === 'end-ellipsis') {
                    return (_jsx(Box, Object.assign({ onClick: (event) => endEllipsisClickHandler(event, item.page), sx: { cursor: 'pointer' } }, { children: _jsx(PaginationItem, Object.assign({ component: "button", disabled: currentPage >= count - siblingCount }, rest)) })));
                }
                return _jsx(PaginationItem, Object.assign({ component: "button", onClick: (event) => pageChangeHandler(event, item.page) }, rest));
            } }, rest)) }));
});
Pagination.defaultProps = {
    size: 'small',
    color: 'primary',
    disabled: false,
    boundaryCount: 0
};
//# sourceMappingURL=Pagination.js.map