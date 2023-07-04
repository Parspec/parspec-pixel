/// <reference types="react" />
import { PaperProps as MUIPaperProps } from '@mui/material/Paper';
export interface PaperProps extends Omit<MUIPaperProps, 'classes'> {
}
export declare const Paper: import("react").ForwardRefExoticComponent<Omit<PaperProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
