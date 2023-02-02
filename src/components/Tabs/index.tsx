import { Box } from '../Box';
import { default as MUITabs, TabsProps } from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import { ReactNode, useState } from 'react';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface TabsPropsCustom extends TabsProps {
    tabLabelList: ReactNode[];
    tabPannelList: ReactNode[];
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
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
export const Tabs: React.FC<TabsPropsCustom> = ({ tabLabelList, tabPannelList }) => {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <MUITabs value={value} onChange={handleChange} aria-label="pixel basic tabs">
                    {tabLabelList.map((item, index) => (
                        <Tab label={item} {...a11yProps(index)} />
                    ))}
                </MUITabs>
            </Box>
            {tabPannelList.map((item, index) => (
                <TabPanel value={value} index={index}>
                    {item}
                </TabPanel>
            ))}
        </>
    );
};
