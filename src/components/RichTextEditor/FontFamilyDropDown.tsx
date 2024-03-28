import { FONT_FAMILY_OPTIONS } from './constants';
import { SelectChangeEvent } from '../Select';
import { Select } from '../Select';
import { Box } from '../Box';

export function FontDropDown({ disabled = false, onChange, value }: { value: string; disabled?: boolean; onChange: (e: SelectChangeEvent<unknown>) => void }): JSX.Element {
    return (
        <Box width="124px">
            <Select disabled={disabled} label="" onChange={onChange} optionLabelKeyname="name" optionValueKeyname="id" options={FONT_FAMILY_OPTIONS} value={value} />
        </Box>
    );
}
