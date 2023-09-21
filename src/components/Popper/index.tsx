import Popper, { PopperProps } from '@mui/material/Popper';

import { Fade } from '@mui/material';

export const CustomPopper: React.FC<PopperProps> = ({ children, ...props }) => {
    return <Popper {...props}>{children}</Popper>;
};

export { Fade };
