/// <reference types="react" />
interface MenuProps {
    options: {
        label: string;
        onClick: () => void;
    }[];
}
export declare const Menu: ({ options }: MenuProps) => JSX.Element;
export {};
