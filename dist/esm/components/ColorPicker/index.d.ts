/// <reference types="react" />
import { SketchPickerProps } from 'react-color';
export declare const ColorPicker: React.FC<SketchPickerProps>;
export interface ITransitionsColorPicker extends SketchPickerProps {
    disablePortal?: boolean;
    placement?: 'auto-end' | 'auto-start' | 'auto' | 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
}
export declare const TransitionsColorPicker: React.FC<ITransitionsColorPicker>;
