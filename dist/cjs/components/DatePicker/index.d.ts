/// <reference types="react" />
import { Dayjs } from 'dayjs';
export interface CustomDatePickerProps {
    label?: string;
    value?: Dayjs | null;
    onChange?: (newValue: Dayjs | null) => void;
    defaultValue?: Dayjs;
}
export declare const CustomDatePicker: React.FC<CustomDatePickerProps>;
