import { useEffect, useState } from 'react';
import { CircularProgress } from '../CircularProgress';
import { Box } from '../Box';

export interface ImgProps {
    src: string;
    width: string;
    height: string;
}
export const Img = ({ src, width, height, ...rest }: ImgProps) => {
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImgSrc(src);
        };
    }, [src]);
    if (!imgSrc) {
        return (
            <Box width={width} height={height} display="flex" justifyContent="center" alignItems="center">
                <CircularProgress />
            </Box>
        );
    }
    return <img src={imgSrc} {...rest} />;
};
