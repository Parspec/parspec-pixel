/// <reference types="react" />
import { Dayjs } from 'dayjs';
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { DateTimePickerProps } from '@mui/x-date-pickers';
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
export declare const CustomDatePicker: React.FC<CustomDatePickerProps<Dayjs>>;
export declare const CustomDateTimePicker: React.FC<CustomDateTimePickerProps<Dayjs>>;
