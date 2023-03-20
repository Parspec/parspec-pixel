import { Dayjs } from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/x-date-pickers/DesktopDatePicker';

export const CustomDatePicker: React.FC<DesktopDatePickerProps<Dayjs>> = (props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                sx={{
                    width: '100%'
                }}
                {...props}
            />
        </LocalizationProvider>
    );
};
