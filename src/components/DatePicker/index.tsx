import { Dayjs } from 'dayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export { Dayjs, dayjs };

export interface CustomDatePickerProps<Dayjs> extends DatePickerProps<Dayjs> {
    size?: 'small' | 'medium';
}

export const CustomDatePicker: React.FC<CustomDatePickerProps<Dayjs>> = ({ size, ...props }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                sx={{
                    width: '100%'
                }}
                slotProps={{ textField: { size } }}
                {...props}
            />
        </LocalizationProvider>
    );
};

CustomDatePicker.defaultProps = {
    size: 'small'
};
