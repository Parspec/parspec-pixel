import { FocusEvent } from 'react';
import { mark } from '../Slider';
interface RangeSliderProps {
    value: [number, number];
    min: number;
    max: number;
    size?: 'small' | 'medium';
    step?: number;
    color: 'primary' | 'secondary' | 'tertiary' | 'neutral';
    headerTitle?: string;
    onChange: (data: [number, number]) => void;
    onBlur: (data: FocusEvent<HTMLInputElement>) => void;
    marks?: boolean | mark[];
    disabled?: boolean;
    textfieldWidth?: number;
    textfieldHeight?: number;
    disableSwap?: boolean;
}
export declare const RangeSlider: import("react").ForwardRefExoticComponent<RangeSliderProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
