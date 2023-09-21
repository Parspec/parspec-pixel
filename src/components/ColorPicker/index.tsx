import { useState } from 'react';

import { SketchPicker, SketchPickerProps, ColorResult } from 'react-color';
import { Box } from '../Box';
import { CustomPopper, Fade } from '../Popper';
import { ClickAwayListener } from '@mui/material';

export const ColorPicker: React.FC<SketchPickerProps> = (props) => {
    return <SketchPicker {...props} />;
};

interface ITransitionsColorPicker {
    color: string;
    onChange: (param: ColorResult) => void;
    onClickAway: () => void;
}

export const TransitionsColorPicker: React.FC<ITransitionsColorPicker> = ({ color, onChange, onClickAway }) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    function clickAwayHandler() {
        setOpen(false);
        onClickAway();
    }

    function handleOnColorChange(color: ColorResult) {
        onChange(color);
    }

    return (
        <>
            <Box sx={{ cursor: 'pointer' }} onClick={handleClick} width={24} height={24} borderRadius={100} bgcolor={color}></Box>
            {open && (
                <ClickAwayListener onClickAway={clickAwayHandler}>
                    <Box>
                        <CustomPopper placement="auto" open={open} anchorEl={anchorEl} transition>
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Box sx={{ m: 2 }}>
                                        <ColorPicker color={color} onChange={(color: ColorResult) => handleOnColorChange(color)} />
                                    </Box>
                                </Fade>
                            )}
                        </CustomPopper>
                    </Box>
                </ClickAwayListener>
            )}
        </>
    );
};

TransitionsColorPicker.defaultProps = {
    color: '#37d67a'
};
