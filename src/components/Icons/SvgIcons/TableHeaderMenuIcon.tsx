import { SvgIcon, SvgIconProps, getFillColor } from '../SvgIcon';

export const TableHeaderMenuIcon: React.FC<SvgIconProps> = ({ fontSize, color }) => {
    return (
        <SvgIcon fontSize={fontSize} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.83317 12.8336H12.1665C12.5347 12.8336 12.8332 12.5351 12.8332 12.1669V3.83341C12.8332 3.46522 12.5347 3.16675 12.1665 3.16675H3.83317C3.46498 3.16675 3.1665 3.46523 3.1665 3.83341V12.1669C3.1665 12.5351 3.46498 12.8336 3.83317 12.8336Z"
                stroke={getFillColor(String(color))}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                color="transparent"
            />
            <path d="M6.1665 3.33325V12.6666" stroke={getFillColor(String(color))} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.8335 3.33325V12.6666" stroke={getFillColor(String(color))} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </SvgIcon>
    );
};

TableHeaderMenuIcon.defaultProps = {
    fontSize: 'medium',
    color: 'primary'
};
