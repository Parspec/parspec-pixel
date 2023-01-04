import { IconStyle } from "./ModalStyles"
import { Icons } from "../Icons"
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
          <Icons.CloseIcon fontSize="small"/>
        </IconStyle>
      </HeaderContentStyle>      
  )
}
