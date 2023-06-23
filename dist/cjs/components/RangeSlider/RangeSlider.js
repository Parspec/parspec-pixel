"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeSlider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Box_1 = require("../Box");
const Typography_1 = require("../Typography");
const TextField_1 = require("../TextField");
const Slider_1 = require("../Slider");
function adjustValues(valueArr, minVal, maxVal) {
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
exports.RangeSlider = (0, react_1.forwardRef)((props, ref) => {
    const { value, size, step, marks, min, max, color, headerTitle, disabled, textfieldWidth, textfieldHeight, onChange: onRangeChange, onBlur: onBlurChange, disableSwap } = props;
    const [textFieldVal, setTextFieldVal] = (0, react_1.useState)({ lowerField: value[0], upperField: value[1] });
    (0, react_1.useEffect)(() => {
        const adjustedValues = adjustValues(value, min, max);
        onRangeChange(adjustedValues);
    }, []);
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
        // onRangeChange(newData);
    };
    const maxChangeHandler = (event) => {
        const currValue = Number(event.target.value);
        const newData = [value[0], currValue];
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newData[0], upperField: newData[1] }));
        // onRangeChange(newData);
    };
    const blurHandler = (event) => {
        const rawData = [textFieldVal.lowerField, textFieldVal.upperField];
        const newVal = adjustValues(rawData, min, max);
        setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newVal[0], upperField: newVal[1] }));
        onRangeChange(newVal);
        onBlurChange(event);
    };
    const keyDownHandler = (event) => {
        if (event.key === 'Enter') {
            const rawData = [textFieldVal.lowerField, textFieldVal.upperField];
            const newVal = adjustValues(rawData, min, max);
            setTextFieldVal(Object.assign(Object.assign({}, textFieldVal), { lowerField: newVal[0], upperField: newVal[1] }));
            onRangeChange(newVal);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ ref: ref, width: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }, { children: [(0, jsx_runtime_1.jsx)(Typography_1.BodyXS, Object.assign({ color: 'text.secondary' }, { children: headerTitle })), (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ mt: headerTitle ? 2 : 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 1 }, { children: [(0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: textfieldWidth ? textfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: (0, jsx_runtime_1.jsx)(TextField_1.TextField, { label: "", type: "number", 
                            //doing .toString() to eliminate the leading zero bug
                            value: textFieldVal.lowerField.toString(), 
                            // value={value[0].toString()}
                            inputProps: { style: { textAlign: 'center' } }, onChange: minChangeHandler, onBlur: blurHandler, onKeyDown: keyDownHandler, disabled: disabled }) })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ pl: 4, pr: 4, width: 1 }, { children: (0, jsx_runtime_1.jsx)(Slider_1.Slider, { value: value, min: min, max: max, color: color, size: size, marks: marks, step: step, onChange: sliderChangeHandler, onBlur: onBlurChange, disabled: disabled, disableSwap: disableSwap }) })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: textfieldWidth ? textfieldWidth : 64, height: textfieldHeight ? textfieldHeight : 36 }, { children: (0, jsx_runtime_1.jsx)(TextField_1.TextField, { label: "", type: "number", 
                            //doing .toString() to eliminate the leading zero bug
                            value: textFieldVal.upperField.toString(), 
                            // value={value[1].toString()}
                            inputProps: { style: { textAlign: 'center' } }, onChange: maxChangeHandler, onBlur: blurHandler, onKeyDown: keyDownHandler, disabled: disabled }) }))] }))] })));
});
exports.RangeSlider.defaultProps = {
    value: [0, 100],
    size: 'small',
    color: 'primary',
    disabled: false,
    disableSwap: true
};
//# sourceMappingURL=RangeSlider.js.map