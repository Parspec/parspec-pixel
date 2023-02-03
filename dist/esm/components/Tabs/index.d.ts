import { ReactNode } from 'react';
import { TabsProps } from '@mui/material/Tabs';
interface TabsPropsCustom extends TabsProps {
    tabLabelList: ReactNode[];
    tabPannelList: ReactNode[];
}
export declare const Tabs: React.FC<TabsPropsCustom>;
export {};
