import { ColorResult, TransitionsColorPicker } from '../ColorPicker';

type Props = {
    color: string;
    onChange: (color: ColorResult) => void;
};

export default function DropdownColorPicker({ color, onChange }: Props) {
    return <TransitionsColorPicker color={color} onChange={(color: ColorResult) => onChange(color)} />;
}
