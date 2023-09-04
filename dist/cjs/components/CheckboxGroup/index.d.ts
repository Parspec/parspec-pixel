/// <reference types="react" />
interface CheckboxOptions {
    label: string;
    name: string;
    checked: boolean;
}
interface CheckboxGroupProps {
    label: string;
    options: Array<CheckboxOptions>;
    size: 'small' | 'medium';
    onChange: (name: string, checked: boolean) => void;
    error: boolean;
    helperText?: string;
    color?: 'primary' | 'secondary' | 'tertiary';
}
export declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export {};
