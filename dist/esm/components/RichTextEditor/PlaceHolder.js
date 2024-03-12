import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '../Box';
import './RichText.css';
export default function Placeholder({ placeholderPositionTop, placeholderPositionBottomLeft }) {
    return (_jsx(Box, Object.assign({ className: "editor-placeholder", sx: { top: placeholderPositionTop, left: placeholderPositionBottomLeft } }, { children: "Enter text..." })));
}
//# sourceMappingURL=PlaceHolder.js.map