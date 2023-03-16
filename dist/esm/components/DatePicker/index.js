import { jsx as _jsx } from "react/jsx-runtime";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export const CustomDatePicker = (props) => {
    return (_jsx(LocalizationProvider, Object.assign({ dateAdapter: AdapterDayjs }, { children: _jsx(DatePicker, Object.assign({ sx: {
                width: '100%'
            } }, props), void 0) }), void 0));
};
//# sourceMappingURL=index.js.map