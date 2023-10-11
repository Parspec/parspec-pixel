/// <reference types="react" />
import { Dayjs } from 'dayjs';
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
export { Dayjs, dayjs };
export interface CustomDatePickerProps<Dayjs> extends DatePickerProps<Dayjs> {
    size?: 'small' | 'medium';
    color?: 'primary' | 'secondary';
}
export declare const CustomDatePicker: React.FC<CustomDatePickerProps<Dayjs>>;
