import { default as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';
import styled from '@mui/material/styles/styled';
import { forwardRef } from 'react';
import { Box } from '../Box';
import { Chip } from '../Chip';

const StyledMUITextField = styled(MUITextField)({
    '& .MuiFormHelperText-root': {
        marginLeft: '0px'
    }
});

export interface TextFieldProps extends Omit<MUITextFieldProps, 'margin' | 'classes'> {
    label: string;
    variant?: 'standard' | 'outlined' | 'filled';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    error?: boolean;
    size?: 'small' | 'medium';
    chips?: Array<string>;
    onChipDelete?: (index: number) => void;
    helperText?: string;
}

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(({ variant, color, error, size, label, chips, onChipDelete, helperText, ...rest }, ref) => (
    <>
        <StyledMUITextField fullWidth label={label} ref={ref} size={size} variant={variant} color={color} error={error} helperText={helperText} {...rest} />
        {chips && (
            <Box marginTop={2} display="flex" flexWrap="wrap">
                {chips.map((chip, index) => (
                    <Box marginRight={1}>
                        <Chip label={chip} onDelete={() => onChipDelete!(index)} />
                    </Box>
                ))}
            </Box>
        )}
    </>
));

TextField.defaultProps = {
    variant: 'outlined',
    color: 'primary',
    error: false,
    size: 'small'
};
