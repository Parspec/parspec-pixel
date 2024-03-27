import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '../Box';
import { CircularProgress } from '../CircularProgress';
import { BodySmall } from '../Typography';
export const loadingOverlayComponent = (props) => {
    return (_jsx(Box, Object.assign({ className: "ag-loading-center" }, { children: _jsx(Box, Object.assign({ sx: { opacity: 1 }, "aria-label": "loading" }, { children: _jsx(CircularProgress, { size: "lg", color: 'primary' }) })) })));
};
export const noRowsOverlayComponent = (props) => {
    const { isTableHaveFooter } = props;
    return (_jsx(Box, Object.assign({ className: `ag-overlay-no-rows-wrapper ${isTableHaveFooter ? '' : ' overlay-rows-footer'}` }, { children: _jsx(BodySmall, { children: "No records to display" }) })));
};
//# sourceMappingURL=helper.js.map