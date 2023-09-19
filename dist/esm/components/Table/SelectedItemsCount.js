import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Box } from "../Box";
import { IconButton } from "../IconButton";
import { CloseIcon } from "../Icons";
import { BodySmall } from "../Typography";
export const SelectedItemsCount = (props) => {
    const { count, closeBanner } = props;
    return (_jsxs(Box, Object.assign({ p: 1, pl: 3, pr: 2, bgcolor: 'primary.main', color: 'secondary.contrastText', display: "flex", alignItems: "center", gap: 2 }, { children: [_jsxs(BodySmall, Object.assign({ color: "secondary.contrastText", limit: false }, { children: [count, " item(s) selected"] })), _jsx(IconButton, Object.assign({ onClick: closeBanner, sx: { color: 'secondary.contrastText', margin: 0, padding: 0 } }, { children: _jsx(CloseIcon, { fontSize: "small" }) }))] })));
};
//# sourceMappingURL=SelectedItemsCount.js.map