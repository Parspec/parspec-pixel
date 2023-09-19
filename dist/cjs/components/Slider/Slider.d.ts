/// <reference types="react" />
import { SliderProps as MUISliderProps } from '@mui/material/Slider';
export interface mark {
    value: number;
    label: string | number;
}
export interface SliderProps extends Omit<MUISliderProps, 'classes'> {
    value: number | [number, number];
    size?: 'small' | 'medium';
    step?: number;
    min: number;
    max: number;
    color: 'primary' | 'secondary' | 'tertiary' | 'neutral';
    marks?: boolean | mark[];
    disabled?: boolean;
    disableSwap?: boolean;
}
export declare const Slider: import("react").ForwardRefExoticComponent<Omit<SliderProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
