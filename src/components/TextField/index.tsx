import { default as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';
import { forwardRef } from 'react';

export interface TextFieldProps extends Omit<MUITextFieldProps, 'margin' | 'classes'> {
    variant?: 'standard' | 'outlined' | 'filled';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    error?: boolean;
    size?: 'small' | 'medium' | 'large';
}

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(({ variant, color, error, size, ...rest }, ref) => {
    const sizeProps = { size };
    if (size && size === 'large') {
        delete sizeProps['size'];
        switch (variant) {
            case 'standard':
                sizeProps['sx'] = {
                    '& .MuiInput-root': {
                        fontSize: 18
                    }
                };
                break;

            case 'filled':
                sizeProps['sx'] = {
                    '& .MuiFilledInput-root': {
                        fontSize: 18
                    }
                };
                break;

            case 'outlined':
                sizeProps['sx'] = {
                    '& .MuiOutlinedInput-root ': {
                        fontSize: 18
                    }
                };
                break;

            default:
                break;
        }
    }

    console.log(sizeProps);

    return <MUITextField fullWidth {...sizeProps} ref={ref} variant={variant} color={color} error={error} {...rest} />;
});

TextField.defaultProps = {
    variant: 'outlined',
    color: 'primary',
    error: false,
    size: 'small'
};
