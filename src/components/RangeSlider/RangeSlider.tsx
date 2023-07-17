import { forwardRef, FocusEvent, MouseEvent, useState, useEffect } from 'react';
import { Box } from '../Box';
import { BodyXS } from '../Typography';
import { TextField } from '../TextField';
import { Slider } from '../Slider';
import { mark } from '../Slider';
import { styled } from '@mui/material/styles';

const NumberTextField = styled(TextField)(({ theme }) => ({
    '& input[type=number]': {
        '-moz-appearance': 'textfield',
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        }
    },
    '& .MuiInputBase-input': {
        padding: theme.spacing(2)
    }
    // '& .MuiInputAdornment-positionEnd': {
    //     marginRight: 0
    // }
}));

interface RangeSliderProps {
    value: [number, number];
    min: number;
    max: number;
    onChange: (data: [number, number]) => void;
    onRangeBlur?: (event: FocusEvent<HTMLInputElement>, data: [number, number]) => void;
    onSliderMouseUp?: (event: MouseEvent<HTMLButtonElement>, data: [number, number]) => void;
    onTextfieldBlur?: (event: FocusEvent<HTMLInputElement>, data: [number, number]) => void;
    onTextfieldEnterKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>, data: [number, number]) => void;
    size?: 'small' | 'medium';
    step?: number;
    color?: 'primary' | 'secondary' | 'tertiary' | 'neutral';
    headerTitle?: string;
    marks?: boolean | mark[];
    disabled?: boolean;
    rightTextfieldWidth?: number;
    leftTextfieldWidth?: number;
    textfieldHeight?: number;
    disableSwap?: boolean;
    showPlus?: boolean;
}

function getAdjustedValues(valueArr: [number, number], minVal: number, maxVal: number): [number, number] {
    let [value1, value2] = valueArr;

    if (value1 > value2 || value1 > maxVal) {
        // console.log('1', [value1, value2]);
        value1 = value2 - 1;
    }
    if (value1 < minVal) {
        // console.log('2', [value1, value2]);
        value1 = minVal;
    }

    if (value2 < value1 || value2 < minVal) {
        // console.log('3', [value1, value2]);
        value2 = value1 + 1;
    }
    if (value2 > maxVal) {
        // console.log('4', [value1, value2]);
        value2 = maxVal;
    }

    return [value1, value2];
}

export const RangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>((props, ref) => {
    const {
        value,
        size,
        step,
        marks,
        min,
        max,
        color,
        headerTitle,
        disabled,
        rightTextfieldWidth,
        leftTextfieldWidth,
        textfieldHeight,
        onChange: onRangeChange,
        onRangeBlur,
        onSliderMouseUp,
        onTextfieldBlur,
        onTextfieldEnterKeyDown,
        showPlus,
        disableSwap
    } = props;

    const [textFieldVal, setTextFieldVal] = useState<{ lowerField: number; upperField: number }>({ lowerField: value[0], upperField: value[1] });

    useEffect(() => {
        setTextFieldVal(() => ({ ...textFieldVal, lowerField: value[0], upperField: value[1] }));
    }, [value]);

    useEffect(() => {
        const adjustedValues = getAdjustedValues(value, min, max);
        if (value[0] !== adjustedValues[0] || value[1] !== adjustedValues[1]) {
            onRangeChange(adjustedValues);
        }
    }, [value[0], value[1]]);

    const sliderChangeHandler = (e: any) => {
        const data = e.target.value;
        const newData: [number, number] = [Number(data[0]), Number(data[1])];
        setTextFieldVal({ ...textFieldVal, lowerField: newData[0], upperField: newData[1] });
        onRangeChange(newData);
    };

    const minChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = Number(inputValue);
        if (!isNaN(numericValue)) {
            const newData: [number, number] = [numericValue, value[1]];
            setTextFieldVal({ ...textFieldVal, lowerField: newData[0], upperField: newData[1] });
        }
    };

    const maxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = Number(inputValue);
        if (!isNaN(numericValue)) {
            const newData: [number, number] = [value[0], numericValue];
            setTextFieldVal({ ...textFieldVal, lowerField: newData[0], upperField: newData[1] });
        }
    };

    const textfieldBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
        const rawData: [number, number] = [textFieldVal.lowerField, textFieldVal.upperField];
        const newVal = getAdjustedValues(rawData, min, max);
        setTextFieldVal({ ...textFieldVal, lowerField: newVal[0], upperField: newVal[1] });
        onRangeChange(newVal);
        onTextfieldBlur?.(event, newVal);
    };

    const textfieldKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const rawData: [number, number] = [textFieldVal.lowerField, textFieldVal.upperField];
            const newVal = getAdjustedValues(rawData, min, max);
            setTextFieldVal({ ...textFieldVal, lowerField: newVal[0], upperField: newVal[1] });
            onRangeChange(newVal);
            onTextfieldEnterKeyDown?.(event, newVal);
        }
    };

    return (
        <Box ref={ref} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} flex={1}>
            <BodyXS color={'text.secondary'}>{headerTitle}</BodyXS>
            <Box mt={headerTitle ? 2 : 0} display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                <Box width={leftTextfieldWidth ? leftTextfieldWidth : 64} height={textfieldHeight ? textfieldHeight : 36}>
                    <NumberTextField
                        label=""
                        //doing .toString() to eliminate the leading zero bug
                        value={textFieldVal.lowerField.toString()}
                        onChange={minChangeHandler}
                        onBlur={textfieldBlurHandler}
                        onKeyDown={textfieldKeyDownHandler}
                        disabled={disabled}
                        inputProps={{ style: { textAlign: 'center' } }}
                        // inputProps={{ style: { textAlign: 'center', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' } }}
                    />
                </Box>

                <Box pl={4} pr={4} display={'flex'} flex={1}>
                    <Slider
                        value={value}
                        min={min}
                        max={max}
                        color={color ? color : 'primary'}
                        size={size}
                        marks={marks}
                        step={step}
                        onChange={sliderChangeHandler}
                        onBlur={(e: FocusEvent<HTMLInputElement>) => onRangeBlur?.(e, value)}
                        onMouseUp={(e: MouseEvent<HTMLButtonElement>) => onSliderMouseUp?.(e, value)}
                        disabled={disabled}
                        disableSwap={disableSwap}
                    />
                </Box>

                <Box width={rightTextfieldWidth ? rightTextfieldWidth : 64} height={textfieldHeight ? textfieldHeight : 36}>
                    <NumberTextField
                        label=""
                        //doing .toString() to eliminate the leading zero bug
                        // value={textFieldVal.upperField.toString()}
                        value={textFieldVal.upperField === max && showPlus ? `${textFieldVal.upperField}+` : textFieldVal.upperField.toString()}
                        onChange={maxChangeHandler}
                        onBlur={textfieldBlurHandler}
                        onKeyDown={textfieldKeyDownHandler}
                        disabled={disabled}
                        inputProps={{ style: { textAlign: 'center' } }}
                        // Fpr ellipsis and + sign
                        // inputProps={{ style: { textAlign: 'center', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' } }}
                        // InputProps={{
                        //     endAdornment: textFieldVal.upperField === max && showPlus ? '+' : null
                        // }}
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
    disableSwap: true,
    showPlus: true
};
