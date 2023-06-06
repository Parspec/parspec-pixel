// import { default as MUIRadio, RadioProps as MUIRadioProps } from '@mui/material/Radio';

// export interface RadioProps extends Omit<MUIRadioProps, 'classes' | 'sx' | 'color' | 'size'> {
//     color?: 'primary' | 'secondary' | 'tertiary';
//     size: 'small' | 'medium';
// }

// export const Radio: React.FC<RadioProps> = (props) => {
//     return <MUIRadio {...props} />;
// };

// Radio.defaultProps = {
//     size: 'small'
// };

import { default as MUISlider, SliderProps as MUISliderProps } from '@mui/material/Slider';

export interface SliderProps extends Omit<MUISliderProps, 'classes'> {
    // color?: 'primary' | 'secondary' | 'tertiary';
    size: 'small' | 'medium';
}

export const Slider: React.FC<SliderProps> = (props) => {
    return <MUISlider {...props} />;
};

Slider.defaultProps = {
    size: 'small'
};
