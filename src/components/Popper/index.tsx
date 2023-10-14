import { default as MUIPopper, PopperProps } from '@mui/material/Popper';

export default function Popper({ children, ...props }: PopperProps) {
    return <MUIPopper {...props}>{children}</MUIPopper>;
}
