import {default as MUICloseIcon} from '@mui/icons-material/Close';
import { Box } from '../Box';

interface IconType{
  fontSize?:  React.CSSProperties['fontSize'];
}
export const CloseIcon: React.FC<IconType> = (props) => {
  return <>
    <Box fontSize={props?.fontSize}>
      <MUICloseIcon fontSize='inherit'/>
    </Box>
  </>
}

export const Icon = {
  CloseIcon,
}