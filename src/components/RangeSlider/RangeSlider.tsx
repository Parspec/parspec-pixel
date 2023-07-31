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

enum TEXT_FIELD_SIDE {
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
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
        onRangeBlur = () => {},
        onSliderMouseUp = () => {},
        onTextfieldBlur = () => {},
        onTextfieldEnterKeyDown = () => {},
        showPlus,
        disableSwap
    } = props;

    const [textFieldVal, setTextFieldVal] = useState<{ lowerField: number; upperField: number }>({ lowerField: value[0], upperField: value[1] });

    const [isMaxTextfieldFocused, setMaxTextfieldFocuse] = useState<boolean>(true);

    function getAdjustedValues(valueArr: [number, number], minVal: number, maxVal: number, side: `${TEXT_FIELD_SIDE}`): [number, number] {
        let [value1, value2] = valueArr;

        if (value1 > maxVal || (side === TEXT_FIELD_SIDE.LEFT && value1 > value2)) {
            // console.log('1', [value1, value2]);
            value1 = value2;
        } else if (value1 < minVal) {
            // console.log('2', [value1, value2]);
            value1 = minVal;
        }

        if (value2 < minVal || (side === TEXT_FIELD_SIDE.RIGHT && value1 > value2)) {
            // console.log('3', [value1, value2]);
            value2 = value1;
        } else if (value2 > maxVal) {
            // console.log('4', [value1, value2]);
            value2 = maxVal;
        }

        return [value1, value2];
    }

    useEffect(() => {
        if (value[0] != textFieldVal.lowerField || value[1] != textFieldVal.upperField) {
            setTextFieldVal(() => ({ ...textFieldVal, lowerField: value[0], upperField: value[1] }));
        }
    }, [value[0], value[1]]);

    const sliderChangeHandler = (e: Event, newValue: number | number[]) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        setTextFieldVal({ ...textFieldVal, lowerField: newValue[0], upperField: newValue[1] });
        onRangeChange([newValue[0], newValue[1]]);
    };

    const minChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = Number(inputValue);
        if (!isNaN(numericValue) && Number.isSafeInteger(numericValue)) {
            const newData: [number, number] = [numericValue, value[1]];
            setTextFieldVal({ ...textFieldVal, lowerField: newData[0], upperField: newData[1] });
        }
    };

    const maxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.target.value;

        if (inputValue.includes('+')) {
            inputValue = inputValue.replace(/\+/g, '');
        }

        const numericValue = Number(inputValue);

        if (!isNaN(numericValue) && Number.isSafeInteger(numericValue)) {
            const newData: [number, number] = [value[0], numericValue];
            setTextFieldVal({ ...textFieldVal, lowerField: newData[0], upperField: newData[1] });
        }
    };

    const textfieldBlurHandler = (event: FocusEvent<HTMLInputElement>, side: `${TEXT_FIELD_SIDE}`) => {
        const rawData: [number, number] = [textFieldVal.lowerField, textFieldVal.upperField];
        const newVal = getAdjustedValues(rawData, min, max, side);
        setTextFieldVal({ ...textFieldVal, lowerField: newVal[0], upperField: newVal[1] });
        onRangeChange(newVal);
        onTextfieldBlur(event, newVal);
    };

    const textfieldKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>, side: `${TEXT_FIELD_SIDE}`) => {
        if (event.key === 'Enter') {
            const rawData: [number, number] = [textFieldVal.lowerField, textFieldVal.upperField];
            const newVal = getAdjustedValues(rawData, min, max, side);
            setTextFieldVal({ ...textFieldVal, lowerField: newVal[0], upperField: newVal[1] });
            onRangeChange(newVal);
            onTextfieldEnterKeyDown(event, newVal);
        }
    };

    function handleMaxTextfieldBlur(event: FocusEvent<HTMLInputElement>) {
        setMaxTextfieldFocuse(true);
        textfieldBlurHandler(event, TEXT_FIELD_SIDE.RIGHT);
    }

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
                        onBlur={(event) => {
                            textfieldBlurHandler(event as FocusEvent<HTMLInputElement>, TEXT_FIELD_SIDE.LEFT);
                        }}
                        onKeyDown={(event) => textfieldKeyDownHandler(event as React.KeyboardEvent<HTMLInputElement>, TEXT_FIELD_SIDE.LEFT)}
                        disabled={disabled}
                        inputProps={{ style: { textAlign: 'center' } }}
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
                        onBlur={(e: FocusEvent<HTMLInputElement>) => onRangeBlur(e, value)}
                        onMouseUp={(e: MouseEvent<HTMLButtonElement>) => onSliderMouseUp(e, value)}
                        disabled={disabled}
                        disableSwap={disableSwap}
                    />
                </Box>

                <Box width={rightTextfieldWidth ? rightTextfieldWidth : 64} height={textfieldHeight ? textfieldHeight : 36}>
                    <NumberTextField
                        label=""
                        //doing .toString() to eliminate the leading zero bug
                        // value={textFieldVal.upperField.toString()}
                        value={textFieldVal.upperField === max && showPlus && isMaxTextfieldFocused ? `${textFieldVal.upperField}+` : textFieldVal.upperField.toString()}
                        onChange={maxChangeHandler}
                        onFocus={() => {
                            setMaxTextfieldFocuse(false);
                        }}
                        onBlur={handleMaxTextfieldBlur}
                        onKeyDown={(event) => {
                            textfieldKeyDownHandler(event as React.KeyboardEvent<HTMLInputElement>, TEXT_FIELD_SIDE.RIGHT);
                        }}
                        disabled={disabled}
                        inputProps={{ style: { textAlign: 'center' } }}
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
    showPlus: false
};
