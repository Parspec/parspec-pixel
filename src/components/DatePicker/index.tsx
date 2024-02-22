import { Dayjs } from 'dayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export { Dayjs, dayjs };

export interface CustomDatePickerProps<Dayjs> extends DatePickerProps<Dayjs> {
    size?: 'small' | 'medium';
    color?: 'primary' | 'secondary';
}

export interface CustomDateTimePickerProps<Dayjs> extends DateTimePickerProps<Dayjs> {
    size?: 'small' | 'medium';
    color?: 'primary' | 'secondary';
}

export const CustomDatePicker: React.FC<CustomDatePickerProps<Dayjs>> = ({ size, color, ...props }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                sx={{
                    width: '100%'
                }}
                slotProps={{ textField: { size, color } }}
                {...props}
            />
        </LocalizationProvider>
    );
};

CustomDatePicker.defaultProps = {
    size: 'small',
    color: 'secondary'
};

export const CustomDateTimePicker: React.FC<CustomDateTimePickerProps<Dayjs>> = ({ size, color, ...props }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                sx={{
                    width: '100%'
                }}
                slotProps={{ textField: { size, color } }}
                {...props}
            />
        </LocalizationProvider>
    );
};

CustomDateTimePicker.defaultProps = {
    size: 'small',
    color: 'secondary'
};
