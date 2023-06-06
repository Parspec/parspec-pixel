import { default as MUIInputAdornment, InputAdornmentProps } from '@mui/material/InputAdornment';

export const InputAdornment: React.FC<InputAdornmentProps> = (props) => {
    return <MUIInputAdornment {...props} />;
};
