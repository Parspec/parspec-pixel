import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from '../Box';
import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '../Icons';
import { BodyMedium } from '../Typography';
import { IconButton } from '../IconButton';
import { Select } from '../Select';
import { useState } from 'react';
const options = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
];
const Pagination = ({ pagination, table }) => {
    const [selectedValue, setSelectedValue] = useState(String(table.getState().pagination.pageSize));
    const handleOnChange = (val) => {
        setSelectedValue(val);
        table.setPageSize(Number(val));
    };
    return (_jsxs(Box, Object.assign({ display: 'flex', justifyContent: "space-between" }, { children: [_jsxs(Box, Object.assign({ display: 'flex', gap: 1, alignItems: "center" }, { children: [_jsx(IconButton, Object.assign({ onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage() }, { children: _jsx(KeyboardArrowLeftIcon, { fontSize: "small" }) })), _jsx(BodyMedium, Object.assign({ display: 'inline' }, { children: _jsx(Box, Object.assign({ sx: { borderRadius: '50%', backgroundColor: 'tertiary.main', pl: 2, pr: 2, display: 'flex', justifyContent: 'center', alignContent: 'center' } }, { children: _jsx(BodyMedium, Object.assign({ color: "secondary.contrastText" }, { children: pagination.pageIndex + 1 })) })) })), _jsx(IconButton, Object.assign({ style: { borderRadius: 10 }, onClick: () => table.nextPage(), disabled: !table.getCanNextPage() }, { children: _jsx(KeyboardArrowRightIcon, { fontSize: "small" }) }))] })), _jsx(Box, Object.assign({ width: '100px', pr: 3 }, { children: _jsx(Select, { size: "small", options: options, label: "Show", labelId: "demo-simple-select-label", id: "demo-simple-select", onChange: (e) => handleOnChange(e.target.value), value: selectedValue }) }))] })));
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map