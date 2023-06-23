import { forwardRef, FocusEvent, useState, useEffect } from 'react';
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
    onBlur: (data: FocusEvent<HTMLInputElement>) => void;
    marks?: boolean | mark[];
    disabled?: boolean;
    textfieldWidth?: number;
    textfieldHeight?: number;
    disableSwap?: boolean;
}

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

export const RangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>((props, ref) => {
    const { value, size, step, marks, min, max, color, headerTitle, disabled, textfieldWidth, textfieldHeight, onChange: onRangeChange, onBlur: onBlurChange, disableSwap } = props;

    const [textFieldVal, setTextFieldVal] = useState<{ lowerField: number; upperField: number }>({ lowerField: value[0], upperField: value[1] });

    useEffect(() => {
        const adjustedValues = adjustValues(value, min, max);
        onRangeChange(adjustedValues);
    }, []);

    const sliderChangeHandler = (e: any) => {
        const data = e.target.value;
        const newData: [number, number] = [Number(data[0]), Number(data[1])];
        setTextFieldVal({ ...textFieldVal, lowerField: newData[0], upperField: newData[1] });
        onRangeChange(newData);
    };

    const minChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currValue = Number(event.target.value);
        const newData: [number, number] = [currValue, value[1]];
        setTextFieldVal({ ...textFieldVal, lowerField: newData[0], upperField: newData[1] });
        // onRangeChange(newData);
    };

    const maxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currValue = Number(event.target.value);
        const newData: [number, number] = [value[0], currValue];
        setTextFieldVal({ ...textFieldVal, lowerField: newData[0], upperField: newData[1] });
        // onRangeChange(newData);
    };

    const blurHandler = (event: FocusEvent<HTMLInputElement>) => {
        const rawData: [number, number] = [textFieldVal.lowerField, textFieldVal.upperField];
        const newVal = adjustValues(rawData, min, max);
        setTextFieldVal({ ...textFieldVal, lowerField: newVal[0], upperField: newVal[1] });
        onRangeChange(newVal);
        onBlurChange(event);
    };

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const rawData: [number, number] = [textFieldVal.lowerField, textFieldVal.upperField];
            const newVal = adjustValues(rawData, min, max);
            setTextFieldVal({ ...textFieldVal, lowerField: newVal[0], upperField: newVal[1] });
            onRangeChange(newVal);
        }
    };

    return (
        <Box ref={ref} width={1} display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
            <BodyXS color={'text.secondary'}>{headerTitle}</BodyXS>
            <Box mt={headerTitle ? 2 : 0} display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={1}>
                <Box width={textfieldWidth ? textfieldWidth : 64} height={textfieldHeight ? textfieldHeight : 36}>
                    <TextField
                        label=""
                        type="number"
                        //doing .toString() to eliminate the leading zero bug
                        value={textFieldVal.lowerField.toString()}
                        // value={value[0].toString()}
                        inputProps={{ style: { textAlign: 'center' } }}
                        onChange={minChangeHandler}
                        onBlur={blurHandler}
                        onKeyDown={keyDownHandler}
                        disabled={disabled}
                    />
                </Box>

                <Box pl={4} pr={4} width={1}>
                    <Slider
                        value={value}
                        min={min}
                        max={max}
                        color={color}
                        size={size}
                        marks={marks}
                        step={step}
                        onChange={sliderChangeHandler}
                        onBlur={onBlurChange}
                        disabled={disabled}
                        disableSwap={disableSwap}
                    />
                </Box>

                <Box width={textfieldWidth ? textfieldWidth : 64} height={textfieldHeight ? textfieldHeight : 36}>
                    <TextField
                        label=""
                        type="number"
                        //doing .toString() to eliminate the leading zero bug
                        value={textFieldVal.upperField.toString()}
                        // value={value[1].toString()}
                        inputProps={{ style: { textAlign: 'center' } }}
                        onChange={maxChangeHandler}
                        onBlur={blurHandler}
                        onKeyDown={keyDownHandler}
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
