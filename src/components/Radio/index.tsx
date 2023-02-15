import { default as MUIRadio, RadioProps as MUIRadioProps } from '@mui/material/Radio';

export interface RadioProps extends Omit<MUIRadioProps, 'classes'> {}

export const Radio: React.FC<RadioProps> = (props) => {
    return <MUIRadio {...props} />;
};

Radio.defaultProps = {
    size: 'medium',
    color: 'primary'
};
