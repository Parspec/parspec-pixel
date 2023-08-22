import { FocusEvent, MouseEvent } from 'react';
import { mark } from '../Slider';
interface RangeSliderProps {
    value: [number, number];
    min: number;
    max: number;
    onChange: (data: [number, number]) => void;
    onRangeBlur?: (event: FocusEvent<HTMLInputElement>, data: [number, number]) => void;
    onSliderMouseUp?: (event: MouseEvent<HTMLButtonElement>, data: [number, number]) => void;
    onTextfieldBlur?: (event: FocusEvent<HTMLInputElement>, data: [number, number]) => void;
    onTextfieldEnterKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>, data: [number, number]) => void;
    size?: 'small' | 'medium';
    step?: number;
    color?: 'primary' | 'secondary' | 'tertiary' | 'neutral';
    headerTitle?: string;
    marks?: boolean | mark[];
    disabled?: boolean;
    rightTextfieldWidth?: number;
    leftTextfieldWidth?: number;
    textfieldHeight?: number;
    disableSwap?: boolean;
    showPlus?: boolean;
}
export declare const RangeSlider: import("react").ForwardRefExoticComponent<RangeSliderProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
