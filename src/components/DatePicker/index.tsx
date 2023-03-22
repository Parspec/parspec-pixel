import { Dayjs } from 'dayjs';
import { Box } from '@mui/system';
import { TextFieldProps } from '@mui/material/TextField';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const CustomDatePicker: React.FC<DatePickerProps<Dayjs>> = (props) => {
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

type BrowserInputProps = TextFieldProps & {
    ownerState?: any;
};

const BrowserInput = function BrowserInput(props: BrowserInputProps) {
    const { inputProps, InputProps, ownerState, inputRef, error, ...other } = props;

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }} ref={InputProps?.ref}>
            <input ref={inputRef} style={{ height: '18px', width: '100%' }} {...inputProps} {...(other as any)} />
            {InputProps?.endAdornment}
        </Box>
    );
};

export const CustomInputDatePicker: React.FC<DatePickerProps<Dayjs>> = (props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                {...props}
                slots={{
                    textField: BrowserInput
                }}
            />
        </LocalizationProvider>
    );
};
