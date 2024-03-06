import { ColorResult } from '../ColorPicker';
interface IDropdownColorPicker {
    color: string;
    onChange: (color: ColorResult) => void;
}
export default function DropdownColorPicker({ color, onChange }: IDropdownColorPicker): import("react/jsx-runtime").JSX.Element;
export {};
