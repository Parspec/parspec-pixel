/// <reference types="react" />
import { MenuProps } from '@mui/material';
interface MProps extends Pick<MenuProps, 'anchorOrigin' | 'transformOrigin'> {
    options: {
        label: string;
        onClick: () => void;
        color?: string;
    }[];
    children?: any;
}
export declare const Menu: {
    ({ options, children, anchorOrigin, transformOrigin }: MProps): JSX.Element;
    defaultProps: {
        anchorOrigin: {
            vertical: string;
            horizontal: string;
        };
        transformOrigin: {
            vertical: string;
            horizontal: string;
        };
    };
};
export {};
