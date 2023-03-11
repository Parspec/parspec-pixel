import { Dayjs } from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { forwardRef } from 'react';

export interface CustomDatePickerProps {
    label?: string;
    value?: Dayjs | null;
    onChange?: (newValue: Dayjs | null) => void;
    defaultValue?: Dayjs;
}

export const CustomDatePicker = forwardRef<HTMLDivElement, CustomDatePickerProps>((props, ref) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                ref={ref}
                sx={{
                    width: '100%'
                }}
                {...props}
            />
        </LocalizationProvider>
    );
});
