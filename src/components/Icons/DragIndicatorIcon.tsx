import { DragIndicator } from '@mui/icons-material/';
import { IconProps } from '.';

export const DragIndicatorIcon: React.FC<IconProps>  = ({fontSize}) => {
  return (
    <DragIndicator fontSize={fontSize} />
  )
}