import { HTMLInputTypeAttribute } from 'react';
interface ITextInput {
    label: string;
    onChange: (val: string) => void;
    placeholder?: string;
    value: string;
    type?: HTMLInputTypeAttribute;
}
export default function TextInput({ label, value, onChange, placeholder, type }: ITextInput): JSX.Element;
export {};
