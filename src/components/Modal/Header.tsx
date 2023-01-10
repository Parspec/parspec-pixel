import { IconStyle } from "./ModalStyles"
import {PixelIcons} from "../Icons"
import { Typography } from "../Typography"
import { HeaderContentStyle } from "./ModalStyles"

export interface HeaderProps {
  title: string;
  onClose: ()=>void;
};

export const Header: React.FC<HeaderProps>= (props) => {
  return (
      <HeaderContentStyle>
        <Typography.BodyBig 
          textTransform={"capitalize"} 
          fontWeight={600}
        >
          {props?.title}
        </Typography.BodyBig>
        <IconStyle onClick={props?.onClose}>
          <PixelIcons.CloseIcon fontSize="small"/>
        </IconStyle>
      </HeaderContentStyle>      
  )
}
