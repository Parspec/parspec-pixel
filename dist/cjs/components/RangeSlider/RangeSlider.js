"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeSlider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Box_1 = require("../Box");
const Typography_1 = require("../Typography");
const TextField_1 = require("../TextField");
const Slider_1 = require("../Slider");
const styles_1 = require("@mui/material/styles");
const NumberTextField = (0, styles_1.styled)(TextField_1.TextField)(({ theme }) => ({
    '& input[type=number]': {
        '-moz-appearance': 'textfield',
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        }
    }
}));
function getAdjustedValues(valueArr, minVal, maxVal) {
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
exports.RangeSlider = (0, react_1.forwardRef)((props, ref) => {
    const { value, size, step, marks, min, max, color, headerTitle, disabled, textfieldWidth, textfieldHeight, onChange: onRangeChange, onRangeBlur, onSliderMouseUp, onTextfieldBlur, onTextfieldEnterKeyDown, disableSwap } = props;
    const [textFieldVal, setTextFieldVal] = (0, react_1.useState)({ lowerField: value[0], upperField: value[1] });
    (0, react_1.useEffect)(() => {
        setTextFieldVal(() => (Object.assign(Object.assign({}, textFieldVal), { lowerField: value[0], upperField: value[1] })));
    }, [value]);
    (0, react_1.useEffect)(() => {
        const adjustedValues = getAdjustedValues(value, min, max);
        if (value[0] !== adjustedValues[0] || value[1] !== adjustedValues[1]) {
            onRangeChange(adjustedValues);
        }
    }, [value[0], value[1]]);
    const sliderChangeHandler = (e) => {
        const data = e.target.value;
        const newData = [Number(data[0]), Number(data[1])];
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newData[0], upperField: newData[1] }));
        onRangeChange(newData);
    };
    const minChangeHandler = (event) => {
        const currValue = Number(event.target.value);
        const newData = [currValue, value[1]];
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newData[0], upperField: newData[1] }));
    };
    const maxChangeHandler = (event) => {
        const currValue = Number(event.target.value);
        const newData = [value[0], currValue];
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newData[0], upperField: newData[1] }));
    };
    const textfieldBlurHandler = (event) => {
        const rawData = [textFieldVal.lowerField, textFieldVal.upperField];
        const newVal = getAdjustedValues(rawData, min, max);
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newVal[0], upperField: newVal[1] }));
        onRangeChange(newVal);
        onTextfieldBlur(event, value);
    };
    const textfieldKeyDownHandler = (event) => {
        if (event.key === 'Enter') {
            const rawData = [textFieldVal.lowerField, textFieldVal.upperField];
            const newVal = getAdjustedValues(rawData, min, max);
            setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newVal[0], upperField: newVal[1] }));
            onRangeChange(newVal);
            onTextfieldEnterKeyDown(event, value);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ ref: ref, width: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }, { children: [(0, jsx_runtime_1.jsx)(Typography_1.BodyXS, Object.assign({ color: 'text.secondary' }, { children: headerTitle })), (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ mt: headerTitle ? 2 : 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 1 }, { children: [(0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: textfieldWidth ? textfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: (0, jsx_runtime_1.jsx)(NumberTextField, { label: "", type: "number", 
                            //doing .toString() to eliminate the leading zero bug
                            value: textFieldVal.lowerField.toString(), 
                            // value={value[0].toString()}
                            inputProps: { style: { textAlign: 'center' } }, onChange: minChangeHandler, onBlur: textfieldBlurHandler, onKeyDown: textfieldKeyDownHandler, disabled: disabled }) })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ pl: 4, pr: 4, width: 1 }, { children: (0, jsx_runtime_1.jsx)(Slider_1.Slider, { value: value, min: min, max: max, color: color ? color : 'primary', size: size, marks: marks, step: step, onChange: sliderChangeHandler, onBlur: (e) => onRangeBlur(e, value), onMouseUp: (e) => onSliderMouseUp(e, value), disabled: disabled, disableSwap: disableSwap }) })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: textfieldWidth ? textfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: (0, jsx_runtime_1.jsx)(NumberTextField, { label: "", type: "number", 
                            //doing .toString() to eliminate the leading zero bug
                            value: textFieldVal.upperField.toString(), 
                            // value={value[1].toString()}
                            inputProps: { style: { textAlign: 'center' } }, onChange: maxChangeHandler, onBlur: textfieldBlurHandler, onKeyDown: textfieldKeyDownHandler, disabled: disabled }) }))] }))] })));
});
exports.RangeSlider.defaultProps = {
    value: [0, 100],
    size: 'small',
    color: 'primary',
    disabled: false,
    disableSwap: true
};
//# sourceMappingURL=RangeSlider.js.map