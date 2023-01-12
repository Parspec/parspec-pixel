import {CloseIcon} from "../Icons"
import { Typography } from "../Typography"
import { HeaderContentStyle } from "./ModalStyles"
import { IconButton } from "@mui/material";
import { Box } from "../Box";

export interface HeaderProps {
  title: string;
  onClose: ()=>void;
};

export const Header: React.FC<HeaderProps>= (props) => {
  return (
      <Box sx={HeaderContentStyle}>
        <Typography.BodyBig 
          textTransform={"capitalize"} 
          fontWeight={600}
        >
          {props.title}
        </Typography.BodyBig>
        <IconButton onClick={props.onClose}>
          <CloseIcon fontSize="small"/>
        </IconButton>
      </Box>      
  )
}
