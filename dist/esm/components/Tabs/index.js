import { jsx as _jsx } from 'react/jsx-runtime';
import { default as MUITabs } from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import { Box } from '../Box';
export const Tabs = ({ selectedTab, options, onChange }) => {
    const handleChange = (event, newValue) => {
        onChange(newValue);
    };
    return _jsx(
        Box,
        Object.assign(
            { sx: { borderBottom: 1, borderColor: 'divider' } },
            {
                children: _jsx(Box, {
                    children: _jsx(
                        MUITabs,
                        Object.assign({ value: selectedTab, onChange: handleChange }, { children: options.map((item, index) => _jsx(Tab, { label: item.label, value: item.value }, index)) })
                    )
                })
            }
        )
    );
};
//# sourceMappingURL=index.js.map
