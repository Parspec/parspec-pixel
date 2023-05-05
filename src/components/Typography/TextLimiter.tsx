import { useEffect, useRef, useState } from 'react';
import styled from '@mui/material/styles/styled';
import { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

import { Box } from '../Box';
import { Tooltip } from '../Tooltip';

interface TextLimiterProps {
    tooltip: React.ReactNode;
    text: React.ReactNode;
    lines: number;
}

const StyledToolTip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: '60%',
        wordBreak: 'break-word'
    }
});

export const TextLimiter = (props: TextLimiterProps) => {
    const textElementRef = useRef<HTMLInputElement | null>(null);
    const [hoverStatus, setHover] = useState(false);

    const compareSize = () => {
        const compare = textElementRef?.current?.scrollWidth! > textElementRef?.current?.clientWidth! || textElementRef?.current?.scrollHeight! > textElementRef?.current?.clientHeight!;
        setHover(compare);
    };

    useEffect(() => {
        compareSize();
        window.addEventListener('resize', compareSize);

        return () => {
            window.removeEventListener('resize', compareSize);
        };
    }, []);

    useEffect(compareSize, [props.text]);

    return (
        <StyledToolTip title={props.tooltip} disableHoverListener={!hoverStatus}>
            <Box
                ref={textElementRef}
                height="100%"
                width="100%"
                style={{
                    maxWidth: '100%',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: props.lines,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    wordBreak: props.lines > 1 ? 'break-word' : 'break-all'
                }}
            >
                {props.text}
            </Box>
        </StyledToolTip>
    );
};
