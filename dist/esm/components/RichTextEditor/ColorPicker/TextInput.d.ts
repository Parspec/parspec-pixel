import { HTMLInputTypeAttribute } from 'react';
type Props = Readonly<{
    'data-test-id'?: string;
    label: string;
    onChange: (val: string) => void;
    placeholder?: string;
    value: string;
    type?: HTMLInputTypeAttribute;
}>;
export default function TextInput({ label, value, onChange, placeholder, type }: Props): JSX.Element;
export {};
