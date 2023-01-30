import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { default as MUISelect, SelectProps as MUISelectProps } from '@mui/material/Select';

interface SelectMenuOption {
    value: string | number;
    displayText: string;
}

export interface SelectProps extends Omit<MUISelectProps, 'classes' | 'sx'> {
    label: string;
    options: SelectMenuOption[];
    labelId: string;
    id: string;
}

export const Select: React.FC<SelectProps> = ({ id, labelId, options, label, ...rest }) => (
    <>
        <InputLabel id={labelId}>{label}</InputLabel>
        <MUISelect {...rest} labelId={labelId} label={label} id={id}>
            {options.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                    {item.displayText}
                </MenuItem>
            ))}
        </MUISelect>
    </>
);

Select.defaultProps = {
    label: 'Select',
    options: [
        { value: 10, displayText: 'Ten' },
        { value: 20, displayText: 'Twenty' },
        { value: 30, displayText: 'Thirty' }
    ],
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select'
};
