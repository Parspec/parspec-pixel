/// <reference types="react" />
import './ColorPicker.css';
interface ColorPickerProps {
    color: string;
    onChange?: (value: string, skipHistoryStack: boolean) => void;
}
export default function ColorPicker({ color, onChange }: Readonly<ColorPickerProps>): JSX.Element;
export interface Position {
    x: number;
    y: number;
}
export declare function toHex(value: string): string;
export {};
