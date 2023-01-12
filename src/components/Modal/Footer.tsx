
import { Box } from "../Box";
import { Button } from "../Button"
import { FooterContentStyle } from "./ModalStyles"

export interface FooterProps {
  onAccept?: ()=>void;
  onReject?: ()=>void;
  cancelButtonLabel?: string;
  continueButtonLabel?: string;
};

export const Footer: React.FC<FooterProps>= (props) => {
  return (
      <Box sx={FooterContentStyle}>
        <Button 
          color="secondary" 
          variant="outlined"
          onClick={props.onReject}
          >
          {props.cancelButtonLabel}
        </Button>
        <Button 
          color="primary" 
          variant="contained"
          onClick={props.onAccept} 
          >
          {props.continueButtonLabel}
        </Button>
      </Box>      
  )
}

Footer.defaultProps = {
  cancelButtonLabel: "Cancel",
  continueButtonLabel: "Submit",
  onAccept: () => {},
  onReject: () => {}
}
