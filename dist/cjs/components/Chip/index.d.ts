/// <reference types="react" />
import { ChipProps as MUIChipProps } from '@mui/material/Chip';
export interface ChipProps extends Omit<MUIChipProps, 'classes'> {
    label: string;
}
export declare const Chip: React.FC<ChipProps>;
