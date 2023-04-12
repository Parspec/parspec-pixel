import { jsx as _jsx } from "react/jsx-runtime";
import { default as MUILinearProgress } from '@mui/material/LinearProgress';
import { forwardRef } from 'react';
import { Box } from '../Box';
export const LinearProgress = forwardRef((props, ref) => {
    return (_jsx(Box, Object.assign({ sx: { width: '100%' } }, { children: _jsx(MUILinearProgress, Object.assign({ sx: {
                height: 20
            }, ref: ref }, props)) })));
});
LinearProgress.defaultProps = {
    color: 'tertiary',
    variant: 'indeterminate'
};
//# sourceMappingURL=index.js.map