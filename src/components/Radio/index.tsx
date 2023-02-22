import { default as MUIRadio, RadioProps as MUIRadioProps } from '@mui/material/Radio';

export interface RadioProps extends Omit<MUIRadioProps, 'classes' | 'sx' | 'color' | 'size'> {
    color: 'primary' | 'secondary' | 'tertiary';
    size: 'small' | 'medium';
}

export const Radio: React.FC<RadioProps> = (props) => {
    return <MUIRadio {...props} />;
};

Radio.defaultProps = {
    size: 'small',
    color: 'tertiary'
};
