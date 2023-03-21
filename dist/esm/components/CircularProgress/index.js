import { jsx as _jsx } from 'react/jsx-runtime';
import { default as MUICircularProgress } from '@mui/material/CircularProgress';
import { SIZE_OPTIONS } from '../../Shared/utils';
export const CircularProgress = (_a) => {
    var { color, size } = _a,
        rest = __rest(_a, ['color', 'size']);
    return _jsx(MUICircularProgress, Object.assign({ color: color, size: SIZE_OPTIONS[size || 'md'] }, rest));
};
CircularProgress.defaultProps = {
    color: 'inherit',
    size: 'md'
};
//# sourceMappingURL=index.js.map
