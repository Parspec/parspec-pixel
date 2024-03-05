import { ColorResult, TransitionsColorPicker } from '../ColorPicker';

interface IDropdownColorPicker {
    color: string;
    onChange: (color: ColorResult) => void;
}

export default function DropdownColorPicker({ color, onChange }: IDropdownColorPicker) {
    return <TransitionsColorPicker color={color} onChange={(color: ColorResult) => onChange(color)} />;
}
