import { Close } from '@mui/icons-material/';
import { IconProps } from '.';

export const CloseIcon: React.FC<IconProps> = ({fontSize}) => {
  return (
    <Close fontSize={fontSize}/>
  )
}