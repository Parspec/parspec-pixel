import { Dayjs } from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';

export interface CustomDatePickerProps {
    label?: string;
    value?: Dayjs | null;
    onChange?: (newValue: Dayjs | null) => void;
    defaultValue?: Dayjs;
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = (props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                sx={{
                    width: '100%'
                }}
                {...props}
            />
        </LocalizationProvider>
    );
};
