import { forwardRef } from 'react';
import { default as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { CircularProgress } from '../CircularProgress';

export interface ButtonProps extends Omit<MUIButtonProps, 'classes'> {
    color?: 'primary' | 'secondary' | 'tertiary' | 'error';
    isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ disabled, isLoading, color, ...rest }, ref) => {
    return (
<<<<<<< HEAD
        <MUIButton ref={ref} {...rest} color={color} sx={disabled || isLoading ? { opacity: 0.5, pointerEvents: 'none' } : {}} startIcon={isLoading ? <CircularProgress color={'inherit'} /> : null} />
=======
        <MUIButton
            ref={ref}
            {...rest}
            color={color}
            sx={disabled || isLoading ? { opacity: 0.5, pointerEvents: 'none' } : {}}
<<<<<<< HEAD
            startIcon={isLoading ? <CircularProgress color={'inherit'} size="sm" /> : null}
=======
            startIcon={isLoading ? <CircularProgress color={'primary'} size="1rem" /> : null}
>>>>>>> c9d772a (created build and resolved componets errors)
        />
>>>>>>> 93bf7fe (resoved conflicts)
    );
});

Button.defaultProps = {
    color: 'primary',
    variant: 'contained',
    isLoading: false
};
