import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from '../Box';
import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '../Icons';
import { BodyMedium } from '../Typography';
import { IconButton } from '../IconButton';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
const Pagination = ({ pagination, table }) => {
    return (_jsxs(Box, Object.assign({ display: 'flex', justifyContent: "space-between" }, { children: [_jsxs(Box, Object.assign({ display: 'flex', gap: 1 }, { children: [_jsx(IconButton, Object.assign({ onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage() }, { children: _jsx(KeyboardArrowLeftIcon, { fontSize: "small" }) })), _jsx(BodyMedium, Object.assign({ display: 'inline' }, { children: _jsx(IconButton, Object.assign({ sx: { borderRadius: '100%' } }, { children: _jsx(BodyMedium, { children: pagination.pageIndex + 1 }) })) })), _jsx(IconButton, Object.assign({ style: { borderRadius: 10 }, onClick: () => table.nextPage(), disabled: !table.getCanNextPage() }, { children: _jsx(KeyboardArrowRightIcon, { fontSize: "small" }) }))] })), _jsx(Box, Object.assign({ width: '100px' }, { children: _jsxs(FormControl, Object.assign({ fullWidth: true }, { children: [_jsx(InputLabel, Object.assign({ id: "demo-simple-select-label" }, { children: "Show" })), _jsxs(Select, Object.assign({ labelId: "demo-simple-select-label", id: "demo-simple-select", value: table.getState().pagination.pageSize, label: "Show", size: "small", onChange: (e) => table.setPageSize(Number(e.target.value)) }, { children: [_jsx(MenuItem, Object.assign({ value: 10 }, { children: "10" })), _jsx(MenuItem, Object.assign({ value: 20 }, { children: "20" })), _jsx(MenuItem, Object.assign({ value: 30 }, { children: "30" }))] }))] })) }))] })));
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map