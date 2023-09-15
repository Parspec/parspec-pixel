import { default as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';
import styled from '@mui/material/styles/styled';
import InputAdornment from '@mui/material/InputAdornment';

import { forwardRef } from 'react';
import { Box } from '../Box';
import { Chip } from '../Chip';
import { Tooltip } from '../Tooltip';

const StyledMUITextField = styled(MUITextField)({
    '& .MuiFormHelperText-root': {
        marginLeft: '0px'
    },
    '& .Mui-error': {
        fontSize: '14px'
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
    helperText?: string | React.ReactNode;
    icon?: React.ReactNode;
    scrollAreaHeight?: number;
}

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(({ variant, color, error, size, label, chips, onChipDelete, helperText, icon, scrollAreaHeight, ...rest }, ref) => (
    <>
        <StyledMUITextField
            fullWidth
            label={label}
            ref={ref}
            size={size}
            variant={variant}
            color={color}
            error={error}
            helperText={helperText}
            InputProps={{
                endAdornment: icon && <InputAdornment position="end">{icon}</InputAdornment>
            }}
            {...rest}
        />
        {chips && scrollAreaHeight && (
            <Box mt={2} display="flex" flexWrap="wrap" rowGap={1} overflow={'hidden'} sx={{ overflowY: 'scroll' }} maxHeight={scrollAreaHeight}>
                {chips.map((chip, index) => (
                    <Tooltip placement="bottom" title={chip}>
                        <Box mr={1} maxWidth="40%" key={`${chip}-${index}`}>
                            <Chip label={chip} onDelete={() => onChipDelete!(index)} />
                        </Box>
                    </Tooltip>
                ))}
            </Box>
        )}
        {chips && !scrollAreaHeight && (
            <Box mt={2} display="flex" flexWrap="wrap" rowGap={1}>
                {chips.map((chip, index) => (
                    <Tooltip placement="bottom" title={chip}>
                        <Box mr={1} maxWidth="40%" key={`${chip}-${index}`}>
                            <Chip label={chip} onDelete={() => onChipDelete!(index)} />
                        </Box>
                    </Tooltip>
                ))}
            </Box>
        )}
    </>
));

TextField.defaultProps = {
    variant: 'outlined',
    color: 'primary',
    error: false,
    size: 'small',
    inputProps: { maxLength: 255 }
};
