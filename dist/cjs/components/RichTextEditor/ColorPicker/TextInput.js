"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = require("../../Box");
const TextField_1 = require("../../TextField");
function TextInput({ label, value, onChange, placeholder = '', type = 'text' }) {
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ display: "flex", alignItems: "center", justifyContent: 'space-between', mb: "10px" }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(TextField_1.TextField, { size: "small", type: type, label: label, placeholder: placeholder, value: value, onChange: (e) => {
                    onChange(e.target.value);
                } }) }) })));
}
exports.default = TextInput;
//# sourceMappingURL=TextInput.js.map