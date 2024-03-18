/// <reference types="react" />
import { SelectChangeEvent } from '../Select';
export default function FontDropDown({ disabled, onChange, value }: {
    value: string;
    disabled?: boolean;
    onChange: (e: SelectChangeEvent<unknown>) => void;
}): JSX.Element;
