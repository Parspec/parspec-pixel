import { jsx as _jsx } from "react/jsx-runtime";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { forwardRef } from 'react';
export const CustomDatePicker = forwardRef((props, ref) => {
    return (_jsx(LocalizationProvider, Object.assign({ dateAdapter: AdapterDayjs }, { children: _jsx(DatePicker, Object.assign({ ref: ref, sx: {
                width: '100%'
            } }, props)) })));
});
//# sourceMappingURL=index.js.map