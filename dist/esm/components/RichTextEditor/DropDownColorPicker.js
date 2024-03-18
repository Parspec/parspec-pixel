import { jsx as _jsx } from "react/jsx-runtime";
import { TransitionsColorPicker } from '../ColorPicker';
import { Box } from '../Box';
export default function DropdownColorPicker({ color, onChange }) {
    return (_jsx(Box, Object.assign({ width: "30px" }, { children: _jsx(TransitionsColorPicker, { color: color, onChange: (color) => onChange(color) }) })));
}
//# sourceMappingURL=DropDownColorPicker.js.map