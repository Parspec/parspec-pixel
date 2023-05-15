interface MenuProps {
    options: {
        label: string;
        onClick: () => void;
        color?: string;
    }[];
    children?: any;
}
export declare const Menu: ({ options, children }: MenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
