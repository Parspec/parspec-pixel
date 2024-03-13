import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '../Box';
import './RichText.css';
export default function Placeholder({ placeHolderText }) {
    return (_jsx(Box, Object.assign({ className: "editor-placeholder", sx: { top: '66px', left: '15px' } }, { children: placeHolderText })));
}
//# sourceMappingURL=PlaceHolder.js.map