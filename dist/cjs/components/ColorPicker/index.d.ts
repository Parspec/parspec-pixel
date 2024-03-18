/// <reference types="react" />
import { SketchPickerProps, ColorResult, Color } from 'react-color';
export declare const ColorPicker: React.FC<SketchPickerProps>;
interface ITransitionsColorPicker {
    color: string;
    onChange: (param: ColorResult) => void;
    onClickAway?: () => void;
    onClick?: (open: boolean) => void;
}
export { ColorResult, Color };
export declare const TransitionsColorPicker: React.FC<ITransitionsColorPicker>;
