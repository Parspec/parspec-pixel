import Popper, { PopperProps } from '@mui/material/Popper';

export default function CustomPopper({ children, ...props }: PopperProps) {
    return <Popper {...props}>{children}</Popper>;
}
