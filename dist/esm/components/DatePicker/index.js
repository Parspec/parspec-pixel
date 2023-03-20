import { jsx as _jsx } from "react/jsx-runtime";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
export const CustomDatePicker = (props) => {
    return (_jsx(LocalizationProvider, Object.assign({ dateAdapter: AdapterDayjs }, { children: _jsx(DesktopDatePicker, Object.assign({ sx: {
                width: '100%'
            } }, props)) })));
};
//# sourceMappingURL=index.js.map