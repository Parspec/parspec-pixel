import { ReactNode } from 'react';
import { TabsProps } from '@mui/material/Tabs';
interface TabsPropsCustom extends Omit<TabsProps, 'onChange'> {
    selectedTab: string;
    options: {
        label: ReactNode;
        value: string;
        disabled?: boolean;
    }[];
    onChange: (newValue: string) => void;
}
export declare const Tabs: React.FC<TabsPropsCustom>;
export {};
