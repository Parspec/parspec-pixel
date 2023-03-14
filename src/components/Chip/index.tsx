import { default as MUIChip, ChipProps as MUIChipProps } from '@mui/material/Chip';
import { forwardRef } from 'react';

export interface ChipProps extends Omit<MUIChipProps, 'classes'> {
    label: string;
}

export const Chip: React.FC<ChipProps> = forwardRef(({ label, ...rest }, ref) => {
    return <MUIChip ref={ref} label={label} {...rest} />;
});

Chip.defaultProps = {
    variant: 'outlined'
};
