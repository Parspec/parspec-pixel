import { jsx as _jsx } from "react/jsx-runtime";
import { FONT_FAMILY_OPTIONS } from './constants';
import { Select } from '../Select';
import { Box } from '../Box';
export default function FontDropDown({ disabled = false, onChange, value }) {
    return (_jsx(Box, Object.assign({ width: "124px" }, { children: _jsx(Select, { disabled: disabled, label: "", onChange: onChange, optionLabelKeyname: "name", optionValueKeyname: "id", options: FONT_FAMILY_OPTIONS, value: value }) })));
}
//# sourceMappingURL=FontFamilyDropDown.js.map