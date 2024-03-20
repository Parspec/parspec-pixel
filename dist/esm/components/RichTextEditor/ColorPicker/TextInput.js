import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '../../Box';
import { TextField } from '../../TextField';
export default function TextInput({ label, value, onChange, placeholder = '', type = 'text' }) {
    return (_jsx(Box, Object.assign({ display: "flex", alignItems: "center", justifyContent: 'space-between', mb: "10px" }, { children: _jsx(Box, { children: _jsx(TextField, { size: "small", type: type, label: label, placeholder: placeholder, value: value, onChange: (e) => {
                    onChange(e.target.value);
                } }) }) })));
}
//# sourceMappingURL=TextInput.js.map