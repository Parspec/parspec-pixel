import { ReactNode } from 'react';
import { default as MUITabs, TabsProps } from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import { Box } from '../Box';

interface TabsPropsCustom extends Omit<TabsProps, 'onChange'> {
    selectedTab: string;
    options: { label: ReactNode; value: string; color?: string }[];
    onChange: (newValue: string) => void;
}

export const Tabs: React.FC<TabsPropsCustom> = ({ selectedTab, options, onChange }) => {
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        onChange(newValue);
    };
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Box>
                <MUITabs value={selectedTab} onChange={handleChange}>
                    {options.map((item, index) => (
                        <Tab label={item.label} value={item.value} key={index} sx={{ color: item?.color ? item?.color : 'secondary.main' }} />
                    ))}
                </MUITabs>
            </Box>
        </Box>
    );
};
