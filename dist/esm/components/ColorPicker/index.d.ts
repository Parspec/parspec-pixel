/// <reference types="react" />
import { SketchPickerProps, ColorResult } from 'react-color';
export declare const ColorPicker: React.FC<SketchPickerProps>;
interface ITransitionsColorPicker {
    color: string;
    onChange: (param: ColorResult) => void;
    onClickAway: () => void;
}
export declare const TransitionsColorPicker: React.FC<ITransitionsColorPicker>;
export {};
