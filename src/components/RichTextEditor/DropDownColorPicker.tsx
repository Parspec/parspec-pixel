import { ColorResult, TransitionsColorPicker } from '../ColorPicker';

type Props = {
    color: string;
    onChange: (color: ColorResult) => void;
    onClick: () => void;
};

export default function DropdownColorPicker({ color, onChange, onClick }: Props) {
    return <TransitionsColorPicker onClick={onClick} color={color} onChange={(color: ColorResult) => onChange(color)} />;
}
