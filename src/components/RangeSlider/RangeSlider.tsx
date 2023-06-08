import { useState, forwardRef, FocusEvent, useEffect } from 'react';
import { Box } from '../Box';
import { BodyXS } from '../Typography';
import { TextField } from '../TextField';
import { Slider } from '../Slider';
import { mark } from '../Slider';

interface RangeSliderProps {
    value: [number, number];
    min: number;
    max: number;
    size?: 'small' | 'medium';
    step?: number;
    color: 'primary' | 'secondary' | 'tertiary' | 'neutral';
    headerTitle?: string;
    onChange: (data: [number, number]) => void;
    marks?: boolean | mark[];
    disabled?: boolean;
    textfieldWidth?: number;
    textfieldHeight?: number;
    disableSwap?: boolean;
}

export const RangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>((props, ref) => {
    const { value, size, step, marks, min, max, color, headerTitle, disabled, textfieldWidth, textfieldHeight, onChange: onRangeChange, disableSwap } = props;

    const [currThumbValue, setCurrThumbValue] = useState({ smallerThumb: value[0], greaterThumb: value[1] });

    function adjustValues(valueArr: [number, number], minVal: number, maxVal: number): [number, number] {
        let [value1, value2] = valueArr;

        // Check if value1 exceeds maxVal and adjust if necessary
        if (value1 > maxVal) {
            value1 = maxVal;
        }

        // Check if value2 exceeds maxVal and adjust if necessary
        if (value2 > maxVal) {
            value2 = maxVal;
        }

        // Check if value1 is greater than value2 and adjust if necessary
        if (value1 > value2) {
            value1 = value2;
        }

        // Check if value1 is smaller than minVal and adjust if necessary
        if (value1 < minVal) {
            value1 = minVal;
        }

        // Check if value2 is smaller than minVal and adjust if necessary
        if (value2 < minVal) {
            value2 = minVal;
        }

        // Check if value2 is smaller than value1 and adjust if necessary
        if (value2 < value1) {
            value2 = value1;
        }

        return [value1, value2];
    }

    useEffect(() => {
        const adjustedValues = adjustValues(value, min, max);
        setCurrThumbValue(() => ({ ...currThumbValue, smallerThumb: adjustedValues[0], greaterThumb: adjustedValues[1] }));
    }, []);

    const changeHandler = (event: any) => {
        const data = event.target.value;
        setCurrThumbValue(() => ({ ...currThumbValue, smallerThumb: data[0], greaterThumb: data[1] }));
        onRangeChange(data);
    };

    const minChangeHandler = (event: any) => {
        const currValue = Number(event.target.value);
        setCurrThumbValue(() => ({ ...currThumbValue, smallerThumb: currValue }));
    };

    const minBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
        const currValueArr: [number, number] = [currThumbValue.smallerThumb, currThumbValue.greaterThumb];
        const newVal = adjustValues(currValueArr, min, max)[0];
        onRangeChange([newVal, currThumbValue.greaterThumb]);
        setCurrThumbValue(() => ({ ...currThumbValue, smallerThumb: newVal }));
    };

    const minKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const currValueArr: [number, number] = [currThumbValue.smallerThumb, currThumbValue.greaterThumb];
            const newVal = adjustValues(currValueArr, min, max)[0];
            onRangeChange([newVal, currThumbValue.greaterThumb]);
            setCurrThumbValue(() => ({ ...currThumbValue, smallerThumb: newVal }));
        }
    };

    const maxChangeHandler = (event: any) => {
        const currValue = Number(event.target.value);
        setCurrThumbValue(() => ({ ...currThumbValue, greaterThumb: currValue }));
    };

    const maxBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
        const currValueArr: [number, number] = [currThumbValue.smallerThumb, currThumbValue.greaterThumb];
        const newVal = adjustValues(currValueArr, min, max)[1];
        onRangeChange([currThumbValue.smallerThumb, newVal]);
        setCurrThumbValue(() => ({ ...currThumbValue, greaterThumb: newVal }));
    };

    const maxKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const currValueArr: [number, number] = [currThumbValue.smallerThumb, currThumbValue.greaterThumb];
            const newVal = adjustValues(currValueArr, min, max)[1];
            onRangeChange([currThumbValue.smallerThumb, newVal]);
            setCurrThumbValue(() => ({ ...currThumbValue, greaterThumb: newVal }));
        }
    };

    return (
        <Box ref={ref} width={1} display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
            <BodyXS color={'text.secondary'}>{headerTitle}</BodyXS>
            <Box mt={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={1}>
                <Box width={textfieldWidth ? textfieldWidth : 64} height={textfieldHeight ? textfieldHeight : 36}>
                    <TextField
                        label=""
                        type="number"
                        //doing .toString() to eliminate the leading zero bug
                        value={currThumbValue.smallerThumb.toString()}
                        inputProps={{ style: { textAlign: 'center' } }}
                        onChange={minChangeHandler}
                        onBlur={minBlurHandler}
                        onKeyDown={minKeyDownHandler}
                        disabled={disabled}
                    />
                </Box>

                <Box pl={4} pr={4} width={1}>
                    <Slider
                        value={[currThumbValue.smallerThumb, currThumbValue.greaterThumb]}
                        // value={value}
                        min={min}
                        max={max}
                        color={color}
                        size={size}
                        marks={marks}
                        step={step}
                        onChange={changeHandler}
                        disabled={disabled}
                        disableSwap={disableSwap}
                    />
                </Box>

                <Box width={textfieldWidth ? textfieldWidth : 64} height={textfieldHeight ? textfieldHeight : 36}>
                    <TextField
                        label=""
                        type="number"
                        //doing .toString() to eliminate the leading zero bug
                        value={currThumbValue.greaterThumb.toString()}
                        inputProps={{ style: { textAlign: 'center' } }}
                        onChange={maxChangeHandler}
                        onBlur={maxBlurHandler}
                        onKeyDown={maxKeyDownHandler}
                        disabled={disabled}
                    />
                </Box>
            </Box>
        </Box>
    );
});

RangeSlider.defaultProps = {
    value: [0, 100],
    size: 'small',
    color: 'primary',
    disabled: false,
    disableSwap: true
};
