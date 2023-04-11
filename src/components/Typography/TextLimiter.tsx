import { useEffect, useRef, useState } from 'react';
import { Box } from '../Box';
import { Tooltip } from '../Tooltip';

interface TextLimiterProps {
    tooltip: React.ReactNode;
    text: React.ReactNode;
    lines: number;
}

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
    }, []);

    useEffect(
        () => () => {
            window.removeEventListener('resize', compareSize);
        },
        []
    );

    return (
        <Tooltip title={props.tooltip} disableHoverListener={!hoverStatus}>
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
                    textOverflow: 'ellipsis'
                }}
            >
                {props.text}
            </Box>
        </Tooltip>
    );
};
