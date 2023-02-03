import { ReactNode } from 'react';
import { default as MUITabs, TabsProps } from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import { Box } from '../Box';

interface TabsPropsCustom extends TabsProps {
    selectedTab: string;
    options: { label: ReactNode; value: string }[];
    handleTabChange: (newValue: string) => void;
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}
export const Tabs: React.FC<TabsPropsCustom> = ({ selectedTab, options, handleTabChange }) => {
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        handleTabChange(newValue);
    };
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <MUITabs value={selectedTab} onChange={handleChange}>
                {options.map((item, index) => (
                    <Tab label={item.label} value={item.value} {...a11yProps(index)} />
                ))}
            </MUITabs>
        </Box>
    );
};
