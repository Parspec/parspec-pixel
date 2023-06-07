import { forwardRef } from 'react';
import { default as MUISlider, SliderProps as MUISliderProps } from '@mui/material/Slider';

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

export const Slider = forwardRef<HTMLButtonElement, SliderProps>(({ size, step, min, max, color, marks, disabled, disableSwap, ...rest }, ref) => {
    return <MUISlider ref={ref} size={size} marks={marks} step={step} min={min} max={max} color={color} disabled={disabled} disableSwap={disableSwap} {...rest} />;
});

Slider.defaultProps = {
    size: 'small',
    color: 'primary',
    disabled: false,
    min: 0,
    max: 100,
    disableSwap: true
};
