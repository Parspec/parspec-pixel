import { forwardRef } from 'react';
import { default as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { CircularProgress } from '../CircularProgress';
import { ButtonSizeType } from '../../Shared/interfaces';

export interface ButtonProps extends Omit<MUIButtonProps, 'classes'> {
    color?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success';
    isLoading?: boolean;
    size?: ButtonSizeType;
}

const XS_CLASS = {
    height: '24px'
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ disabled, isLoading, color, size = 'small', ...rest }, ref) => {
    return (
        <MUIButton
            ref={ref}
            {...rest}
            color={color}
            sx={disabled || isLoading ? { opacity: 0.5, pointerEvents: 'none', ...(size === 'xs' ? XS_CLASS : {}) } : { ...(size === 'xs' ? XS_CLASS : {}) }}
            startIcon={isLoading ? <CircularProgress color={'inherit'} size="sm" /> : null}
        />
    );
});

Button.defaultProps = {
    color: 'tertiary',
    variant: 'contained',
    isLoading: false
};
