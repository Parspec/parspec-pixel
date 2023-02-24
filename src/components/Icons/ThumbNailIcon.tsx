import { SvgIcon, SvgIconProps } from '@mui/material';

export const ThumbNailIcon: React.FC<SvgIconProps> = ({ fontSize }) => {
    return (
        <SvgIcon fontSize={fontSize} width="32" height="32" viewBox="0 0 32 32" fill="none" color="primary" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="4" fill="white" fill-opacity="0.3" style={{ mixBlendMode: 'overlay' }} />
            <path
                d="M8.75 20L11.4962 16.5067C12.2749 15.5161 13.7645 15.4837 14.5856 16.4395L17 19.25M14.915 16.823C15.9522 15.5037 17.3973 13.6346 17.4914 13.5129L17.5013 13.5002C18.2815 12.516 19.7663 12.4858 20.5856 13.4395L23 16.25M10.75 8.75H21.25C22.3546 8.75 23.25 9.64543 23.25 10.75V21.25C23.25 22.3546 22.3546 23.25 21.25 23.25H10.75C9.64543 23.25 8.75 22.3546 8.75 21.25V10.75C8.75 9.64543 9.64543 8.75 10.75 8.75Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </SvgIcon>
    );
};
