import { ColorResult, TransitionsColorPicker } from '../ColorPicker';
import { Box } from '../Box';

interface IDropdownColorPicker {
    color: string;
    onChange: (color: ColorResult) => void;
}

export default function DropdownColorPicker({ color, onChange }: IDropdownColorPicker) {
    return (
        <Box width="30px">
            <TransitionsColorPicker color={color} onChange={(color: ColorResult) => onChange(color)} />
        </Box>
    );
}
