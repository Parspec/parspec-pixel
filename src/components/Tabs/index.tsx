import { ReactNode } from 'react';
import { default as MUITabs, TabsProps } from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import { Box } from '../Box';

interface TabsPropsCustom extends TabsProps {
    selectedTab: string;
    tabs: { label: ReactNode; value: string; content: ReactNode }[];
    handleTabChange: (newValue: string) => void;
}
interface TabPanelProps {
    children?: React.ReactNode;
    index: string;
    value: string;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </Box>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}
export const Tabs: React.FC<TabsPropsCustom> = ({ selectedTab, tabs, handleTabChange }) => {
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        handleTabChange(newValue);
    };
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <MUITabs value={selectedTab} onChange={handleChange}>
                    {tabs.map((item, index) => (
                        <Tab label={item.label} value={item.value} {...a11yProps(index)} />
                    ))}
                </MUITabs>
            </Box>
            {tabs.map((item) => (
                <TabPanel value={selectedTab} index={item.value}>
                    <>{item.content}</>
                </TabPanel>
            ))}
        </>
    );
};
